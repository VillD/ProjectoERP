/* eslint-env node */
// const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#ffffff',
        danger: '#ef4444',
        warning: '#eab308',
        access: '#10B981',
        dark: '#000000'
      }
    }
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|)-(primary|secondary|danger)/
    }
  ]
}
