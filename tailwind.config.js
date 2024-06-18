/** @type {import('tailwindcss').Config} */

export default {
  content: ["./node_modules/preline/preline.js","./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/assets/images/sitting.svg')",
      }, fontFamily: {
        amsterdam : ["Amsterdam Four", "serif"]
      },
    },
  },
  plugins: [ import("preline/plugin")],
}

