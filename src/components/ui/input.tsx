import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "ms:flex ms:h-10 ms:w-full ms:rounded-md ms:border ms:border-input ms:bg-background ms:px-3 ms:py-2 ms:text-sm ms:ring-offset-background ms:file:border-0 ms:file:bg-transparent ms:file:text-sm ms:file:font-medium ms:placeholder:text-muted-foreground ms:focus-visible:outline-none ms:focus-visible:ring-2 ms:focus-visible:ring-ring ms:focus-visible:ring-offset-2 ms:disabled:cursor-not-allowed ms:disabled:opacity-50",
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
