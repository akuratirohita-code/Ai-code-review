import { api } from "./api";

/**
 * Sends the current editor contents to the backend for review.
 * Returns { summary, issues } on success; throws on failure so
 * callers (useCodeReview) can drive their own error/toast state.
 */
export const requestCodeReview = async ({ code, language, signal }) => {
  const { data } = await api.post("/review", { code, language }, { signal });
  return data.data;
};
