/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "shiba-yellow": "#fdc724",
        antiquewhite: "#faebd7",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
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
        "shiba-smile": "url('/src/assets/shiba/shiba-no-bg.png')",
      },

      maxWidth: {
        "max-w-0": "0px",
        "max-w-px": "1px",
        "max-w-0.5": "2px",
        "max-w-1": "4px",
        "max-w-1.5": "6px",
        "max-w-2": "8px",
        "max-w-2.5": "10px",
        "max-w-3": "12px",
        "max-w-3.5": "14px",
        "max-w-4": "16px",
        "max-w-4.5": "18px",
        "max-w-5": "20px",
        "max-w-5.5": "22px",
        "max-w-6": "24px",
        "max-w-6.5": "26px",
        "max-w-7": "28px",
        "max-w-7.5": "30px",
        "max-w-8": "32px",
        "max-w-8.5": "34px",
        "max-w-9": "36px",
        "max-w-9.5": "38px",
        "max-w-10": "40px",
        "max-w-10.5": "42px",
        "max-w-11": "44px",
        "max-w-11.5": "46px",
        "max-w-12": "48px",
        "max-w-12.5": "50px",
        "max-w-13": "52px",
        "max-w-13.5": "54px",
        "max-w-14": "56px",
        "max-w-14.5": "58px",
        "max-w-15": "60px",
        "max-w-15.5": "62px",
        "max-w-16": "64px",
      },
    },
  },
  plugins: [],
};
