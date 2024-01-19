/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'head': '#0C9488',
      'dark-head': '#10172A',
      'dark-body': '#334154',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "corporate"],
  },
  plugins: [require("daisyui")],
}




