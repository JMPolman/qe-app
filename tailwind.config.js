module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
    	'display': ['Roboto', 'sans-serif'],
       	'body': ['Open Sans', 'sans-serif'],
    },
    letterSpacing: {
    	widest: '.30em',
    },
     boxShadow: {
        center: '0 0 3px 0 rgba(0, 0, 0, 0.1),0 0 2px 0 rgba(0, 0, 0, 0.06)',
    },
     colors: {
     	blue: '#00B1E9',
     	light: '#EAEFF3',
     	white: '#FFFFFF',
  	},
  	textColor: {
       'primary': '#FFFFFF',
       'secondary': '#00B1E9',
       'danger': '#e3342f',
     },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
}
