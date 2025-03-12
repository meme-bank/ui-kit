import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "cva";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "ms:fixed ms:top-0 ms:z-[100] ms:flex ms:max-h-screen ms:w-full ms:flex-col-reverse ms:p-4 ms:sm:bottom-0 ms:sm:right-0 ms:sm:top-auto ms:sm:flex-col ms:md:max-w-[420px]",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva({
  base: "ms:group ms:pointer-events-auto ms:relative ms:flex ms:w-full ms:items-center ms:justify-between ms:space-x-4 ms:overflow-hidden ms:rounded-md ms:border ms:p-6 ms:pr-8 ms:shadow-lg ms:transition-all ms:data-[swipe=cancel]:translate-x-0 ms:data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] ms:data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] ms:data-[swipe=move]:transition-none ms:data-[state=open]:animate-in ms:data-[state=closed]:animate-out ms:data-[swipe=end]:animate-out ms:data-[state=closed]:fade-out-80 ms:data-[state=closed]:slide-out-to-right-full ms:data-[state=open]:slide-in-from-top-full data-[state=ms:open]:sm:slide-in-from-bottom-full",
  variants: {
    variant: {
      default: "ms:border ms:bg-background ms:text-foreground",
      destructive:
        "ms:destructive ms:group ms:border-destructive ms:bg-destructive ms:text-destructive-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

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
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "ms:inline-flex ms:h-8 ms:shrink-0 ms:items-center ms:justify-center ms:rounded-md ms:border ms:bg-transparent ms:px-3 ms:text-sm ms:font-medium ms:ring-offset-background ms:transition-colors ms:hover:bg-secondary ms:focus:outline-none ms:focus:ring-2 ms:focus:ring-ring ms:focus:ring-offset-2 ms:disabled:pointer-events-none ms:disabled:opacity-50 ms:group-[.destructive]:border-muted/40 ms:group-[.destructive]:hover:border-destructive/30 ms:group-[.destructive]:hover:bg-destructive ms:group-[.destructive]:hover:text-destructive-foreground ms:group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "ms:absolute ms:right-2 ms:top-2 ms:rounded-md ms:p-1 ms:text-foreground/50 ms:opacity-0 ms:transition-opacity ms:hover:text-foreground ms:focus:opacity-100 ms:focus:outline-none ms:focus:ring-2 group-ms:hover:opacity-100 ms:group-[.destructive]:text-red-300 ms:group-[.destructive]:hover:text-red-50 ms:group-[.destructive]:focus:ring-red-400 ms:group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="ms:h-4 ms:w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("ms:text-sm ms:font-semibold", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("ms:text-sm ms:opacity-90", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  type ToastActionElement,
  type ToastProps,
};
