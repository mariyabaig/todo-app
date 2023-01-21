/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "darkgray":"#1B1A17",
        "grayed":"#1F1E1B",
        "must":"#A35709",
        "org":"#FF8303",
        "beige":"#F0E3CA"
      }
    },
  },
  plugins: [],
}
