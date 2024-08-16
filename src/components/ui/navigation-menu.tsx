import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "cva";
import { ChevronDown } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "ms-relative ms-z-10 ms-flex ms-max-w-max ms-flex-1 ms-items-center ms-justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "ms-group ms-flex ms-flex-1 ms-list-none ms-items-center ms-justify-center ms-space-x-1",
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva({
  base: "ms-group ms-inline-flex ms-h-10 ms-w-max ms-items-center ms-justify-center ms-rounded-md ms-bg-background ms-px-4 ms-py-2 ms-text-sm ms-font-medium ms-transition-colors hover:ms-bg-accent hover:ms-text-accent-foreground focus:ms-bg-accent focus:ms-text-accent-foreground focus:ms-outline-none disabled:ms-pointer-events-none disabled:ms-opacity-50 data-[active]:ms-bg-accent/50 data-[state=open]:ms-bg-accent/50",
});

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "ms-group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="ms-relative ms-top-[1px] ms-ml-1 ms-h-3 ms-w-3 ms-transition ms-duration-200 group-data-[state=open]:ms-rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "ms-left-0 ms-top-0 ms-w-full data-[motion^=from-]:ms-animate-in data-[motion^=to-]:ms-animate-out data-[motion^=from-]:ms-fade-in data-[motion^=to-]:ms-fade-out data-[motion=from-end]:ms-slide-in-from-right-52 data-[motion=from-start]:ms-slide-in-from-left-52 data-[motion=to-end]:ms-slide-out-to-right-52 data-[motion=to-start]:ms-slide-out-to-left-52 md:ms-absolute md:ms-w-auto ",
      className
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "ms-absolute ms-left-0 ms-top-full ms-flex ms-justify-center"
    )}
  >
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "ms-origin-top-center ms-relative ms-mt-1.5 ms-h-[var(--radix-navigation-menu-viewport-height)] ms-w-full ms-overflow-hidden ms-rounded-md ms-border ms-bg-popover ms-text-popover-foreground ms-shadow-lg data-[state=open]:ms-animate-in data-[state=closed]:ms-animate-out data-[state=closed]:ms-zoom-out-95 data-[state=open]:ms-zoom-in-90 md:ms-w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "ms-top-full ms-z-[1] ms-flex ms-h-1.5 ms-items-end ms-justify-center ms-overflow-hidden data-[state=visible]:ms-animate-in data-[state=hidden]:ms-animate-out data-[state=hidden]:ms-fade-out data-[state=visible]:ms-fade-in",
      className
    )}
    {...props}
  >
    <div className="ms-relative ms-top-[60%] ms-h-2 ms-w-2 ms-rotate-45 ms-rounded-tl-sm ms-bg-border ms-shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
};
