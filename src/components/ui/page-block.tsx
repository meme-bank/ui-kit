import * as React from "react";
import { Card } from "./card";
import { cn } from "@/lib/utils";

export const PageBlock: React.FC<React.PropsWithChildren<{ error?: boolean; className?: string }>> = ({ children, error, className }) => {
  return (
    <Card className={cn("p-2 shadow-md", (error && "bg-destructive text-destructive-foreground"), className)}>
      {children}
    </Card>
  );
};