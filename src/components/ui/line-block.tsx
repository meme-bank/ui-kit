import { cn } from "@/lib/utils";
import * as React from "react";

export const LineBlock: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
    return (
        <div className={cn("rounded-md border p-2", className)}>
            {children}
        </div>
    )
}