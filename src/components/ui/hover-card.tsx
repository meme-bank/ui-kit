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
      "ms-z-50 ms-w-64 ms-rounded-md ms-border ms-bg-popover ms-p-4 ms-text-popover-foreground ms-shadow-md ms-outline-none data-[state=open]:ms-animate-in data-[state=closed]:ms-animate-out data-[state=closed]:ms-fade-out-0 data-[state=open]:ms-fade-in-0 data-[state=closed]:ms-zoom-out-95 data-[state=open]:ms-zoom-in-95 data-[side=bottom]:ms-slide-in-from-top-2 data-[side=left]:ms-slide-in-from-right-2 data-[side=right]:ms-slide-in-from-left-2 data-[side=top]:ms-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }
