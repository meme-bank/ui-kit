import { cn } from "@/lib/utils";
import * as React from "react";

export const LineBlock: React.FC<React.PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>> = ({ children, className, ...props }) => {
    return (
        <div className={cn("ms-rounded-md ms-border ms-p-2", className)} {...props}>
            {children}
        </div>
    )
}