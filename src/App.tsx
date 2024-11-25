import { useState } from "react"
import { Box, Divider } from "@mui/material"
import { CommonButton } from "@/components/ui/CommonButton"

function App() {
  const [colors, setColors] = useState<{
    text: Color
    contained: Color
    outlined: Color
  }>({
    text: "primary",
    contained: "primary",
    outlined: "primary",
  })

  const handleToggleColor = (type: Variant) => {
    setColors(prev => ({
      ...prev,
      [type]: prev[type] === "primary" ? "secondary" : "primary",
    }))
  }

  const variants: Array<Variant> = ["text", "contained", "outlined"]

  return (
    <div className="flex h-dvh w-full flex-col items-center bg-black text-white">
      <Box
        sx={{
          py: 4,
        }}
      >
        <h2 className="mb-6 text-center text-5xl">Common Button</h2>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {variants.map(variant => (
            <CommonButton
              key={variant}
              variant={variant}
              color={colors[variant]}
              onClick={() => handleToggleColor(variant)}
            >
              {variant} Button
            </CommonButton>
          ))}
        </Box>
      </Box>
    </div>
  )
}

export default App
