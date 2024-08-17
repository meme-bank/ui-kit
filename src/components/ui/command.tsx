import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { LoaderCircleIcon, Search } from "lucide-react";
import * as React from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { ScrollArea } from "./scroll-area";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "ms-flex ms-h-full ms-w-full ms-flex-col ms-overflow-hidden ms-rounded-md ms-bg-popover ms-text-popover-foreground",
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {
  commandProps: React.ComponentPropsWithoutRef<typeof CommandPrimitive>;
}

const CommandDialog = ({
  children,
  commandProps,
  ...props
}: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="ms-overflow-hidden ms-p-0 ms-shadow-lg">
        <Command
          {...commandProps}
          className={clsx(
            "[&_[cmdk-group-heading]]:ms-px-2 [&_[cmdk-group-heading]]:ms-font-medium [&_[cmdk-group-heading]]:ms-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:ms-pt-0 [&_[cmdk-group]]:ms-px-2 [&_[cmdk-input-wrapper]_svg]:ms-h-5 [&_[cmdk-input-wrapper]_svg]:ms-w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:ms-px-2 [&_[cmdk-item]]:ms-py-3 [&_[cmdk-item]_svg]:ms-h-5 [&_[cmdk-item]_svg]:ms-w-5",
            commandProps.className
          )}
        >
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & {
    loading?: boolean;
  }
>(({ className, loading, ...props }, ref) => (
  <div
    className="ms-flex ms-items-center ms-border-b ms-px-3"
    cmdk-input-wrapper=""
  >
    {loading ? (
      <LoaderCircleIcon className="ms-mr-2 ms-animate-spin ms-h-4 ms-w-4 ms-shrink-0 ms-opacity-50" />
    ) : (
      <Search className="ms-mr-2 ms-h-4 ms-w-4 ms-shrink-0 ms-opacity-50" />
    )}
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "ms-flex ms-h-11 ms-w-full ms-rounded-md ms-bg-transparent ms-py-3 ms-text-sm ms-outline-none placeholder:ms-text-muted-foreground disabled:ms-cursor-not-allowed disabled:ms-opacity-50",
        className
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, children, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      "ms-overflow-hidden",
      className
    )}
    {...props}
  >
    <ScrollArea className="md:ms-max-h-[300px] ms-h-[350px] ms-px-3">
      {children}
    </ScrollArea>
  </CommandPrimitive.List>
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="ms-py-6 ms-text-center ms-text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "ms-overflow-hidden ms-p-1 ms-text-foreground [&_[cmdk-group-heading]]:ms-px-2 [&_[cmdk-group-heading]]:ms-py-1.5 [&_[cmdk-group-heading]]:ms-text-xs [&_[cmdk-group-heading]]:ms-font-medium [&_[cmdk-group-heading]]:ms-text-muted-foreground",
      className
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-ms-mx-1 ms-h-px ms-bg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "ms-relative ms-flex ms-cursor-pointer ms-duration-150 ms-select-none ms-items-center ms-rounded-sm ms-px-2 ms-py-1.5 ms-text-sm ms-outline-none aria-selected:ms-bg-accent aria-selected:ms-text-accent-foreground data-[disabled]:ms-pointer-events-none data-[disabled]:ms-opacity-50",
      className
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ms-ml-auto ms-text-xs ms-tracking-widest ms-text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
};

