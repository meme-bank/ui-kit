import { cn } from "@lib/utils"
import React from "react"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const AlternativeToaster: React.FC<ToasterProps> = ({ className, ...props }) => {
  return (
    <Sonner
      className={cn("toaster ms-group", className)}
      {...props}
      toastOptions={{
        classNames: {
          toast:
            "ms-group toast ms-group-[.toaster]:ms-bg-background group-[.toaster]:ms-text-foreground group-[.toaster]:ms-border-border group-[.toaster]:ms-shadow-lg",
          description: "group-[.toast]:ms-text-muted-foreground",
          actionButton:
            "group-[.toast]:ms-bg-primary group-[.toast]:ms-text-primary-foreground",
          cancelButton:
            "group-[.toast]:ms-bg-muted group-[.toast]:ms-text-muted-foreground",
          ...props.toastOptions?.classNames
        },
        ...props.toastOptions
      }}
    />
  )
}

export { AlternativeToaster }
