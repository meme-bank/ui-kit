import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "ms-fixed ms-top-0 ms-z-[100] ms-flex ms-max-h-screen ms-w-full ms-flex-col-reverse ms-p-4 sm:ms-bottom-0 sm:ms-right-0 sm:ms-top-auto sm:ms-flex-col md:ms-max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "ms-group ms-pointer-events-auto ms-relative ms-flex ms-w-full ms-items-center ms-justify-between ms-space-x-4 ms-overflow-hidden ms-rounded-md ms-border ms-p-6 ms-pr-8 ms-shadow-lg ms-transition-all data-[swipe=cancel]:ms-translate-x-0 data-[swipe=end]:ms-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:ms-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:ms-transition-none data-[state=open]:ms-animate-in data-[state=closed]:ms-animate-out data-[swipe=end]:ms-animate-out data-[state=closed]:ms-fade-out-80 data-[state=closed]:ms-slide-out-to-right-full data-[state=open]:ms-slide-in-from-top-full data-[state=open]:sm:ms-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "ms-border ms-bg-background ms-text-foreground",
        destructive:
          "ms-destructive ms-group ms-border-destructive ms-bg-destructive ms-text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
  VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "ms-inline-flex ms-h-8 ms-shrink-0 ms-items-center ms-justify-center ms-rounded-md ms-border ms-bg-transparent ms-px-3 ms-text-sm ms-font-medium ms-ring-offset-background ms-transition-colors hover:ms-bg-secondary focus:ms-outline-none focus:ms-ring-2 focus:ms-ring-ring focus:ms-ring-offset-2 disabled:ms-pointer-events-none disabled:ms-opacity-50 group-[.destructive]:ms-border-muted/40 group-[.destructive]:hover:ms-border-destructive/30 group-[.destructive]:hover:ms-bg-destructive group-[.destructive]:hover:ms-text-destructive-foreground group-[.destructive]:focus:ms-ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "ms-absolute ms-right-2 ms-top-2 ms-rounded-md ms-p-1 ms-text-foreground/50 ms-opacity-0 ms-transition-opacity hover:ms-text-foreground focus:ms-opacity-100 focus:ms-outline-none focus:ms-ring-2 group-hover:ms-opacity-100 group-[.destructive]:ms-text-red-300 group-[.destructive]:hover:ms-text-red-50 group-[.destructive]:focus:ms-ring-red-400 group-[.destructive]:focus:ms-ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="ms-h-4 ms-w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("ms-text-sm ms-font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("ms-text-sm ms-opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
