import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "ms-relative ms-flex ms-w-full ms-touch-none ms-select-none ms-items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="ms-relative ms-h-2 ms-w-full ms-grow ms-overflow-hidden ms-rounded-full ms-bg-secondary">
      <SliderPrimitive.Range className="ms-absolute ms-h-full ms-bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="ms-block ms-h-5 ms-w-5 ms-rounded-full ms-border-2 ms-border-primary ms-bg-background ms-ring-offset-background ms-transition-colors focus-visible:ms-outline-none focus-visible:ms-ring-2 focus-visible:ms-ring-ring focus-visible:ms-ring-offset-2 disabled:ms-pointer-events-none disabled:ms-opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
