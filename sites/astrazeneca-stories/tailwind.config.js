/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,css}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2.5s linear infinite',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lexia: ['Lexia', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
