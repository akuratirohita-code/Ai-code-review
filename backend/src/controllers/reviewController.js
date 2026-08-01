import { reviewCode } from "../services/aiService.js";
import { logger } from "../utils/logger.js";

export const postReview = async (req, res, next) => {
  const { code, language } = req.body;

  try {
    const result = await reviewCode({ code, language });
    return res.status(200).json({ success: true, data: result });
  } catch (err) {
    logger.error("Review generation failed:", err.message);
    err.status = err.status || 502;
    err.message = `AI review failed: ${err.message}`;
    return next(err);
  }
};

export const getHealth = (req, res) => {
  res.status(200).json({ success: true, message: "AI Code Review Assistant API is running." });
};
