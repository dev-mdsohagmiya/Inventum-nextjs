module.exports = {
  content: [
"./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}",      // If using src directory
  ],
  darkMode: 'class', // or 'media' based on your preference
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1440px",
        },
      },
      colors: {
        ld: "#cbd5e1",
        ll: "#e5e7eb",
        ddOG: "#313132",
        dl: "#374151",
        dd: "#111827",
        "promotion-yellow": "rgb(255, 217, 0)",
      },
      spacing: {
        vh: "1vh",
      },
      screens: {
        lgxl: "1280px",
        xs: "420px",
        xxs: "344px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        pg: "linear-gradient(to right, #ec4899, #a855f7)",
        g1: "linear-gradient(98deg, #EC4899 7.72%, #A855F7 101.1%)",
        g_dark: "linear-gradient(180deg, #222B3D 0%, rgba(34, 43, 61, 0.00) 100%)",
      },
      boxShadow: {
        tab: "0px 0px 4px 4px rgba(167, 136, 228, 0.20)",
      },
      keyframes: {
        fadeinupcustom: {
          "0%": { transform: "translateY(40px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        fadeinupcustom: "fadeinupcustom 1s ease-in",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/typography"),
  ],
};
