import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0F0D",
        surface: "#111B17",
        surface2: "#152019",
        border: "#22322A",
        pass: "#3ECF8E",
        passDim: "#2A9467",
        defect: "#F97066",
        amber: "#F0B429",
        text: "#E7EDE9",
        muted: "#8FA39A",
        mutedDark: "#5B6E65",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
        body: ["var(--font-plex-sans)", "sans-serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(143,163,154,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(143,163,154,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
        scanline: "scanline 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
