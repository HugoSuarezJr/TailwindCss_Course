
const plugin = require('tailwindcss/plugin')


module.exports = {  
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    teal: {
      color: "#008080"
    }
  },
  variants: {
  extend: {
    },
  },
  plugins: [],
}
 