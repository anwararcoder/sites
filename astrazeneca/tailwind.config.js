/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,css}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2.5s linear infinite',
      },
      fontFamily: {
        'almarai': ['Almarai', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
