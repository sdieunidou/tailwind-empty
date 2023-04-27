const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
          fontFamily: {
            sans: ['Outfit', ...defaultTheme.fontFamily.sans],
          },
          backgroundColor: {
            'header': '#0351B1',
            'footer': '#032D6E',
            'main': '#F0F9FC'
          },
          colors: {
            'footer': '#96B2DB',
          },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
 }
