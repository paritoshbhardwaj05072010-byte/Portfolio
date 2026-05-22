import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          muted: "hsl(var(--accent-muted))",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          elevated: "hsl(var(--surface-elevated))",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "clamp(3.5rem, 8vw + 1rem, 7.5rem)",
          { lineHeight: "0.92", letterSpacing: "-0.04em", fontWeight: "500" },
        ],
        "display-lg": [
          "clamp(2.5rem, 5vw + 0.5rem, 4.5rem)",
          { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "500" },
        ],
        "display-md": [
          "clamp(1.75rem, 3vw + 0.25rem, 2.75rem)",
          { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "500" },
        ],
      },
      spacing: {
        section: "clamp(5rem, 12vh, 9rem)",
        gutter: "clamp(1.25rem, 4vw, 2.5rem)",
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        hover: "220ms",
        reveal: "600ms",
      },
      animation: {
        "fade-in": "fade-in 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-glow": "pulse-glow 8s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
      },
      backgroundImage: {
        "radial-accent":
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--accent) / 0.15), transparent)",
        "radial-surface":
          "radial-gradient(ellipse 60% 40% at 50% 100%, hsl(var(--surface-elevated)), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
