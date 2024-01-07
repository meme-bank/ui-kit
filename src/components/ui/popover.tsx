import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn, useMediaQuery } from "@/lib/utils"
import { Drawer, DrawerContent, DrawerProps, DrawerTrigger } from "./drawer"
import { ResponsibilityHOC } from "@/index"

const PopoverNonResponsibility = PopoverPrimitive.Root

const PopoverTriggerNonResponsibility = PopoverPrimitive.Trigger

const PopoverContentNonResponsibility = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContentNonResponsibility.displayName = PopoverPrimitive.Content.displayName

export const PopoverContent = ResponsibilityHOC("(min-width: 768px)", PopoverContentNonResponsibility, DrawerContent);
export const PopoverTrigger = ResponsibilityHOC("(min-width: 768px)", PopoverTriggerNonResponsibility, DrawerTrigger);
export const Popover: React.FC<PopoverPrimitive.PopoverProps & DrawerProps> = (props) => {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    isDesktop ? <PopoverNonResponsibility open={open} onOpenChange={setOpen} {...props} /> :
      <Drawer open={open} shouldScaleBackground onOpenChange={setOpen} {...props} />
  )
}

export { PopoverNonResponsibility, PopoverTriggerNonResponsibility, PopoverContentNonResponsibility }
