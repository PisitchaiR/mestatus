/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        primary: "#e0e0e0"
      },
      boxShadow:{
        flate:"  5px 5px 20px #b1b1b1,-5px -5px 20px #ffffff",
        pressed: "inset 5px 5px 20px #b1b1b1,inset -5px -5px 20px #ffffff"
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
    }
  },
  plugins: []
};