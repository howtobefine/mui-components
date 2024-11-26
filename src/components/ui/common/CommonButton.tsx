import { PropsWithChildren, FC } from "react"
import { Button, ButtonProps } from "@mui/material"
import cn from "@/core/utils/cn"

type CommonButtonProps = PropsWithChildren<ButtonProps>

export const CommonButton: FC<CommonButtonProps> = ({
  children,
  sx = {},
  ...props
}) => (
  <Button
    {...props}
    color={props.color || "primary"}
    className={cn(
      "relative inline-flex items-center justify-center",
      props.className,
    )}
    sx={{
      minWidth: 64,
      fontSize: 14,
      lineHeight: 1,
      borderRadius: 1,
      paddingY: 1.5,
      ...sx,
    }}
  >
    {children}
  </Button>
)
