/**
 * The AI is instructed to return strict JSON, but models occasionally
 * wrap it in markdown code fences or add stray whitespace. This
 * normalizes the raw text before JSON.parse so the controller never
 * has to deal with malformed payloads.
 */
export const parseAIResponse = (rawText) => {
  if (!rawText || typeof rawText !== "string") {
    throw new Error("Empty response received from AI provider");
  }

  const cleaned = rawText
    .trim()
    .replace(/^```json/i, "")
    .replace(/^```/, "")
    .replace(/```$/, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (err) {
    throw new Error("Failed to parse AI response as JSON: " + err.message);
  }
};
