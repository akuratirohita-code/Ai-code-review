import dotenv from "dotenv";
dotenv.config();

/**
 * Centralized environment configuration.
 * Every other module reads config from here instead of touching
 * process.env directly, so switching environments stays a one-file change.
 */
export const env = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || "development",
  clientOrigin: process.env.CLIENT_ORIGIN || "http://localhost:5173",

  aiProvider: process.env.AI_PROVIDER || "groq",

  groq: {
    apiKey: process.env.GROQ_API_KEY || "",
    model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
    baseUrl: "https://api.groq.com/openai/v1/chat/completions",
  },
  openai: {
    apiKey: process.env.OPENAI_API_KEY || "",
    model: process.env.OPENAI_MODEL || "gpt-4o-mini",
    baseUrl: "https://api.openai.com/v1/chat/completions",
  },
  anthropic: {
    apiKey: process.env.ANTHROPIC_API_KEY || "",
    model: process.env.ANTHROPIC_MODEL || "claude-sonnet-4-6",
    baseUrl: "https://api.anthropic.com/v1/messages",
  },
  gemini: {
    apiKey: process.env.GEMINI_API_KEY || "",
    model: process.env.GEMINI_MODEL || "gemini-1.5-flash",
  },
};
