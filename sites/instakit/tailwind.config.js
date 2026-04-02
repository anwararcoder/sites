/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,css}"],
  theme: {
    extend: {
      screens: {
        xs: "576px", // Extra Small
        sm: "576px", // Small
        md: "768px", // Medium
        lg: "992px", // Large
        xl: "1200px", // X-Large
        "2xl": "1400px", // XX-Large
      },
      maxWidth: {
        xs: "100%", // or any custom value
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      boxShadow: {
        deep: "0 1px 75px 0 rgb(16 24 40 / 25%)",
        small: "0 1px 75px 0 rgb(16 24 40 / 10%)",
      },
      fontFamily: {
        chivo: ["Chivo", "sans-serif"],
        vazirmatn: ["Vazirmatn", "sans-serif"],
        notoSans: ["Noto Sans", "sans-serif"],
      },
      colors: {
        dark: "#101828",
        mainColor: {
          DEFAULT: "#673EB6",
          50: "#F6F5FD",
          100: "#EEECFB",
          200: "#E0DCFB",
          300: "#C8C0F2",
          400: "#AB9BEA",
          500: "#8F73DF",
          600: "#7D55D2",
          700: "#673EB6",
          800: "#5B37A0",
          900: "#4C2F83",
          950: "#2F1D58",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
