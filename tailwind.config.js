/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
      'grey-brown': '#66615C',
      'off-white': '#FFF8F2',
      'almost-black': '#363330',
      'black':'#1D1B19',
      'dirt-brown': '#52483F',
      'dusty': '#66615C',
     },
     
     backgroundImage: {
      'vinorepo': "url('../public/img/vinorepo.png')",
      'neubrandz': "url('../public/img/neubrandz.png')",
      'about-slogan': "url('../public/img/about-bg.png')",
     }
    },

    fontFamily: {
      rasfire: ['Rasfire', 'serif'],
      thasadith: ['Thasadith', 'sans-serif']
    },

    screens: {
      // Maximum Medium Query
      'max-lg': { max: '1400px' },
      'max-md': { max: '1200px' },
      'max-lm': { max: '1000px' },
      'max-sm': { max: '800px' },
      'max-xs': { max: '600px' },
      'max-xxs': { max: '400px' },

      // Fixed Medium Query
      'fixed-xs': { max: '600px', max: '800px' },
      'fixed-sm': { min: '480px', max: '575px' },
      'fixed-lm': { min: '1000px', max: '1200px' },
      'fixed-md': { min: '1200px', max: '1400px' },
      'fixed-lg': { min: '992px', max: '1199px' },

      // Minimum Medium Query
      xxs: '400px',
      xs: '600px',
      sm: '800px',
      lm: '1000px',
      md: '1200px',
      lg: '1400px',
      xl: '1600px',
      xxl: '1800px'
    },
  },
  plugins: [],
}