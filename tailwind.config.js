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
    'outline-0',
    'outline-1',
    'outline-2',
    {
      pattern: /(bg|text|border|)-(primary|secondary|danger)/
    }
  ]
}
