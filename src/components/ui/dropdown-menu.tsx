import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn, useMediaQuery } from "@/lib/utils"
import { Drawer, DrawerContent, DrawerHeader, DrawerPortal, DrawerProps, DrawerTitle, DrawerTrigger, DrawerClose, DrawerFooter, NestedDrawer } from "./drawer"
import { ResponsibilityHOC } from "@/lib/hocs"
import { Button } from "./button"
import { DialogTitleProps, DialogTriggerProps } from "@radix-ui/react-dialog"

const DropdownMenuNonResponsibility = DropdownMenuPrimitive.Root

const DropdownMenuTriggerNonResponsibility = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortalNonResponsibility = DropdownMenuPrimitive.Portal

const DropdownMenuSubNonResponsibility = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTriggerNonResponsibility = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "ms-flex ms-select-none ms-items-center ms-rounded-sm ms-duration-150 ms-px-2 ms-py-1.5 data-[disabled]:ms-pointer-events-none data-[disabled]:ms-opacity-50 ms-text-sm ms-outline-none focus:ms-text-accent-foreground focus:ms-bg-accent data-[state=open]:ms-bg-accent",
      inset && "ms-pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ms-ml-auto ms-h-4 ms-w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTriggerNonResponsibility.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContentNonResponsibility = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "ms-z-50 ms-min-w-[8rem] ms-overflow-hidden ms-rounded-md ms-border ms-bg-popover ms-p-1 ms-text-popover-foreground ms-shadow-lg data-[state=open]:ms-animate-in data-[state=closed]:ms-animate-out data-[state=closed]:ms-fade-out-0 data-[state=open]:ms-fade-in-0 data-[state=closed]:ms-zoom-out-95 data-[state=open]:ms-zoom-in-95 data-[side=bottom]:ms-slide-in-from-top-2 data-[side=left]:ms-slide-in-from-right-2 data-[side=right]:ms-slide-in-from-left-2 data-[side=top]:ms-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContentNonResponsibility.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContentNonResponsibility = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "ms-z-50 ms-min-w-[8rem] ms-overflow-hidden ms-rounded-md ms-border ms-bg-popover ms-p-1 ms-text-popover-foreground ms-shadow-md data-[state=open]:ms-animate-in data-[state=closed]:ms-animate-out data-[state=closed]:ms-fade-out-0 data-[state=open]:ms-fade-in-0 data-[state=closed]:ms-zoom-out-95 data-[state=open]:ms-zoom-in-95 data-[side=bottom]:ms-slide-in-from-top-2 data-[side=left]:ms-slide-in-from-right-2 data-[side=right]:ms-slide-in-from-left-2 data-[side=top]:ms-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContentNonResponsibility.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => {
  const match = useMediaQuery("(min-width: 768px)");
  const Item = match ? DropdownMenuPrimitive.Item : DrawerClose;
  return (
    <Item
      // @ts-ignore
      ref={ref}
      className={cn(
        "ms-relative ms-flex ms-cursor-pointer ms-select-none ms-items-center ms-rounded-sm ms-text-sm ms-outline-none ms-transition-colors focus:ms-bg-accent focus:ms-text-accent-foreground data-[disabled]:ms-pointer-events-none data-[disabled]:ms-opacity-50",
        inset && "ms-pl-8",
        !match && "ms-m-1 ms-mb-0 last:ms-mb-1 ms-py-2 ms-px-3",
        match && "ms-px-2 ms-py-1.5",
        className
      )}
      {...props}
    />
  )
})
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "ms-relative ms-flex ms-cursor-pointer ms-select-none ms-items-center ms-rounded-sm ms-py-1.5 ms-pl-8 ms-pr-2 ms-text-sm ms-outline-none ms-transition-colors focus:ms-bg-accent focus:ms-text-accent-foreground data-[disabled]:ms-pointer-events-none data-[disabled]:ms-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="ms-absolute ms-left-2 ms-flex ms-h-3.5 ms-w-3.5 ms-items-center ms-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="ms-h-4 ms-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "ms-relative ms-flex ms-cursor-pointer ms-select-none ms-items-center ms-rounded-sm ms-py-1.5 ms-pl-8 ms-pr-2 ms-text-sm ms-outline-none ms-transition-colors focus:ms-bg-accent focus:ms-text-accent-foreground data-[disabled]:ms-pointer-events-none data-[disabled]:ms-opacity-50",
      className
    )}
    {...props}
  >
    <span className="ms-absolute ms-left-2 ms-flex ms-h-3.5 ms-w-3.5 ms-items-center ms-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="ms-h-2 ms-w-2 ms-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabelNonResponsibility = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "ms-px-2 ms-py-1.5 ms-text-sm ms-font-semibold",
      inset && "ms-pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabelNonResponsibility.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-ms-mx-1 ms-my-1 ms-h-px ms-bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ms-ml-auto ms-text-xs ms-tracking-widest ms-opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export const DropdownMenu: React.FC<DropdownMenuPrimitive.DropdownMenuProps & DrawerProps> = ({ children, ...props }) => {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return <DropdownMenuNonResponsibility open={isDesktop && open} onOpenChange={setOpen} {...props}>
    <Drawer shouldScaleBackground open={!isDesktop && open} onOpenChange={setOpen} {...props} children={children} />
  </DropdownMenuNonResponsibility>
}
export const DropdownMenuTrigger = ResponsibilityHOC("(min-width: 768px)", DropdownMenuTriggerNonResponsibility, DrawerTrigger)
export const DropdownMenuContent = ResponsibilityHOC("(min-width: 768px)", DropdownMenuContentNonResponsibility, DrawerContent)
export const DropdownMenuSub: React.FC<DropdownMenuPrimitive.DropdownMenuProps & DrawerProps> = ({ children, ...props }) => {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return <DropdownMenuSubNonResponsibility open={isDesktop && open} onOpenChange={setOpen} {...props}>
    <NestedDrawer shouldScaleBackground open={!isDesktop && open} onOpenChange={setOpen} {...props} children={children} />
  </DropdownMenuSubNonResponsibility>
}
export const DropdownMenuSubTrigger = ResponsibilityHOC("(min-width: 768px)", DropdownMenuSubTriggerNonResponsibility, (props: DialogTriggerProps & React.RefAttributes<HTMLButtonElement>) => <DrawerTrigger className="ms-flex ms-select-none ms-items-center ms-rounded-sm ms-duration-150 ms-px-2 ms-py-1.5 data-[disabled]:ms-pointer-events-none data-[disabled]:ms-opacity-50 ms-text-sm ms-outline-none focus:ms-text-accent-foreground focus:ms-bg-accent data-[state=open]:ms-bg-accent" {...props} />)
export const DropdownMenuSubContent = ResponsibilityHOC("(min-width: 768px)", DropdownMenuSubContentNonResponsibility, DrawerContent)
export const DropdownMenuPortal = ResponsibilityHOC("(min-width: 768px)", DropdownMenuPortalNonResponsibility, DrawerPortal)
export const DropdownMenuLabel = ResponsibilityHOC("(min-width: 768px)", DropdownMenuLabelNonResponsibility, (props: React.HTMLAttributes<HTMLDivElement>) => <DrawerHeader className="ms-text-lg ms-font-semibold ms-leading-none ms-tracking-tight" {...props} />)
//   DropdownMenuCheckboxItem,
//   DropdownMenuRadioItem,
//   DropdownMenuGroup,
//   DropdownMenuRadioGroup,

export {
  DropdownMenuNonResponsibility,
  DropdownMenuTriggerNonResponsibility,
  DropdownMenuContentNonResponsibility,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabelNonResponsibility,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortalNonResponsibility,
  DropdownMenuSubNonResponsibility,
  DropdownMenuSubContentNonResponsibility,
  DropdownMenuSubTriggerNonResponsibility,
  DropdownMenuRadioGroup,
}
