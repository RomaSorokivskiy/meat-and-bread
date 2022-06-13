/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white':'#FFFFFF',
      'black':'#000000',
      'red': {
        100:'#CA4F45',
        200:'#A8291F',
        300:'#851B13',
        400:'#340000',
        500:'#340000',
        600:'#340000',
        700:'#340000',
        800:'#340000',
        900:'#340000',
      },
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '40px',
      'full': '9999px',
      'large': '12px',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '8': '8px',
    },
  },
  plugins: [],
}
