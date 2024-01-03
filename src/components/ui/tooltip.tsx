import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "ms-z-50 ms-overflow-hidden ms-rounded-md ms-border ms-bg-popover ms-px-3 ms-py-1.5 ms-text-sm ms-text-popover-foreground ms-shadow-md ms-animate-in ms-fade-in-0 ms-zoom-in-95 data-[state=closed]:ms-animate-out data-[state=closed]:ms-fade-out-0 data-[state=closed]:ms-zoom-out-95 data-[side=bottom]:ms-slide-in-from-top-2 data-[side=left]:ms-slide-in-from-right-2 data-[side=right]:ms-slide-in-from-left-2 data-[side=top]:ms-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
