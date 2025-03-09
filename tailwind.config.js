/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class", // Set dark mode to 'class' instead of 'media'
  theme: {
    extend: {},
  },
  plugins: [],
};
