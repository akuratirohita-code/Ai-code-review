import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { env } from "./src/config/env.js";
import reviewRoutes from "./src/routes/reviewRoutes.js";
import { notFoundHandler, errorHandler } from "./src/middlewares/errorHandler.js";
import { logger } from "./src/utils/logger.js";

const app = express();

app.use(cors({ origin: env.clientOrigin }));
app.use(express.json({ limit: "1mb" }));

// Protects the AI endpoint from being hammered by the debounced
// editor if something goes wrong on the client (e.g. a runaway loop).
const reviewLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many review requests. Please slow down." },
});

app.use("/api", reviewLimiter, reviewRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(env.port, () => {
  logger.info(`AI Code Review Assistant API listening on port ${env.port} (${env.nodeEnv})`);
  logger.info(`Active AI provider: ${env.aiProvider}`);
});
