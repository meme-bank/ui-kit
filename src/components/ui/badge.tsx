import { cva, type VariantProps } from "cva";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva({
  base: "ms:inline-flex ms:items-center ms:rounded-full ms:border ms:px-2.5 ms:py-0.5 ms:text-xs ms:font-semibold ms:transition-colors ms:focus:outline-none ms:focus:ring-2 ms:focus:ring-ring ms:focus:ring-offset-2",
  variants: {
    variant: {
      default:
        "ms:border-transparent ms:bg-primary ms:text-primary-foreground ms:hover:bg-primary/80",
      secondary:
        "ms:border-transparent ms:bg-secondary ms:text-secondary-foreground ms:hover:bg-secondary/80",
      destructive:
        "ms:border-transparent ms:bg-destructive ms:text-destructive-foreground ms:hover:bg-destructive/80",
      outline: "ms:text-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
