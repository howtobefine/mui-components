import { createRoot } from "react-dom/client"
import { ThemeProvider } from "@mui/material/styles"
import theme from "@/theme"
import "@/index.css"
import App from "@/App"

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
)
