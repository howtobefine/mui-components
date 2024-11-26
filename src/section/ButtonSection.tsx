import { useState } from "react"
import { Box, IconButton } from "@mui/material"
import { CommonButton } from "@/components/ui/common/CommonButton"
import { CustomSection } from "@/components/ui/custom/CustomSection"
import { SectionTitle } from "@/components/ui/custom/SectionTitle"
import DeleteIcon from "@mui/icons-material/Delete"
import SendIcon from "@mui/icons-material/Send"

const ButtonSection = () => {
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

  const Row = ({ children }: { children: React.ReactNode }) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        mb: 2,
      }}
    >
      {children}
    </Box>
  )

  return (
    <CustomSection>
      <SectionTitle title="Common Button" />
      <Row>
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
      </Row>
      <Row>
        <IconButton aria-label="delete" color="info">
          <DeleteIcon />
        </IconButton>
        <CommonButton startIcon={<DeleteIcon />} variant="contained">
          Delete
        </CommonButton>
        <CommonButton endIcon={<SendIcon />} variant="outlined">
          Send
        </CommonButton>
      </Row>
    </CustomSection>
  )
}

export default ButtonSection
