/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        canada: '/app/assets/png/canada.png',
      },
      fontFamily: {
        Bold: ['Montserrat-Bold'],
        semiBold: ['Montserrat-Medium'],
        Regular: ['Montserrat-Regular'],
        Light: ['Montserrat-Light'],
        Thin: ['Montserrat-Thin'],
      },
    },
    colors: {
      ...colors,

      lside50: '#2F2F2F',
      lside: '#31363F',
      lmain: '#212121',
      ldark: '#0f0f0f',
      lprimary80: '#044C69',
      lvalue: '#33cc33',
    },
  },
  plugins: [],
};
