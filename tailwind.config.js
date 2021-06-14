module.exports = {
  purge: { 
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './comps/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['w-0', 'w-1/12', 'w-2/12', 'w-3/12', 'w-4/12', 'w-5/12', 'w-6/12', 'w-7/12', 'w-8/12', 'w-9/12', 'w-10/12', 'w-11/12', 'w-12/12', 'grid-cols-5'],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'welcomeUMO': "url('../public/bg_welcomeUMO.svg')",
        'welcomeSDV': "url('../public/bg_welcomeSDV.gif')",
      })
    },
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
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      tertiary: 'var(--color-tertiary)',
     	blue: '#00B1E9',
     	light: '#EAEFF3',
     	white: '#FFFFFF',
  	},
  	textColor: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      tertiary: 'var(--color-tertiary)',
        white: '#FFFFFF',
    },
     backgroundColor: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      tertiary: 'var(--color-tertiary)',
        white: '#FFFFFF',
        light: '#f9f9f9'
     },
     borderColor: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      tertiary: 'var(--color-tertiary)',
        blue: '#00B1E9',
        light: '#EAEFF3',
        white: '#FFFFFF',
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
