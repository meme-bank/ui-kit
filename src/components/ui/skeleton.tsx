import { cn } from "@/lib/utils"
import * as React from "react"

function Skeleton({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("ms:animate-pulse ms:rounded-md ms:bg-muted", className)}
      {...props}
    >
      <div className="ms:invisible">{children}</div>
    </div>
  )
}

export { Skeleton }
