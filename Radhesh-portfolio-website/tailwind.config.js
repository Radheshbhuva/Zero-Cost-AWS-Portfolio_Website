/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#1E293B',
        accent: '#14B8A6',
        surface: '#EEF2F6',
      },
      fontFamily: {
        sans: ['Aptos', 'Segoe UI', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Segoe UI', 'Aptos', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        corporate: '0 22px 58px -30px rgba(15, 23, 42, 0.36)',
      },
      backgroundImage: {
        'executive-grid':
          'linear-gradient(rgba(20,184,166,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
