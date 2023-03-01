/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'gray': '#343434',
        'light-gray': '#5B5B5B',
        'orange': '#FF9619',
        'light': '#F2F3F5',
        'biege': '#CCB2A3',
        'teal': '#A9C2BE',
      },
      screens: {
        'mw': '1170px',
        'esm': '470px', //extra small
      },
      boxShadow: {
        'default': '0px 0px 9px 2px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [

  ],
}
