/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      raleway : ['Raleway', 'sans-serif'],
      Press : ['Press Start 2P', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': 'url(./src/Assets/GameBg.jpg)',
       
      }
    },
  },
  plugins: [],
}
