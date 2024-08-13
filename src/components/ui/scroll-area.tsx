import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as React from "react";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("ms-relative ms-overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="ms-h-full ms-w-full ms-rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "ms-flex ms-touch-none ms-select-none ms-transition-colors",
      orientation === "vertical" &&
        "ms-h-full ms-w-2.5 ms-border-l ms-border-l-transparent ms-m-1",
      orientation === "horizontal" &&
        "ms-h-2.5 ms-flex-col ms-border-t ms-border-t-transparent ms-m-1",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="ms-relative ms-flex-1 ms-rounded-full ms-bg-border no-hover:ms-duration-0 hover:ms-bg-secondary active:ms-bg-secondary-foreground ms-duration-150 ms-cursor-pointer ms-animate-opacity-in" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
