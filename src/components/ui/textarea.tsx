import * as React from "react"
import { default as TextareaAutosize, TextareaAutosizeProps } from 'react-textarea-autosize';

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends TextareaAutosizeProps { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <TextareaAutosize
        className={cn(
          "ms:flex ms:w-full ms:rounded-md ms:border ms:border-input ms:bg-background ms:px-3 ms:py-2 ms:text-sm ms:ring-offset-background ms:placeholder:text-muted-foreground ms:focus-visible:outline-none ms:focus-visible:ring-2 ms:focus-visible:ring-ring ms:focus-visible:ring-offset-2 ms:disabled:cursor-not-allowed ms:disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
