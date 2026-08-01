/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Fixed palette - do not introduce colors outside this set.
        primary: "#C0E1D2",
        background: "#E5EEE4",
        card: "#F6F4E8",
        accent: "#DC9B9B",
        ink: "#2F3E34",
        border: "#D7DDD6",
        severity: {
          high: "#DC9B9B",
          medium: "#F6F4E8",
          low: "#C0E1D2",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(47, 62, 52, 0.06)",
        card: "0 8px 30px rgba(47, 62, 52, 0.08)",
        lift: "0 14px 40px rgba(47, 62, 52, 0.12)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.35 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-out",
        pulseDot: "pulseDot 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
