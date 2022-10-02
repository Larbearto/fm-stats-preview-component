/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      bluedark: 'hsl(233, 47%, 7%)',
      bluedesaturated: 'hsl(244, 38% ,16%)',
      violetsoft: 'hsl(277, 64%, 61%)',
      white: 'hsl(0, 0%, 100%)',
      whiteHeading: 'hsla(0, 0%, 100%, 0.75)',
      whiteMain: 'hsla(0, 0%, 100%, 0.6)'
    },
    fontFamily: {
      Inter: ['Inter'],
      LexendDeca: ['Lexend Deca']
    },
    screens: {
      sm: '375px',
      md: '525px',
      lg: '1100px'
    }
  },
  plugins: []
}
