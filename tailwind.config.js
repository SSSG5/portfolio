/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "c-orange": "#E6443C",
        "c-green": "#7faa8c",
        "c-blue": "#05494D",
        "c-cream": "#E7E4A0",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        marquee: "marquee 15s linear infinite",
      },
    },
  },
  plugins: [],
};
