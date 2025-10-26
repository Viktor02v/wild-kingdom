/** @type {import('tailwindcss').Config} */
export default {

  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      screens: {
      'mobileSmall': '480px',    
      'mobile': '768px',        
      'tablet': '992px',        
      'pc': '1602px',      
      
      'max-mobileSmall': {'max': '479px'},
      'max-mobile': {'max': '767px'},
      'max-tablet': {'max': '991px'},
      'max-pc': {'max': '1601px'},
    },

      colors: {
        primary: '#222220',
        secondary: '#FFFFFF',
        gold: '#9D875C',
        lightGold: '#C1B081',
        bgDark: '#222220',
      },

      fontSize: {
        'default': '1rem',
        'title': '3rem',
      },

      minWidth: {
        'minWidth': '320px',
      },

      maxWidth: {
        'maxWidth': '1920px',
        'maxWidthContainer': '1572px',
      },

      width: {
        'container': '1572px',
      },

      padding: {
        'container': '15px',
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        italiana: ['Italiana', 'sans-serif'],
      },
    },
  },

  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        // Custom container class
        '.container': {
          maxWidth: theme('maxWidth.maxWidthContainer'),
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      })
    },
  ],
}