import colors from "tailwindcss/colors";

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // sky: colors.sky,
        // cyan: colors.cyan,

        // palette 1
        onyx: '#313638',
        alabaster: '#e0dfd5',
        platinum: '#e8e9eb',
        sunray: '#e4b363',
        'fire-opal': '#ef6461',

        // palette 2
        charcoal: '#373f51',
        'light-steel-blue': '#a9bcd0',
        'eerie-black': '#1b1b1e',
        gainsboro: '#d8dbe2',
        gunmetal: '#292d38',
        'cadet-blue': '#58a4b0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
