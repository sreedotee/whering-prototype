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
        // Whering brand purple
        plum: {
          DEFAULT: "#9966FF",
          50: "#F3EEFF",
          100: "#E8DDFF",
          200: "#D0BBFF",
          300: "#B899FF",
          400: "#A07AFF",
          500: "#9966FF",
          600: "#7A44E0",
          700: "#5C2EBA",
          800: "#401C8A",
          900: "#260D5C",
        },
        // Whering brand blue
        cyan: {
          DEFAULT: "#00AAFF",
          50: "#E6F6FF",
          100: "#CCEEFF",
          200: "#99DDFF",
          300: "#66CCFF",
          400: "#33BBFF",
          500: "#00AAFF",
          600: "#0088CC",
          700: "#006699",
          800: "#004466",
          900: "#002233",
        },
        // Whering brand lime
        lime: {
          DEFAULT: "#CCFF00",
          50: "#F5FFB3",
          100: "#EEFF80",
          200: "#E5FF4D",
          300: "#D9FF1A",
          400: "#CCFF00",
          500: "#AACC00",
          600: "#889900",
          700: "#667700",
          800: "#445500",
          900: "#223300",
        },
        // Whering brand orange
        orange: {
          DEFAULT: "#FF641E",
          50: "#FFF0E8",
          100: "#FFE0CC",
          200: "#FFC199",
          300: "#FFA066",
          400: "#FF8033",
          500: "#FF641E",
          600: "#CC4400",
          700: "#993300",
          800: "#662200",
          900: "#331100",
        },
        // success = dark lime (legible as text, backgrounds use lime-* directly)
        success: "#6B8800",
        primary: "var(--foreground)",
        secondary: "#5C5C5C",
        tertiary: "#9A9A9A",
        surface: "#F6FAFC",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
