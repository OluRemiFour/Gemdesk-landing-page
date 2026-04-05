import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0B",
        foreground: "#E0E0E0",
        primary: {
          DEFAULT: "#5A0F1A",
          hover: "#7A1C28",
        },
        card: {
          DEFAULT: "#121212",
          border: "#1F1F1F",
        },
      },
      borderRadius: {
        DEFAULT: "4px",
      },
      backgroundImage: {
        "noise": "url('/noise.png')",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      animation: {
        "gradient-x": "gradient-x 3s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
