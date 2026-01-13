/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffffff",
          secondary: "#999999",
          accent: "#ef4444",
          neutral: "#191b17",
          "base-100": "#292929",
          info: "#434343",
          success: "#008300",
          warning: "#e63700",
          error: "#dd002d",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
