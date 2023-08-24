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
        <div {...props} className={cn("flex items-center gap-1", props.className)}>
            <img className="w-7 h-7 aspect-square" src={logoSrc || MeduzaLogo} />
            <h1 className="text-xl font-vksans font-semibold">{(appName || "нбм").toLocaleLowerCase()}{superscriptLogo && <sup className="text-muted-foreground text-xs">{superscriptLogo}</sup>}</h1>
            {badgeText && <Badge variant={"outline"}>
                {badgeText}
            </Badge>}
        </div>
    )
};