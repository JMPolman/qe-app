module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './comps/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['w-0', 'w-1/12', 'w-2/12', 'w-3/12', 'w-4/12', 'w-5/12', 'w-6/12', 'w-7/12', 'w-8/12', 'w-9/12', 'w-10/12', 'w-11/12', 'w-12/12'],
    },
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
      white: '#ffffff',
  	},
  	textColor: {
       'primary': '#FFFFFF',
       'secondary': '#00B1E9',
       'danger': '#e3342f',
       'question':'#232323',
       'UMOgreen': '#3baa34',
       'UMOblue': '#2370b8',
       'UMOpurple': '#662684',
     },
     backgroundColor: {
       'UMOgreen': '#3baa34',
       'UMOblue': '#2370b8',
       'UMOpurple': '#662684',
        blue: '#00B1E9',
        light: '#EAEFF3',
        white: '#FFFFFF',
     },
     borderColor: {
        blue: '#00B1E9',
        light: '#EAEFF3',
        white: '#FFFFFF',
        UMOgreen: '#3baa34',
        UMOblue: '#2370b8',
        UMOpurple: '#662684',
     },
     transitionProperty: {
                'width': 'width'
            },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
