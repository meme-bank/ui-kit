import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "ms:z-50 ms:w-64 ms:rounded-md ms:border ms:bg-popover ms:p-4 ms:text-popover-foreground ms:shadow-md ms:outline-none ms:data-[state=open]:animate-in ms:data-[state=closed]:animate-out ms:data-[state=closed]:fade-out-0 ms:data-[state=open]:fade-in-0 ms:data-[state=closed]:zoom-out-95 ms:data-[state=open]:zoom-in-95 ms:data-[side=bottom]:slide-in-from-top-2 ms:data-[side=left]:slide-in-from-right-2 ms:data-[side=right]:slide-in-from-left-2 ms:data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }
