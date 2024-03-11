/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#333333",
        "primary-200": "#777777",
        "primary-hover": "#779A67",
        "button-primary": "#BFD8AF",
        "button-primary-hover": "#D4E7C5",
        "button-secondary": "#E1F0DA",
        "header-100": "#F5F5F5",
        "border-100": "#F5F5F5",
        "border-200": "#444444",
        "active-100": "#99BC85",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
        "auth-image": "url('./assets/login-graphics.jpg')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      xm: "600px",
      sm: "768px",
      ms: "900px",
      md: "1060px",
    },
  },
  plugins: [],
};
