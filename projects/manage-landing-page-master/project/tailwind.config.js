/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'bright-red': 'hsl(12, 88%, 59%)',
        'dark-blue': 'hsl(228, 39%, 23%)',
        'dark-gray-blue': 'hsl(227, 12%, 61%)',
        'very-dark-blue': 'hsl(233, 12%, 13%)',
        'very-palered': 'hsl(13, 100%, 96%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        'principal': ['"Be Vietnam Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}