
const plugin = require('tailwindcss/plugin')


module.exports = {  
  mode : 'jit',      
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
  },
  variants: {
  extend: {
    },
  },
  plugins: [
    plugin(function({addBase, theme}){
      const heading = {
        'h1' : {fontSize : theme('fontSize.2xl')},
        'h3' : {fontSize : theme('fontSize.xl')},
        'h6' : {fontSize : theme('fontSize.lg')}
      }

      addBase(heading)
    })
  ],
}
