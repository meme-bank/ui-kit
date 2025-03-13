import * as React from "react";
import { Footer } from "./Footer";
import { Separator } from "./ui/separator";

export const Layout: React.FC<React.PropsWithChildren<{ isNavigate?: boolean }>> = ({ children, isNavigate }) => {
  return (
    <div className="ms:flex ms:flex-col ms:gap-4">
      <div className="ms:h-14" />
      <div className="ms:p-2 ms:mx-auto ms:container ms:group/page" data-navigate={isNavigate}>{children}</div>
      <Separator className="ms:mx-auto" />
      <Footer />
    </div>
  );
};
