import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "wave-pulse": "wave-pulse 4s ease-in-out infinite",
        // fadeIn: "fadeIn 0.5s ease-out forwards",
        // slideUp: "slideUp 0.5s ease-out forwards",
        // slideInFromLeft: "slideInFromLeft 0.5s ease-out forwards",
        // slideInFromRight: "slideInFromRight 0.5s ease-out forwards",
        // scaleIn: "scaleIn 0.5s ease-out forwards",
      },
      keyframes: {
        "wave-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
        // fadeIn: {
        //   "0%": { opacity: "0" },
        //   "100%": { opacity: "1" },
        // },
        // slideUp: {
        //   "0%": { transform: "translateY(20px)", opacity: "0" },
        //   "100%": { transform: "translateY(0)", opacity: "1" },
        // },
        // slideInFromLeft: {
        //   "0%": { transform: "translateX(-20px)", opacity: "0" },
        //   "100%": { transform: "translateX(0)", opacity: "1" },
        // },
        // slideInFromRight: {
        //   "0%": { transform: "translateX(20px)", opacity: "0" },
        //   "100%": { transform: "translateX(0)", opacity: "1" },
        // },
        // scaleIn: {
        //   "0%": { transform: "scale(0.95)", opacity: "0" },
        //   "100%": { transform: "scale(1)", opacity: "1" },
        // },
      },
      colors: {
        main: "#88aaee",
        overlay: "rgba(0,0,0,0.8)", // background color overlay for alert dialogs, modals, etc.

        // light mode
        bg: "#dfe5f2",
        text: "#000",
        border: "#000",

        // dark mode
        darkBg: "#272933",
        darkText: "#eeefe9",
        darkBorder: "#000",
        secondaryBlack: "#212121", // opposite of plain white, not used pitch black because borders and box-shadows are that color
      },
      borderRadius: {
        base: "5px",
      },
      boxShadow: {
        light: "4px 4px 0px 0px #000",
        dark: "4px 4px 0px 0px #000",
      },
      translate: {
        boxShadowX: "4px",
        boxShadowY: "4px",
        reverseBoxShadowX: "-4px",
        reverseBoxShadowY: "-4px",
      },
      fontWeight: {
        base: "500",
        heading: "700",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
