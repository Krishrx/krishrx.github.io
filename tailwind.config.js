/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        clifford: '#da373d',
      },
      screens: {
        sm: '480px'
      }
    }
  },
  plugins: [],
}

