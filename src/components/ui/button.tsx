import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva({
  base:
    "ms:inline-flex ms:items-center ms:justify-center ms:rounded-md ms:text-sm ms:font-medium ms:ring-offset-background ms:duration-150 " +
    "ms:focus-visible:outline-none ms:cursor-pointer ms:focus-visible:ring-2 ms:focus-visible:ring-ring ms:focus-visible:ring-offset-2 ms:disabled:pointer-events-none ms:disabled:opacity-50",
  variants: {
    variant: {
      default:
        "ms:bg-primary ms:text-primary-foreground ms:hover:bg-primary/90",
      vk: "ms:bg-vk-azure ms:text-white ms:hover:bg-vk-azure/90",
      destructive:
        "ms:bg-destructive ms:text-destructive-foreground ms:hover:bg-destructive/90",
      outline:
        "ms:border ms:border-input ms:bg-background ms:hover:bg-accent ms:hover:text-accent-foreground",
      secondary:
        "ms:bg-secondary ms:text-secondary-foreground ms:hover:bg-secondary/80",
      ghost: "ms:hover:bg-accent ms:hover:text-accent-foreground",
      link: "ms:text-primary ms:underline-offset-4 ms:hover:underline",
      linkWithoutColor: "ms:underline-offset-4 ms:hover:underline",
    },
    size: {
      default: "ms:px-4 ms:py-2 ms:h-10",
      sm: "ms:h-9 ms:rounded-md ms:px-3",
      lg: "ms:h-11 ms:rounded-md ms:px-8",
      icon: "ms:h-10 ms:w-10",
      none: "",
      defaultNoPadding: "ms:h-10",
      xs: "ms:h-6 ms:rounded-md ms:text-sm ms:px-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
