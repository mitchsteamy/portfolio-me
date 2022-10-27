/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      textColor: {
        'darkBlue': '#003B6D',
        'lightBlue': '#6699CC',
        'onyx': '#3F403F',
        'platinum': '#E6E8E6',
        'lightGray': '#CED0CE'
      },
    },
    plugins: [
      require('tailwind-scrollbar-hide'),
      require('tailwind-scrollbar'),
    ],
  }
}