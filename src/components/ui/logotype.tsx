import MeduzaLogo from "@/../img/svg/icon-swag.svg";
import * as React from "react";
import { Badge } from "./badge";
import { Button, ButtonProps } from "./button";
import { cn } from "@/lib/utils";

export interface LogotypeProps extends ButtonProps {
    superscriptLogo?: string;
    badgeText?: string;
    logoSrc?: string;
    appName?: string;
}

export const Logotype: React.FC<LogotypeProps> = ({ superscriptLogo, logoSrc, appName, badgeText, ...props }) => {
    const logotype = (
        <>
            <img className="w-7 h-7 aspect-square" src={logoSrc || MeduzaLogo} />
            <h1 className="text-xl font-vksans font-semibold">{(appName || "нбм").toLocaleLowerCase()}{superscriptLogo && <sup className="text-muted-foreground text-xs">{superscriptLogo}</sup>}</h1>
            {badgeText && <Badge variant={"outline"}>
                {badgeText}
            </Badge>}
        </>
    )
    return (
        <Button variant={"ghost"} {...props} className={cn("px-1.5 flex items-center gap-1", props.className)} >
            {logotype}
        </Button>
    )
};