import { cn } from "@lib/utils"
import React from "react"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const AlternativeToaster: React.FC<ToasterProps> = ({ className, ...props }) => {
  return (
    <Sonner
      className={cn("toaster ms:group", className)}
      {...props}
      toastOptions={{
        classNames: {
          toast:
            "ms:group toast ms:group-[.toaster]:bg-background ms:group-[.toaster]:text-foreground ms:group-[.toaster]:border-border ms:group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "ms:group-[.toast]:bg-primary ms:group-[.toast]:text-primary-foreground",
          cancelButton: "ms:group-[.toast]:bg-muted ms:group-[.toast]:text-muted-foreground",
          ...props.toastOptions?.classNames
        },
        ...props.toastOptions
      }}
    />
  )
}

export { AlternativeToaster }
