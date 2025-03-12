import MeduzaLogo from "@/../img/svg/icon-swag.svg";
import * as React from "react";
import { Badge } from "./badge";
import { Button, ButtonProps } from "./button";
import { cn } from "@/lib/utils";

export interface LogotypeProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    superscriptLogo?: string;
    badgeText?: string;
    logoSrc?: string;
    appName?: string;
}

export const Logotype: React.FC<LogotypeProps> = ({ superscriptLogo, logoSrc, appName, badgeText, ...props }) => {
    return (
        <div {...props} className={cn("ms:inline-flex ms:items-center ms:gap-1", props.className)}>
            <img className="ms:w-7 ms:h-7 ms:aspect-square" src={logoSrc || MeduzaLogo} />
            <h1 className="ms:text-xl ms:font-vksans ms:font-semibold">{(appName || "нбм").toLocaleLowerCase()}{superscriptLogo && <sup className="ms:text-muted-foreground ms:text-xs">{superscriptLogo}</sup>}</h1>
            {badgeText && <Badge variant={"outline"}>
                {badgeText}
            </Badge>}
        </div>
    )
};