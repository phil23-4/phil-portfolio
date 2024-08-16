/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/preline/preline.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/src/assets/images/sitting.svg')",
      },
      fontFamily: {
        amsterdam: ["Amsterdam Four", "serif"],
      },
      colors: {
        accent: "#A8E5BA",
        bluey: "#393F82",
      },
    },
  },
  plugins: [import("preline/plugin")],
};
