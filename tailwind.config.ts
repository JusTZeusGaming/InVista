import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        panel: "rgb(var(--color-panel) / <alpha-value>)",
        soft: "rgb(var(--color-soft) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        gold: "rgb(var(--color-gold) / <alpha-value>)",
        mint: "rgb(var(--color-mint) / <alpha-value>)",
        coral: "rgb(var(--color-coral) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        display: ["var(--font-space-grotesk)"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(248, 202, 124, 0.15), 0 20px 80px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(248,202,124,0.18), transparent 35%), radial-gradient(circle at 85% 20%, rgba(110,236,220,0.12), transparent 24%), linear-gradient(180deg, rgba(10,10,12,1) 0%, rgba(12,12,15,1) 35%, rgba(17,17,22,1) 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseLine: "pulseLine 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
