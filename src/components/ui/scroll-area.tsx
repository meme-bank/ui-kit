import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as React from "react";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & { viewPortClassName?: string; }
>(({ className, children, viewPortClassName, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("ms:relative ms:overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className={cn("ms:h-full ms:max-h-screen ms:w-full ms:rounded-[inherit]", viewPortClassName)}>
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
    data-vaul-no-drag
    orientation={orientation}
    className={cn(
      "ms:flex ms:touch-none ms:select-none ms:transition-colors",
      orientation === "vertical" &&
      "ms:h-full ms:w-2.5 ms:mb-0 ms:border-l ms:border-l-transparent ms:m-px ms:p-0.5",
      orientation === "horizontal" &&
      "ms:h-2.5 ms:flex-col ms:border-t ms:border-t-transparent ms:m-px ms:mr-0 ms:p-0.5",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb data-vaul-no-drag className="ms:relative ms:flex-1 ms:rounded-full ms:bg-border no-ms:hover:duration-0 ms:hover:bg-secondary ms:active:bg-secondary-foreground ms:duration-150 ms:cursor-pointer ms:animate-opacity-in" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };

