/** @type {import('tailwindcss').Config} */
export default {
  content: ["./node_modules/preline/preline.js","./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/topography.svg')",
      }
    },
  },
  plugins: [ import("preline/plugin"),],
}

