import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";
import { ScrollArea } from "./scroll-area";

export type DrawerProps = React.ComponentProps<typeof DrawerPrimitive.Root>;

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: DrawerProps) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Drawer.displayName = "Drawer"

const NestedDrawer = ({
  shouldScaleBackground = true,
  ...props
}: DrawerProps) => (
  <DrawerPrimitive.NestedRoot
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
NestedDrawer.displayName = "NestedDrawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("ms:fixed ms:inset-0 ms:z-50 ms:bg-black/80", className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> & { autoClose?: boolean; noScroll?: boolean }
>(({ className, children, autoClose = false, noScroll = false, ...props }, ref) => {
  const Child = (
    <>
      {!autoClose && <div className="ms:mx-auto ms:mt-4 ms:h-2 ms:w-[100px] ms:rounded-full ms:bg-muted" />}
      {children}</>
  )

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          "ms:fixed ms:inset-x-0 ms:max-h-screen ms:overflow-hidden ms:bottom-0 ms:z-50 ms:mt-24 ms:flex ms:h-auto ms:flex-col ms:rounded-t-lg ms:border ms:bg-background",
          className
        )}
        {...props}
      >
        {!noScroll ? <ScrollArea viewPortClassName="ms:px-3" className="ms:h-full ms:max-h-screen">
          {Child}
        </ScrollArea> : Child}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
})
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("ms:grid ms:gap-1.5 ms:p-4 ms:text-center ms:md:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-vaul-no-drag
    className={cn("ms:mt-auto ms:flex ms:flex-col ms:gap-2 ms:p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "ms:text-lg ms:font-semibold ms:mx-auto ms:leading-none ms:tracking-tight",
      className
    )}
    {...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("ms:text-sm ms:text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer, DrawerClose,
  DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, NestedDrawer
};

