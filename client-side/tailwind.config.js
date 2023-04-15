/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "shiba-yellow": "#fdc724",
      },

      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 2s",
      },
      backgroundImage: {
        "shiba-smile": "url('/src/assets/shiba-no-bg.png')",
      },
    },
  },
  plugins: [],
};
