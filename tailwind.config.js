// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      web: '1279px',
      web2: '829px',
      mobile: '689px',
      mobile2: '563px',
      mobile3: '469px'
    },
    extend: {},
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen'
      ]
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        // ".vh-70px": {
        //   height: "calc(100vh-70px)",
        // },
      }

      addUtilities(newUtilities)
    })
  ]
}
