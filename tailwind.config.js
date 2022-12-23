/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FFFBE9',
        primary: '#AD8B73',
        placeholder: '#CFCBB8',
      },
      fontFamily: {
        karla: ['Karla', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
