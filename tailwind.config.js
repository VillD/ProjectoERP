/* eslint-env node */
// const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#67757d',
        success: '#10B981',
        danger: '#ef4444',
        warning: '#eab308',
        light: '#ffffff',
        dark: '#1e293b'
      }
    }
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|hover|)-(primary|secondary|success|danger|warning|light|dark)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover']
    }
  ]
}
