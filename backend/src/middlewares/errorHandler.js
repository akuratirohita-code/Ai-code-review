import { logger } from "../utils/logger.js";

export const notFoundHandler = (req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found.` });
};

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  logger.error(err.message, err.stack);

  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: err.message || "Internal server error.",
  });
};
