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
      "ms:relative ms:z-10 ms:flex ms:max-w-max ms:flex-1 ms:items-center ms:justify-center",
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
      "ms:group ms:flex ms:flex-1 ms:list-none ms:items-center ms:justify-center ms:space-x-1",
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva({
  base: "ms:group ms:inline-flex ms:h-10 ms:w-max ms:items-center ms:justify-center ms:rounded-md ms:bg-background ms:px-4 ms:py-2 ms:text-sm ms:font-medium ms:transition-colors ms:hover:bg-accent ms:hover:text-accent-foreground ms:focus:bg-accent ms:focus:text-accent-foreground ms:focus:outline-none ms:disabled:pointer-events-none ms:disabled:opacity-50 ms:data-[active]:bg-accent/50 ms:data-[state=open]:bg-accent/50",
});

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "ms:group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="ms:relative ms:top-[1px] ms:ml-1 ms:h-3 ms:w-3 ms:transition ms:duration-200 ms:group-data-[state=open]:rotate-180"
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
      "ms:left-0 ms:top-0 ms:w-full data-[motion^ms:=from-]:animate-in data-[motion^ms:=to-]:animate-out data-[motion^ms:=from-]:fade-in data-[motion^ms:=to-]:fade-out ms:data-[motion=from-end]:slide-in-from-right-52 ms:data-[motion=from-start]:slide-in-from-left-52 ms:data-[motion=to-end]:slide-out-to-right-52 ms:data-[motion=to-start]:slide-out-to-left-52 ms:md:absolute ms:md:w-auto ",
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
      "ms:absolute ms:left-0 ms:top-full ms:flex ms:justify-center"
    )}
  >
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "ms:origin-top-center ms:relative ms:mt-1.5 ms:h-[var(--radix-navigation-menu-viewport-height)] ms:w-full ms:overflow-hidden ms:rounded-md ms:border ms:bg-popover ms:text-popover-foreground ms:shadow-lg ms:data-[state=open]:animate-in ms:data-[state=closed]:animate-out ms:data-[state=closed]:zoom-out-95 ms:data-[state=open]:zoom-in-90 ms:md:w-[var(--radix-navigation-menu-viewport-width)]",
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
      "ms:top-full ms:z-[1] ms:flex ms:h-1.5 ms:items-end ms:justify-center ms:overflow-hidden ms:data-[state=visible]:animate-in ms:data-[state=hidden]:animate-out ms:data-[state=hidden]:fade-out ms:data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="ms:relative ms:top-[60%] ms:h-2 ms:w-2 ms:rotate-45 ms:rounded-tl-sm ms:bg-border ms:shadow-md" />
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
