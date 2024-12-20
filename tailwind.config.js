/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'azteka-green': {
          100: '#DDF812',
          200: '#073E1E',
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
