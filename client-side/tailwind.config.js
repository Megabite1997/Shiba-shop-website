/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "shiba-yellow": "#fdc724",
        antiquewhite: "#faebd7",
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
        tilt_shaking: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(3deg)" },
          "50%": { transform: "rotate(0eg)" },
          "75% ": { transform: "rotate(-3deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s",
        "tilt-shaking": "tilt_shaking 0.5s infinite",
      },
      backgroundImage: {
        "shiba-smile": "url('/src/assets/shiba-no-bg.png')",
      },
    },
  },
  plugins: [],
};
