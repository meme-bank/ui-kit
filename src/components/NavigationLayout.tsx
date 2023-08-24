import * as React from "react";
import { cn } from "@lib/utils";

export interface NavigationLayoutType extends React.FC<React.PropsWithChildren<{ className?: string }>> {
    NavigatorBlock: React.FC<React.PropsWithChildren<{ className?: string }>>;
    PageBlock: React.FC<React.PropsWithChildren<{ className?: string }>>;
}

export const NavigationLayout: NavigationLayoutType = ({ children, className }) => {
    return (
        <div className={cn("flex flex-col lg:grid lg:grid-cols-5 gap-4", className)}>
            {children}
        </div>
    )
}

NavigationLayout.NavigatorBlock = ({ children, className }) => {
    return (
        <div className={cn("col-span-1 z-10 flex flex-col gap-4", className)}>
            {children}
        </div>
    )
}

NavigationLayout.PageBlock = ({ children, className }) => {
    return (
        <div className={cn("col-span-4", className)}>{children}</div>
    )
};