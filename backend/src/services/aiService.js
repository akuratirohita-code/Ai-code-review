import axios from "axios";
import { getActiveProvider } from "../config/aiConfig.js";
import { buildReviewMessages } from "./promptBuilder.js";
import { parseAIResponse } from "../utils/parseAIResponse.js";
import { logger } from "../utils/logger.js";

/**
 * Provider-agnostic entry point used by the controller.
 * Swapping AI_PROVIDER in .env is the only change needed to move
 * from Groq to OpenAI, Claude, or Gemini - this function's contract
 * (code + language in, structured review out) never changes.
 */
export const reviewCode = async ({ code, language }) => {
  const provider = getActiveProvider();

  if (!provider.apiKey) {
    throw new Error(
      `Missing API key for provider "${provider.label}". Set it in backend/.env before starting the server.`
    );
  }

  const messages = buildReviewMessages({ code, language });

  const { data } = await axios.post(provider.baseUrl, provider.buildBody(messages), {
    headers: provider.buildHeaders(),
    timeout: 30000,
  });

  const rawText = provider.extractText(data);
  const parsed = parseAIResponse(rawText);

  return normalizeReview(parsed);
};

/**
 * Defensive normalization: guarantees the frontend always receives
 * the same shape even if the model omits a field.
 */
const normalizeReview = (parsed) => {
  const issues = Array.isArray(parsed.issues) ? parsed.issues : [];

  const normalizedIssues = issues.map((issue, index) => ({
    id: issue.id || `issue-${index + 1}`,
    line: Number.isFinite(issue.line) ? issue.line : 0,
    severity: ["high", "medium", "low"].includes(issue.severity) ? issue.severity : "low",
    category: issue.category || "General",
    issue: issue.issue || "Untitled issue",
    explanation: issue.explanation || "",
    suggestion: issue.suggestion || "",
    improvedCode: issue.improvedCode || "",
  }));

  const summary = parsed.summary || {};

  return {
    summary: {
      qualityScore: Number.isFinite(summary.qualityScore) ? summary.qualityScore : 0,
      highCount: normalizedIssues.filter((i) => i.severity === "high").length,
      mediumCount: normalizedIssues.filter((i) => i.severity === "medium").length,
      lowCount: normalizedIssues.filter((i) => i.severity === "low").length,
      timeComplexity: summary.timeComplexity || "N/A",
      spaceComplexity: summary.spaceComplexity || "N/A",
      overallFeedback: summary.overallFeedback || "",
    },
    issues: normalizedIssues,
  };
};
