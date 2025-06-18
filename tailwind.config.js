/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        oceanSky: "oklch(84.42% 0.19 202.24)",
        lightgrey:"color-mix(in lab, var(--text) 60%, transparent)"
      },
       fontFamily: {
                anton: ['var(--font-anton)'],
                'roboto-flex': ['var(--font-roboto-flex)'],
            },
    },
  },
  plugins: [],
};
