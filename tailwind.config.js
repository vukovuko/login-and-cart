/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "xl-custom": "1300px",
      },
      fontFamily: {
        helvetica: ["Helvetica Neue", "Arial", "sans-serif"],
      },
      letterSpacing: {
        0: "0",
        "-0.01": "-0.01em",
        0.01: "0.01em",
        0.02: "0.02em",
        0.04: "0.04em",
      },
    },
  },
  plugins: [],
};
