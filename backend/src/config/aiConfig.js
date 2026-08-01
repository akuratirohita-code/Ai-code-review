import { env } from "./env.js";

/**
 * Provider registry. Each entry knows how to turn a chat-style
 * { model, messages } payload into a request for that vendor's API.
 * aiService.js only ever talks to "the active provider" - it never
 * needs to know which vendor is behind it.
 */
export const AI_PROVIDERS = {
  groq: {
    label: "Groq",
    apiKey: env.groq.apiKey,
    model: env.groq.model,
    baseUrl: env.groq.baseUrl,
    buildHeaders: () => ({
      Authorization: `Bearer ${env.groq.apiKey}`,
      "Content-Type": "application/json",
    }),
    buildBody: (messages) => ({
      model: env.groq.model,
      messages,
      temperature: 0.2,
      max_tokens: 3000,
      response_format: { type: "json_object" },
    }),
    extractText: (data) => data?.choices?.[0]?.message?.content || "",
  },

  openai: {
    label: "OpenAI",
    apiKey: env.openai.apiKey,
    model: env.openai.model,
    baseUrl: env.openai.baseUrl,
    buildHeaders: () => ({
      Authorization: `Bearer ${env.openai.apiKey}`,
      "Content-Type": "application/json",
    }),
    buildBody: (messages) => ({
      model: env.openai.model,
      messages,
      temperature: 0.2,
      response_format: { type: "json_object" },
    }),
    extractText: (data) => data?.choices?.[0]?.message?.content || "",
  },

  anthropic: {
    label: "Anthropic",
    apiKey: env.anthropic.apiKey,
    model: env.anthropic.model,
    baseUrl: env.anthropic.baseUrl,
    buildHeaders: () => ({
      "x-api-key": env.anthropic.apiKey,
      "anthropic-version": "2023-06-01",
      "Content-Type": "application/json",
    }),
    buildBody: (messages) => {
      const system = messages.find((m) => m.role === "system")?.content;
      const rest = messages.filter((m) => m.role !== "system");
      return {
        model: env.anthropic.model,
        max_tokens: 3000,
        system,
        messages: rest,
      };
    },
    extractText: (data) => data?.content?.[0]?.text || "",
  },

  gemini: {
    label: "Gemini",
    apiKey: env.gemini.apiKey,
    model: env.gemini.model,
    baseUrl: `https://generativelanguage.googleapis.com/v1beta/models/${env.gemini.model}:generateContent`,
    buildHeaders: () => ({ "Content-Type": "application/json" }),
    buildBody: (messages) => ({
      contents: messages
        .filter((m) => m.role !== "system")
        .map((m) => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.content }] })),
      systemInstruction: {
        parts: [{ text: messages.find((m) => m.role === "system")?.content || "" }],
      },
    }),
    extractText: (data) => data?.candidates?.[0]?.content?.parts?.[0]?.text || "",
  },
};

export const getActiveProvider = () => {
  const provider = AI_PROVIDERS[env.aiProvider];
  if (!provider) {
    throw new Error(`Unknown AI_PROVIDER "${env.aiProvider}". Valid options: ${Object.keys(AI_PROVIDERS).join(", ")}`);
  }
  return provider;
};
