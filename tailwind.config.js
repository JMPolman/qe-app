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
        center: '0 0 3px 0 rgba(0, 0, 0, 0.10),0 0 2px 0 rgba(0, 0, 0, 0.06)',
    },
     colors: {
     	blue: '#00B1E9',
     	light: '#EAEFF3',
     	white: '#FFFFFF',
      UMOgreen: '#3baa34',
      UMOblue: '#2370b8',
      UMOpurple: '#662684',
  	},
  	textColor: {
       'primary': '#FFFFFF',
       'secondary': '#00B1E9',
       'danger': '#e3342f',
       'question':'#232323',
     },
     backgroundColor: {
        blue: '#00B1E9',
        light: '#EAEFF3',
        white: '#FFFFFF',
     },
     borderColor: {
        blue: '#00B1E9',
        light: '#EAEFF3',
        white: '#FFFFFF',
     },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [
    // require('@tailwindcss/custom-forms'),
  ],
}
