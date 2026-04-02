/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,css}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        bigShouldersDisplay: ['Big Shoulders Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
