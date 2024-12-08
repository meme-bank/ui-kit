import { cn } from "@lib/utils";
import * as React from "react";

export interface NavigationLayoutType
  extends React.FC<React.PropsWithChildren<{ className?: string }>> {
  NavigatorBlock: React.FC<React.PropsWithChildren<{ className?: string }>>;
  PageBlock: React.FC<React.PropsWithChildren<{ className?: string }>>;
}

export const NavigationLayout: NavigationLayoutType = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "ms-flex ms-flex-col lg:ms-grid lg:ms-grid-cols-5 ms-gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

NavigationLayout.NavigatorBlock = ({ children, className }) => {
  return (
    <div
      className={cn(
        "ms-col-span-1 ms-z-10 ms-flex ms-flex-col ms-gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

NavigationLayout.PageBlock = ({ children, className }) => {
  return <div className={cn("ms-col-span-4", className)}>{children}</div>;
};
