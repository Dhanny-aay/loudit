/** @type {import('tailwindcss').Config} */

const plugin =require('tailwindcss/plugin')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Kalam': ['"Kalam"', 'cursive'],
        'Lora': ['"Lora"', 'serif'],
      },
      screens: {
        'md-max': { max: '768px' }, // Custom breakpoint with a maximum width of 768px
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide':{
          '-ms-overflow-style':'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    })
  ],
}

