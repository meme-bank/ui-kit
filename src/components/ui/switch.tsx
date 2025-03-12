import React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "ms:peer ms:inline-flex ms:h-[24px] ms:w-[44px] ms:shrink-0 ms:cursor-pointer ms:items-center ms:rounded-full ms:border-2 ms:border-transparent ms:transition-colors ms:focus-visible:outline-none ms:focus-visible:ring-2 ms:focus-visible:ring-ring ms:focus-visible:ring-offset-2 ms:focus-visible:ring-offset-background ms:disabled:cursor-not-allowed ms:disabled:opacity-50 ms:data-[state=checked]:bg-primary ms:data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "ms:pointer-events-none ms:block ms:h-5 ms:w-5 ms:rounded-full ms:bg-background ms:shadow-lg ms:ring-0 ms:transition-transform ms:data-[state=checked]:translate-x-5 ms:data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
