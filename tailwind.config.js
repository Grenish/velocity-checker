/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        Snow: {
          100: "#9b9b9b",
          200: "#b6b6b6",
          300: "#d1d1d1",
          400: "#e7e7e7",
          500: "#ffffff",
        },
        night: {
          100: "#3a3a3a",
          200: "#2a2a2a",
          300: "#1a1a1a",
          400: "#000000",
        },
        midnight: "#421c81"
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
