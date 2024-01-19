/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "corporate"],
  },
  plugins: [require("daisyui")],
}