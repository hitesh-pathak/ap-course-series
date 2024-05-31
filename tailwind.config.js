/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-orange-700': '#d24115',
        'brand-orange-600': '#ea580c',
      },
      fontFamily: {
        en: [
          '"Inter var"',
          'Inter',
          '"ui-sans-serif"',
          '"system-ui"',
          '"sans-serif"',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
};
