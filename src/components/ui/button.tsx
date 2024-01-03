import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "ms-inline-flex ms-items-center ms-justify-center ms-rounded-md ms-text-sm ms-font-medium ms-ring-offset-background ms-duration-150 " +
  "focus-visible:ms-outline-none focus-visible:ms-ring-2 focus-visible:ms-ring-ring focus-visible:ms-ring-offset-2 disabled:ms-pointer-events-none disabled:ms-opacity-50",
  {
    variants: {
      variant: {
        default: "ms-bg-primary ms-text-primary-foreground hover:ms-bg-primary/90",
        vk: "ms-bg-vk-azure ms-text-white hover:ms-bg-vk-azure/90",
        destructive:
          "ms-bg-destructive ms-text-destructive-foreground hover:ms-bg-destructive/90",
        outline:
          "ms-border ms-border-input ms-bg-background hover:ms-bg-accent hover:ms-text-accent-foreground",
        secondary:
          "ms-bg-secondary ms-text-secondary-foreground hover:ms-bg-secondary/80",
        ghost: "hover:ms-bg-accent hover:ms-text-accent-foreground",
        link: "ms-text-primary ms-underline-offset-4 hover:ms-underline",
      },
      size: {
        default: "ms-px-4 ms-py-2 ms-h-10",
        sm: "ms-h-9 ms-rounded-md ms-px-3",
        lg: "ms-h-11 ms-rounded-md ms-px-8",
        icon: "ms-h-10 ms-w-10",
        none: ""
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
