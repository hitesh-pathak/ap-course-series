/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-orange-hover-dark': '#d24115',
        'brand-orange-700': '#d24115',
        'brand-orange-600': '#ea580c',
        'brand-orange-200': '#fed7aa',
        'brand-orange-100': '#ffedd5',
        'gray-title': '#1e293b',
        'gray-subtitle': '#475569',
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
        hi: [
          '"Noto Sans Devanagari"',
          '"Inter var,Inter"',
          '"ui-sans-serif"',
          '"system-ui"',
          '"sans-serif"',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      margin: {
        4.5: '1.125rem',
      },
      zIndex: {
        100: '100',
        99: '99',
        'second-nav-bar': '99',
        75: '75',
      },
    },
  },
  plugins: [],
};
