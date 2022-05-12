module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pac: ["Pacifico", "cursive"],
        mont:['Montserrat', 'sans-serif']
       },
    },
  },
  plugins: [require("daisyui")],
}