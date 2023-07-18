/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        poopins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#468EF9",
        secondary: "#0C66EE",
        blue: "#2F7CF0",
        black: "#2222222",
        gray: "#6666666",
        lightgray: "#DDDDDDD",
        green: "#28C165",
        red: "#F45740",
      },
    },
  },
  plugins: [],
};
