/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bannerImg':"url('./src/assets/Rectangle 1.png')"
      },
      colors:{
        buttonColor:'#F9A51A'
      }

    },
  },
  plugins: [require('daisyui')],
}

