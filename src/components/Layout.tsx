import * as React from "react";
import { Footer } from "./Footer";
import { Separator } from "./ui/separator";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="ms-antialiased ms-bg-background">
      <div className="ms-min-h-[100vh] ms-bg-background" vaul-drawer-wrapper="">
        <div className="ms-flex ms-flex-col ms-gap-4">
          <div className="ms-h-14" />
          <div className="ms-p-2 ms-mx-auto ms-container">{children}</div>
          <Separator className="ms-container ms-mx-auto" />
          <Footer />
        </div>
      </div>
    </div>
  );
};
