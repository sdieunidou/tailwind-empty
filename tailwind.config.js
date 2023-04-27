const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
          fontFamily: {
            sans: ['Outfit', ...defaultTheme.fontFamily.sans],
          },
          backgroundColor: {
            'main': '#F0F9FC'
          },
          colors: {
            'footer': '#96B2DB',
            'blue': {
              DEFAULT: '#0351B1',
              '50': '#f2f6fb', 
              '100': '#e6eef7', 
              '200': '#c0d4ec', 
              '300': '#9ab9e0', 
              '400': '#4f85c8', 
              '500': '#0351b1', 
              '600': '#03499f', 
              '700': '#023d85', 
              '800': '#02316a', 
              '900': '#032D6E'
            },
          },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
 }
