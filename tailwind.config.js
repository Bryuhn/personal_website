/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        first: '#6DC5C5',
        second: '#509292',
        third: '#2BD492',
        fourth: '#1F4646',
        fifth: '#0F2828',
      },
      spacing: {
        116: '29rem',
      },
    },
  },
  plugins: [],
};
