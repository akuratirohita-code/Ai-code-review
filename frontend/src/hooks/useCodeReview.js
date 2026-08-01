import { useEffect, useRef, useState, useCallback } from "react";
import toast from "react-hot-toast";
import { useDebounce } from "./useDebounce";
import { requestCodeReview } from "../services/reviewService";
import { detectLanguage } from "../utils/detectLanguage";

const STATUS = {
  IDLE: "idle",
  TYPING: "typing",
  REVIEWING: "reviewing",
  DONE: "done",
  ERROR: "error",
};

export const useCodeReview = (
  initialCode = "",
  initialLanguage = "javascript"
) => {
  const [code, setCodeState] = useState(initialCode);
  const [language, setLanguage] = useState(initialLanguage);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [review, setReview] = useState(null);
  const [history, setHistory] = useState([]);

  const debouncedCode = useDebounce(code, 1000);

  const abortRef = useRef(null);
  const lastReviewedRef = useRef("");

  // Automatically detect language whenever code changes
  const setCode = useCallback(
    (newCode) => {
      setCodeState(newCode);

      const detectedLanguage = detectLanguage(newCode);

      if (detectedLanguage !== language) {
        setLanguage(detectedLanguage);
      }
    },
    [language]
  );

  const runReview = useCallback(async (codeToReview, lang) => {
    if (abortRef.current) {
      abortRef.current.abort();
    }

    const controller = new AbortController();
    abortRef.current = controller;

    setStatus(STATUS.REVIEWING);

    try {
      const result = await requestCodeReview({
        code: codeToReview,
        language: lang,
        signal: controller.signal,
      });

      setReview(result);

      setStatus(STATUS.DONE);

      setHistory((prev) =>
        [
          {
            id: Date.now(),
            language: lang,
            qualityScore: result.summary.qualityScore,
            timestamp: new Date().toISOString(),
          },
          ...prev,
        ].slice(0, 10)
      );
    } catch (err) {
      if (err.name === "CanceledError" || err.message === "canceled") {
        return;
      }

      setStatus(STATUS.ERROR);

      toast.error(err.message || "Review failed. Please try again.");
    }
  }, []);

  useEffect(() => {
    const trimmed = debouncedCode.trim();

    if (!trimmed) {
      setStatus(STATUS.IDLE);
      setReview(null);
      return;
    }

    if (trimmed === lastReviewedRef.current) {
      return;
    }

    lastReviewedRef.current = trimmed;

    runReview(debouncedCode, language);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedCode, language]);

  useEffect(() => {
    if (code.trim() && code !== debouncedCode) {
      setStatus(STATUS.TYPING);
    }
  }, [code, debouncedCode]);

  const changeLanguage = useCallback((nextLang) => {
    lastReviewedRef.current = "";
    setLanguage(nextLang);
  }, []);

  return {
    code,
    setCode,
    language,
    setLanguage: changeLanguage,
    status,
    review,
    history,
    STATUS,
  };
};