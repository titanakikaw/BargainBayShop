export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hanalei: ["Hanalei Fill", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        baseColor: "#E4AD7F",
        hoverColor: "#E19756",
        secondColor: "#F3F3F3",
        thirdColor: "#FFFAF6",
      },
    },
  },
  plugins: [],
};
