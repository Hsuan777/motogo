/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        digital: ["Digital"],
      },
      animation: {
        scale: "scale 5s ease-in-out infinite",
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
    container: {
      padding: "1rem",
      center: true,
    },
    colors: {
      primary: {
        DEFAULT: "#19A96E",
        dark: "#0A8554",
        light: "#4EC38D",
      },
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      // gray: colors.gray,
      gray: {
        DEFAULT: "#717171",
        dark: "#222222",
        light: "#DDDDDD",
      },
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
    },
  },
  plugins: [],
};
