/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ff26",
        secondry: "#0f172a",
        third: "#00b21a",
        black: colors.black,
        sky: "#037acf",
        white: colors.white,
      },
    },
  },
  plugins: [],
};
