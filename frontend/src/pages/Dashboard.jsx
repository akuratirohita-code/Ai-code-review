import { useCallback } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import Navbar from "../components/layout/Navbar";
import EditorPanel from "../components/dashboard/EditorPanel";
import UploadButton from "../components/dashboard/UploadButton";
import StatusIndicator from "../components/dashboard/StatusIndicator";
import ReviewPanel from "../components/dashboard/ReviewPanel";
import DetectedLanguage from "../components/dashboard/DetectedLanguage";

import { useCodeReview } from "../hooks/useCodeReview";
import { DEFAULT_SNIPPETS } from "../constants/languages";
import { buildReportText } from "../utils/formatters";

const Dashboard = () => {
  const {
    code,
    setCode,
    language,
    setLanguage,
    status,
    review,
    STATUS,
  } = useCodeReview(DEFAULT_SNIPPETS.javascript, "javascript");

  const handleFileLoaded = useCallback(
    ({ code: fileCode, language: detectedLanguage }) => {
      setCode(fileCode);

      if (detectedLanguage) {
        setLanguage(detectedLanguage);
      }
    },
    [setCode, setLanguage]
  );

  const handleDownload = useCallback(() => {
    if (!review) return;

    const text = buildReportText(review, language);

    const blob = new Blob([text], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `code-review-report-${Date.now()}.txt`;
    link.click();

    URL.revokeObjectURL(url);

    toast.success("Report downloaded");
  }, [review, language]);

  return (
    <div className="flex h-screen flex-col bg-background">
      <Navbar />

      <div className="flex flex-1 flex-col overflow-hidden">

        {/* Top Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-card/60 px-6 py-3 lg:px-8">

          <UploadButton onFileLoaded={handleFileLoaded} />

          <StatusIndicator status={status} />

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid flex-1 grid-cols-1 gap-5 overflow-hidden p-5 lg:grid-cols-5 lg:p-6"
        >

          {/* Code Editor */}
          <div className="lg:col-span-3 h-[45vh] lg:h-full">
            <EditorPanel
              code={code}
              onChange={setCode}
              language={language}
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4 lg:col-span-2 h-[45vh] lg:h-full overflow-hidden">

            {/* Detected Language */}
            <DetectedLanguage language={language} />

            {/* AI Review */}
            <div className="flex-1 overflow-hidden">
              <ReviewPanel
                status={status}
                review={review}
                onDownload={handleDownload}
                STATUS={STATUS}
              />
            </div>

          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default Dashboard;