/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "btn-primary": "#4F255B",
        primary: "#4F386D",
        secondary: "#6E6E6E",
      },
    },
  },
  plugins: [],
};
