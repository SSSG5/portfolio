/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        bodoni: ["Bodoni Moda", "Bodoni Moda SC", "serif"],
        cursive: ["Gochi Hand", "cursive"],
      },
      colors: {
        "c-orange": "#E6443C",
        "c-green": "#7faa8c",
        "c-blue": "#05494D",
        "c-cream": "#E7E4A0",
        'shadow-a0': '#0C0D1D',
        'shadow-a10': '#292A4B',
        'shadow-a20': '#47497A',
        'shadow-a30': '#8587B0',
        'shadow-a40': '#C4C5D9',
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
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, #0C0D1D 0%, #292A4B 10%, #47497A 20%, #8587B0 30%, #C4C5D9 40%)',
      },
    },
  },
  plugins: [],
};
