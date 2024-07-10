import * as React from "react"
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize';

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends TextareaAutosizeProps { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <TextareaAutosize
        className={cn(
          "ms-flex ms-w-full ms-rounded-md ms-border ms-border-input ms-bg-background ms-px-3 ms-py-2 ms-text-sm ms-ring-offset-background placeholder:ms-text-muted-foreground focus-visible:ms-outline-none focus-visible:ms-ring-2 focus-visible:ms-ring-ring focus-visible:ms-ring-offset-2 disabled:ms-cursor-not-allowed disabled:ms-opacity-50",
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
