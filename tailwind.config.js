// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    // enabled: true,
    // content: ['./src/**/*.jsx', './src/**/*.css'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      softBlue: '#8bacda',
      cyan: '#00fff7',
      'darkBlue-bgMain': '#0d192b',
      'darkBlue-bgCard': '#14253d',
      'darkBlue-line': '#2f415b',
      'white': '#ffffff',
    },
    extend: {
      fontFamily: {
        'custom': ['Georama'],
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['focus'],
      borderColor: ['active'],
      backgroundColor: ['active'],
      fill: ['hover'],
      fontWeight: ['dark'],
      textColor: ['visited'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
