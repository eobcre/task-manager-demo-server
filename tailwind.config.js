/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#4f55c4',
        dark: '#303030',
      },
    },
  },
  plugins: [],
};
