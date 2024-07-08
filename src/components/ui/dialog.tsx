import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerProps,
  NestedDrawer
} from "./drawer";
import { X } from "lucide-react"

import { cn, useMediaQuery } from "@/lib/utils"
import { ResponsibilityHOC } from "@/lib/hocs";

const DialogNonResponsibility = DialogPrimitive.Root

const DialogTriggerNonResponsibility = DialogPrimitive.Trigger

const DialogPortalNonResponsibility = DialogPrimitive.Portal

const DialogOverlayNonResponsibility = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "ms-fixed ms-inset-0 ms-z-50 ms-bg-background/80 ms-backdrop-blur-sm ms-data-[state=open]:animate-in ms-data-[state=closed]:animate-out ms-data-[state=closed]:fade-out-0 ms-data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlayNonResponsibility.displayName = DialogPrimitive.Overlay.displayName

const DialogContentNonResponsibility = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { autoClose?: boolean }
>(({ className, children, autoClose = false, ...props }, ref) => (
  <DialogPortalNonResponsibility>
    <DialogOverlayNonResponsibility />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "ms-fixed ms-left-1/2 ms-top-1/2 ms-z-50 ms-flex ms-flex-col ms-w-full ms-max-h-screen ms-overflow-y-auto ms-max-w-lg -ms-translate-x-1/2 -ms-translate-y-1/2 ms-gap-4 ms-border ms-bg-background ms-p-6 ms-shadow-lg ms-duration-200 data-[state=open]:ms-animate-in data-[state=closed]:ms-animate-out data-[state=closed]:ms-fade-out-0 data-[state=open]:ms-fade-in-0 data-[state=closed]:ms-zoom-out-95 data-[state=open]:ms-zoom-in-95 data-[state=closed]:ms-slide-out-to-left-1/2 data-[state=closed]:ms-slide-out-to-top-[48%] data-[state=open]:ms-slide-in-from-left-1/2 data-[state=open]:ms-slide-in-from-top-[48%] sm:ms-rounded-lg md:ms-w-full",
        className
      )}
      {...props}
    >
      {children}
      {!autoClose && <DialogPrimitive.Close className={cn("ms-absolute ms-right-4 ms-top-4 ms-rounded-sm ms-opacity-70 ms-ring-offset-background ms-transition-opacity hover:ms-opacity-100 focus:ms-outline-none focus:ms-ring-2 focus:ms-ring-ring focus:ms-ring-offset-2 disabled:ms-pointer-events-none data-[state=open]:ms-bg-accent data-[state=open]:ms-text-muted-foreground")}>
        <X className="ms-h-4 ms-w-4" />
        <span className="ms-sr-only">Close</span>
      </DialogPrimitive.Close>}
    </DialogPrimitive.Content>
  </DialogPortalNonResponsibility>
))
DialogContentNonResponsibility.displayName = DialogPrimitive.Content.displayName

const DialogHeaderNonResponsibility = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "ms-flex ms-flex-col ms-space-y-1.5 ms-text-center sm:ms-text-left",
      className
    )}
    {...props}
  />
)
DialogHeaderNonResponsibility.displayName = "DialogHeader"

const DialogFooterNonResponsibility = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "ms-flex ms-flex-col-reverse sm:ms-flex-row sm:ms-justify-end sm:ms-space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooterNonResponsibility.displayName = "DialogFooter"

const DialogTitleNonResponsibility = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "ms-text-lg ms-font-semibold ms-leading-none ms-tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitleNonResponsibility.displayName = DialogPrimitive.Title.displayName

const DialogDescriptionNonResponsibility = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("ms-text-sm ms-text-muted-foreground", className)}
    {...props}
  />
))
DialogDescriptionNonResponsibility.displayName = DialogPrimitive.Description.displayName

const DialogContent = ResponsibilityHOC("(min-width: 768px)", DialogContentNonResponsibility, DrawerContent);
const DialogTrigger = ResponsibilityHOC("(min-width: 768px)", DialogTriggerNonResponsibility, DrawerTrigger);
const DialogHeader = ResponsibilityHOC("(min-width: 768px)", DialogHeaderNonResponsibility, DrawerHeader);
const DialogFooter = ResponsibilityHOC("(min-width: 768px)", DialogFooterNonResponsibility, DrawerFooter);
const DialogTitle = ResponsibilityHOC("(min-width: 768px)", DialogTitleNonResponsibility, DrawerTitle);
const DialogDescription = ResponsibilityHOC("(min-width: 768px)", DialogDescriptionNonResponsibility, DrawerDescription);
const Dialog: React.FC<DialogPrimitive.DialogProps & DrawerProps> = (props) => {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    isDesktop ? <DialogNonResponsibility open={open} onOpenChange={setOpen} {...props} /> :
      props.nested ? <NestedDrawer open={open} shouldScaleBackground onOpenChange={setOpen} {...props} /> :
        <Drawer open={open} shouldScaleBackground onOpenChange={setOpen} {...props} />
  )
}

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogNonResponsibility,
  DialogTriggerNonResponsibility,
  DialogContentNonResponsibility,
  DialogHeaderNonResponsibility,
  DialogFooterNonResponsibility,
  DialogTitleNonResponsibility,
  DialogDescriptionNonResponsibility
}
