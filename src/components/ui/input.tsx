import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "ms-flex ms-h-10 ms-w-full ms-rounded-md ms-border ms-border-input ms-bg-background ms-px-3 ms-py-2 ms-text-sm ms-ring-offset-background file:ms-border-0 file:ms-bg-transparent file:ms-text-sm file:ms-font-medium placeholder:ms-text-muted-foreground focus-visible:ms-outline-none focus-visible:ms-ring-2 focus-visible:ms-ring-ring focus-visible:ms-ring-offset-2 disabled:ms-cursor-not-allowed disabled:ms-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
