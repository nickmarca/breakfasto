const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-nunito)', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        comet: '#545473',
        'burnt-sienna': '#E97C49',
        'yellow-orange': '#FDB23E',
        'neon-carrot': '#FC8F35',
      },
    },
  },
  plugins: [],
};
