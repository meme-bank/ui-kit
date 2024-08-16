import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "cva";
import * as React from "react";

import { cn } from "@/lib/utils";

const labelVariants = cva({
  base: "ms-text-sm ms-font-medium ms-leading-none peer-disabled:ms-cursor-not-allowed peer-disabled:ms-opacity-70",
});

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
