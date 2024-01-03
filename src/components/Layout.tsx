import * as React from "react";
import { Separator } from "./ui/separator";
import { Footer } from "./Footer";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="ms-flex ms-flex-col ms-gap-4">
            <div className="ms-h-14" />
            <div className="ms-p-2 ms-mx-auto ms-container">
                {children}
            </div>
            <Separator className="ms-container ms-mx-auto" />
            <Footer />
        </div>
    );
}