/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [


    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b", // black?
        light: "#f5f5f5", // white
        primary: "#B63E96", // dark pink
        primaryDark: "#58E6D9", //electric blue
        blue: "#0000FF", //blue
      },
      animation: {
        'spin-slow': 'spin 16s linear infinite',
      },
    },
  },
  plugins: [],
}

