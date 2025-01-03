/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        azteka: {
          100: '#DDF812',
          200: '#1F623B',
          300: '#073E1E',
        },
      },
      fontFamily: {
        clash: ['Clash'],
        roboto: ['Roboto', 'sans-serif'],
        buick: ['Buick'],
      },
    },
  },
  plugins: [],
};
