/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        oceanSky: "oklch(84.42% 0.19 202.24)",
        lightgrey: "color-mix(in lab, var(--text) 60%, transparent)",

      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Ubuntu",
          '"Helvetica Neue"',
          "sans-serif",
        ],
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "slide-in": "slide-in 0.6s forwards ease-in-out",
        "fade-in": "fade-in 0.4s forwards ease-in-out",
      },
     
    },
  },
  plugins: [],
};
