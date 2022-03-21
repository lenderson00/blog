const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#131A20',
        primary: '#38BDF8',
        primaryDark: '#59FFF5',
        white: '#F1F2F4',
        ...colors
      }
    }
  },
  plugins: []
}
