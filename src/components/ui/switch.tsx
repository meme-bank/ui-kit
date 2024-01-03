import React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "ms-peer ms-inline-flex ms-h-[24px] ms-w-[44px] ms-shrink-0 ms-cursor-pointer ms-items-center ms-rounded-full ms-border-2 ms-border-transparent ms-transition-colors focus-visible:ms-outline-none focus-visible:ms-ring-2 focus-visible:ms-ring-ring focus-visible:ms-ring-offset-2 focus-visible:ms-ring-offset-background disabled:ms-cursor-not-allowed disabled:ms-opacity-50 data-[state=checked]:ms-bg-primary data-[state=unchecked]:ms-bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "ms-pointer-events-none ms-block ms-h-5 ms-w-5 ms-rounded-full ms-bg-background ms-shadow-lg ms-ring-0 ms-transition-transform data-[state=checked]:ms-translate-x-5 data-[state=unchecked]:ms-translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
