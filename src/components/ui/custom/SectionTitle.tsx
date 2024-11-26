import { FC } from "react"
import cn from "@/core/utils/cn"

interface SectionTitleProps {
  title: string
  className?: string
}

export const SectionTitle: FC<SectionTitleProps> = ({ title, className }) => (
  <h2 className={cn("mb-6 text-center text-5xl", className)}>{title}</h2>
)
