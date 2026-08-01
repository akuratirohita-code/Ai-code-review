export const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const scoreLabel = (score) => {
  if (score >= 85) return "Excellent";
  if (score >= 70) return "Good";
  if (score >= 50) return "Needs work";
  return "Poor";
};

export const buildReportText = ({ summary, issues }, language) => {
  const lines = [
    "AI CODE REVIEW REPORT",
    "======================",
    `Language: ${language}`,
    `Generated: ${new Date().toLocaleString()}`,
    "",
    `Quality Score: ${summary.qualityScore}/100`,
    `High severity issues: ${summary.highCount}`,
    `Medium severity issues: ${summary.mediumCount}`,
    `Low severity issues: ${summary.lowCount}`,
    `Estimated time complexity: ${summary.timeComplexity}`,
    `Estimated space complexity: ${summary.spaceComplexity}`,
    "",
    "Overall feedback:",
    summary.overallFeedback,
    "",
    "ISSUES",
    "------",
  ];

  issues.forEach((issue, i) => {
    lines.push(
      "",
      `${i + 1}. [${issue.severity.toUpperCase()}] Line ${issue.line} — ${issue.issue}`,
      `Category: ${issue.category}`,
      `Explanation: ${issue.explanation}`,
      `Suggestion: ${issue.suggestion}`,
      issue.improvedCode ? `Improved code:\n${issue.improvedCode}` : ""
    );
  });

  return lines.filter((l) => l !== undefined).join("\n");
};
