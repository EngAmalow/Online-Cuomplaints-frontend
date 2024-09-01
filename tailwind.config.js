/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        GadalColor: "#0A0E35 ",
        OneColor: "#16F2B3",
        TwoColor: "#EC4899",
        CadanColor: "white",
      },
  },
  },
  plugins: [],
}

