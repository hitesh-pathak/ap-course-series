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
        'gray-separator': '#cad5e1',
        'part-pointer-blue': '#94a3b8',
        'blue-background': '#c7e6f8',
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
      animation: {
        spinner: 'spinner 0.8s linear infinite',
      },
      keyframes: {
        spinner: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      height: {
        'text-logo-md': '52px',
        'text-logo': '38px',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
