/* eslint-env node */
// const colors = require('tailwindcss/colors')

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
      pattern: /(bg|text|border|outline)-(primary|secondary|danger)/
    }
  ]
}
