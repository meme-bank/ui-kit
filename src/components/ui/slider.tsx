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
      "ms:relative ms:flex ms:w-full ms:touch-none ms:select-none ms:items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="ms:relative ms:h-2 ms:w-full ms:grow ms:overflow-hidden ms:rounded-full ms:bg-secondary">
      <SliderPrimitive.Range className="ms:absolute ms:h-full ms:bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="ms:block ms:h-5 ms:w-5 ms:rounded-full ms:border-2 ms:border-primary ms:bg-background ms:ring-offset-background ms:transition-colors ms:focus-visible:outline-none ms:focus-visible:ring-2 ms:focus-visible:ring-ring ms:focus-visible:ring-offset-2 ms:disabled:pointer-events-none ms:disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
