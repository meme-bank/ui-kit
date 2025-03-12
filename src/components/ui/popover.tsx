import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";

import { ResponsibilityHOC } from "@/index";
import { cn, useIsomorphicLayoutEffect, useMediaQuery } from "@/lib/utils";
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
        "ms:z-50 ms:w-72 ms:rounded-md ms:border ms:bg-popover ms:text-popover-foreground ms:shadow-md ms:outline-none ms:data-[state=open]:animate-in ms:data-[state=closed]:animate-out ms:data-[state=closed]:fade-out-0 ms:data-[state=open]:fade-in-0 ms:data-[state=closed]:zoom-out-95 ms:data-[state=open]:zoom-in-95 ms:data-[side=bottom]:slide-in-from-top-2 ms:data-[side=left]:slide-in-from-right-2 ms:data-[side=right]:slide-in-from-left-2 ms:data-[side=top]:slide-in-from-bottom-2",
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
  open: defOpen,
  onOpenChange,
  ...props
}) => {
  const [open, setOpen] = React.useState<boolean>(!!defOpen);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useIsomorphicLayoutEffect(() => {
    if (onOpenChange) onOpenChange(open);
  }, [open, onOpenChange]);
  useIsomorphicLayoutEffect(() => {
    setOpen(!!defOpen);
  }, [defOpen]);

  return (
    <Drawer
      open={!isDesktop && open}
      onOpenChange={!isDesktop ? setOpen : undefined}
      shouldScaleBackground
      {...props}
    >
      <PopoverNonResponsibility
        open={isDesktop && open}
        onOpenChange={isDesktop ? setOpen : undefined}
        {...props}
        children={children}
      />
    </Drawer>
  );
};

export {
  PopoverContentNonResponsibility,
  PopoverNonResponsibility,
  PopoverTriggerNonResponsibility,
};
