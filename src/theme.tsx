import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#CB4042",
    },
    secondary: {
      main: "#3C67D3",
    },
    info: {
      main: "#FCFAF2",
    },
  },
  typography: {
    fontFamily: "Ubuntu, sans-serif",
  },
})

export default theme
