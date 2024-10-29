import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";

import { ResponsibilityHOC } from "@/index";
import { cn, useMediaQuery } from "@/lib/utils";
import { Drawer, DrawerContent, DrawerProps, DrawerTrigger } from "./drawer";

const PopoverNonResponsibility = PopoverPrimitive.Root;

const PopoverTriggerNonResponsibility = PopoverPrimitive.Trigger;

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
        "ms-z-50 ms-w-72 ms-rounded-md ms-border ms-bg-popover ms-text-popover-foreground ms-shadow-md ms-outline-none data-[state=open]:ms-animate-in data-[state=closed]:ms-animate-out data-[state=closed]:ms-fade-out-0 data-[state=open]:ms-fade-in-0 data-[state=closed]:ms-zoom-out-95 data-[state=open]:ms-zoom-in-95 data-[side=bottom]:ms-slide-in-from-top-2 data-[side=left]:ms-slide-in-from-right-2 data-[side=right]:ms-slide-in-from-left-2 data-[side=top]:ms-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContentNonResponsibility.displayName =
  PopoverPrimitive.Content.displayName;

export const PopoverContent = ResponsibilityHOC(
  "(min-width: 768px)",
  PopoverContentNonResponsibility,
  DrawerContent
);
export const PopoverTrigger = ResponsibilityHOC(
  "(min-width: 768px)",
  PopoverTriggerNonResponsibility,
  DrawerTrigger
);
export const Popover: React.FC<PopoverPrimitive.PopoverProps & DrawerProps> = ({
  children,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <PopoverNonResponsibility
      open={isDesktop && open}
      onOpenChange={isDesktop ? setOpen : undefined}
      {...props}
    >
      <Drawer
        open={!isDesktop && open}
        shouldScaleBackground
        onOpenChange={!isDesktop ? setOpen : undefined}
        {...props}
        children={children}
      />
    </PopoverNonResponsibility>
  );
};

export {
  PopoverContentNonResponsibility,
  PopoverNonResponsibility,
  PopoverTriggerNonResponsibility,
};
