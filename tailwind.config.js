/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
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
