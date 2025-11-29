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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#1E3A5F",
          50: "#E8EDF2",
          100: "#D1DBE5",
          200: "#A3B7CB",
          300: "#7593B1",
          400: "#476F97",
          500: "#1E3A5F",
          600: "#1A324F",
          700: "#152940",
          800: "#102030",
          900: "#0B1620",
        },
        secondary: {
          DEFAULT: "#0D9488",
          50: "#E6F7F6",
          100: "#CCEFED",
          200: "#99DFDB",
          300: "#66CFC9",
          400: "#33BFB7",
          500: "#0D9488",
          600: "#0B7A70",
          700: "#086058",
          800: "#064640",
          900: "#032C28",
        },
        accent: {
          DEFAULT: "#0D9488",
          50: "#E6F7F6",
          100: "#CCEFED",
          200: "#99DFDB",
          300: "#66CFC9",
          400: "#33BFB7",
          500: "#0D9488",
          600: "#0B7A70",
          700: "#086058",
          800: "#064640",
          900: "#032C28",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
