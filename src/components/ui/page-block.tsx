import * as React from "react";
import { Card } from "./card";
import { cn } from "@/lib/utils";

export const PageBlock: React.FC<React.PropsWithChildren<{ error?: boolean; className?: string }>> = ({ children, error, className }) => {
  return (
    <Card className={cn('ms:p-2 ms:shadow-md ms:animate-in ms:data-[navigate]:animate-out ms:group-data-[navigate="true"]/page:animate-out', (error && "ms:bg-destructive ms:text-destructive-foreground"), className)}>
      {children}
    </Card>
  );
};