import * as React from "react";
import { Separator } from "./ui/separator";
import { Footer } from "./Footer";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="h-14" />
            <div className="p-2 mx-auto container">
                {children}
            </div>
            <Separator className="container mx-auto" />
            <Footer />
        </div>
    );
}