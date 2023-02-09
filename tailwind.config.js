/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

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
        'onyx': '#303840',
        'platinum': '#E6E8E6',
        'lightGray': '#CED0CE'
      },
    },
    screens: {
      '2xs': '380px',
      // => @media (min-width: 380px) { ... }

      'xs': '495px',
      // => @media (min-width: 495px) { ... }

      'sm': '650px',
      // => @media (min-width: 650px) { ... }

      'md': '770px' ,
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('tailwind-scrollbar'),
    require('tailwindcss-safe-area'),
    require('autoprefixer'),
  ],
}