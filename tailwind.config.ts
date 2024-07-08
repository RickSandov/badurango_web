import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/cart/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        primary: "#FCB71E",
        primaryLight: "#FFEBCC",
        primaryDark: "#FAAB00",
        baCream: "#FDEAC0",
        bared: "#CE0F2D",
        baBlue: "#1B7FE2",
        baGreen: "#009530",
        baGreenDark: "#01561c",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        cloudsLeft: "cloudsLeft 6.5s ease-out forwards",
        cloudsRight: "cloudsRight 6.5s ease-out  forwards",
        logoElevate: "logoElevate 2.8s ease-out forwards",
        appearHero: "appear 0.5s ease-in-out 2.5s backwards",
        appearCartForeground: "appear 0.5s ease-in-out backwards",
        slideInCart: "slideInCart .5s ease-in-out forwards",
        disappearCartForeground:
          "disappearCartForeground .5s ease-in-out forwards",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
        },
        logoElevate: {
          "100%": { transform: "translateY(-145%)" },
        },
        cloudsLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-200vw)" },
        },
        cloudsRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(200vw)" },
        },
        slideInCart: {
          from: { transform: "translateX(100vw)" },
          to: { transform: "translateX (0)" },
        },
        disappearCartForeground: {
          "100%": { opacity: "0", display: "none" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
