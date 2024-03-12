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
      backgroundImage: (theme) => ({}),
      fontFamily: {
        dmsans: ["Poppins", "sans-serif"],
      },
      content: {},
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
