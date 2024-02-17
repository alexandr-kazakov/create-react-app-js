/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futuristic: ["Orbitron", "sans-serif"],
      },
      colors: {
        primary: "#335eea",
        secondary: "#c007a1",
      },
      backgroundSize: {
        "200%": "200%",
      },
      backgroundImage: {
        body: "linear-gradient(to right, #232526, #414345)",
        pinkGradient: "linear-gradient(to right, #c007a1, #a53091)",
        mainGradiant: "linear-gradient(to right, #c007a1, #8461ff)",
        pinkGradientHovered: "linear-gradient(to left, #c007a1, #a53091)",
        snake: "conic-gradient(transparent, transparent, transparent, #a53091)",
        "snake-lighter-pink":
          "conic-gradient(transparent, transparent, transparent, rgb(244 114 182))",
        bottomNavGrad:
          "linear-gradient(to right, #030e21 0%, rgba(8,22,46,1) 5%, rgba(8,22,46,1) 95%, #030e21 100%)",
        "wave-effect": "url('/assets/imgs/effect.svg')",
        dog: "url('/assets/imgs/staking.png')",
        nft: "url('/assets/imgs/nft.webp')",
        price: "url('/assets/imgs/price.webp')",
        lambo: "url('/assets/imgs/bg.png')",
        "glow-gradiant":
          "radial-gradient(circle closest-side, rgba(244, 114, 182, .35), transparent)",
      },
      borderRadius: {
        "uneven-square": "5% 5% 10% 10% / 100% 100% 0% 0% ",
      },
      backdropBlur: {
        card: "5px",
      },
      boxShadow: {
        redish: " rgb(235, 34, 34) 0px 10px 30px -10px",
        cardShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
        card: "0 5px 4px 6px rgba(0,0,0,0.3)",
        "button-shadow": "4px 5px 17px -4px #a53091",
      },
      gridTemplateColumns: {
        parcels: "2fr 3fr 2fr 10rem",
        dashlet: "2fr 1fr 1fr 1fr",
        firstRow: "2fr 1fr 1fr",
      },
      width: {
        bodyContent: "calc(100% - 14rem)",
      },
      transitionProperty: {
        width: "width 1000ms",
      },
      animation: {
        "rotation-circule":
          "4s linear 0s infinite normal none running animation-rotation",
        "rotation-circule-delaied":
          "4s linear 2s infinite normal none running animation-rotation",
        gradient: "gradient 2s ease infinite",
        hue: "hue 15s ease infinite",
      },
    },
  },
  plugins: [],
};
