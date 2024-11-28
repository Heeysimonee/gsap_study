/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        afolkalips: ['Afolkalips'],
        roboto: ['Roboto', 'sans-serif'],
        buick: ['Buick'],
      },
    },
  },
  plugins: [],
};
