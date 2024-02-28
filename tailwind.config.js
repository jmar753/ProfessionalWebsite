/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      animation: {
        blob: "blob 7s infinite",
        float: "float 8s ease-in-out infinite",
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(20px, -50px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          },
        },
        float: {
          "0%": {
            transform: "translate(0px, 0px)"
          },
          "5%": {
            transform: "translate(0px, -20px)"
          },
          "10%": {
            transform: "translate(0px, 0px)"
          },
          "100%": {
            transform: "translate(0px, 0px)"
          }
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}

