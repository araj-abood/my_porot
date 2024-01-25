/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunitoSans: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        "main-200": "#deb6d1",
        "main-100": "#fcf8fa",
        "main-300": "#c8a4bc",
        "dark-900": "#030637",
        "dark-700": "#3C0753",
        "main-500": "#720455",
      },
    },
  },
  plugins: [],
};
