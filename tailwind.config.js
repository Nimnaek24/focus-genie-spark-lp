/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#001f3f",
      },
      keyframes: {
        open: {
          "0%, 100%": { transform: "rotate(0)" },
          "50%, 60%": { transform: "rotate(-3deg)" },
          "88%": { transform: "rotate(1deg)" },
        },
        close: {
          "0%, 100%": { transform: "rotate(0)" },
          "50%, 60%": { transform: "rotate(6deg)" },
          "88%": { transform: "rotate(-1deg)" },
        },
      },
      animation: {
        open: "open 1s ease-in-out forwards",
        close: "close 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
