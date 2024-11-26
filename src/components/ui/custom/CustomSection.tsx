import { PropsWithChildren, FC } from "react"
import { Box, BoxProps } from "@mui/material"

type CustomSectionProps = PropsWithChildren<BoxProps>

export const CustomSection: FC<CustomSectionProps> = ({
  children,
  sx = {},
  ...props
}) => (
  <Box
    {...props}
    sx={{
      py: 4,
    }}
  >
    {children}
  </Box>
)
