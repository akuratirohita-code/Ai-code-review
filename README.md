# ReviewPilot — AI Code Review Assistant

A real-time AI code review platform. Write code in an in-browser editor and get
line-by-line feedback automatically — no "Review Code" button. The app watches
for a ~1000ms pause in typing, then sends the current code to an AI model and
streams back structured suggestions.

Built as a final-year engineering project, styled as a premium SaaS product.

## Tech stack

**Frontend:** React (Vite), Tailwind CSS, React Router, Axios, Monaco Editor,
Lucide React, Framer Motion, React Hot Toast

**Backend:** Node.js, Express.js, dotenv, cors, express-rate-limit

**AI:** Groq API by default — the backend is provider-agnostic and can be
switched to OpenAI, Anthropic (Claude), or Gemini with a single `.env` change.

## Project structure

```
ai-code-review-assistant/
├── backend/
│   ├── server.js                  # Express app entry point
│   └── src/
│       ├── config/                # env + AI provider registry
│       ├── routes/                # /api/review, /api/health
│       ├── controllers/           # request handlers
│       ├── services/              # aiService (provider-agnostic), promptBuilder
│       ├── middlewares/           # validation, error handling
│       └── utils/                 # logger, AI response parsing
│
└── frontend/
    └── src/
        ├── components/
        │   ├── layout/             # Navbar, Footer
        │   ├── landing/            # Hero, Features, CTA
        │   ├── dashboard/          # Editor, ReviewPanel, SuggestionCard, etc.
        │   └── common/             # Button, Badge
        ├── pages/                  # Landing, Dashboard
        ├── hooks/                  # useDebounce, useCodeReview
        ├── services/                # axios instance + reviewService
        ├── constants/              # colors, supported languages
        └── utils/                  # formatters, report builder
```

## Getting started

### 1. Backend

```bash
cd backend
cp .env.example .env
# open .env and paste your Groq API key into GROQ_API_KEY
npm install
npm run dev
```

The API runs at `http://localhost:5000`.

Get a free Groq API key at https://console.groq.com/keys.

### 2. Frontend

```bash
cd frontend
cp .env.example .env   # defaults to http://localhost:5000/api, adjust if needed
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

### 3. Use it

Open the dashboard, pick a language, and start typing (or upload a source
file). About a second after you stop typing, the review panel updates
automatically.

## Switching AI providers

In `backend/.env`, change:

```
AI_PROVIDER=groq        # groq | openai | anthropic | gemini
```

then fill in the matching API key/model variables already scaffolded in
`.env.example`. `backend/src/config/aiConfig.js` defines how each provider's
request/response is shaped — `aiService.js` and the rest of the app never
need to change.

## Color palette

The UI uses a fixed palette, defined once in `frontend/tailwind.config.js`
and mirrored in `frontend/src/constants/colors.js`:

| Role       | Hex       |
|------------|-----------|
| Primary    | `#C0E1D2` |
| Background | `#E5EEE4` |
| Cards      | `#F6F4E8` |
| Accent     | `#DC9B9B` |
| Text       | `#2F3E34` |
| Border     | `#D7DDD6` |

## Supported languages

Java, Python, JavaScript, TypeScript, C, C++, C#, Go, Rust

## What each review checks

Syntax errors, logic errors, performance problems, security issues, memory
problems, time/space complexity, naming conventions, code smells,
readability, best practices, duplicate code, and dead code — each returned
with a line number, severity, explanation, suggestion, and improved code
snippet.
