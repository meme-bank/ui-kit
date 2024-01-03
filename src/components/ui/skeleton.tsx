import { cn } from "@/lib/utils"
import * as React from "react"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("ms-animate-pulse ms-rounded-md ms-bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
