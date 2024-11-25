const { colors } = require("@mui/material")

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0C0C0C",
        white: "#FCFAF2",
      },
    },
  },
}
