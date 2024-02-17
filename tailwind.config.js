/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        wave: "wave 2s linear infinite",
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
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        }
      }
    },
  },
  plugins: [],
}

