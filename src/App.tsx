import ButtonSection from "@/section/ButtonSection"
import Grid from "@mui/material/Grid2"

function App() {
  return (
    <Grid container spacing={2} className="bg-black text-white">
      <Grid size={6}>
        <ButtonSection />
      </Grid>
    </Grid>
  )
}

export default App
