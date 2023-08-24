import MeduzaLogo from "@/../img/svg/icon-swag.svg";
import * as React from "react";
import { Badge } from "./badge";
import { Button } from "./button";

export interface LogotypeProps {
    superscriptLogo?: string;
    badgeText?: string;
    logoSrc?: string;
    appName?: string;
    isButton?: boolean
}

export const Logotype: React.FC<LogotypeProps> = ({ superscriptLogo, logoSrc, appName, badgeText, isButton }) => {
    const logotype = (
        <>
            <img className="w-8 aspect-square" src={logoSrc || MeduzaLogo} />
            <h1 className="text-xl font-vksans font-semibold">{(appName || "нбм").toLocaleLowerCase()}{superscriptLogo && <sup className="text-muted-foreground text-xs">{superscriptLogo}</sup>}</h1>
            {badgeText && <Badge variant={"outline"}>
                {badgeText}
            </Badge>}
        </>
    )
    if (isButton) return (
        <Button variant={"ghost"} className="px-1.5 flex items-center gap-1" >
            {logotype}
        </Button>
    )

    return (
        <div className="flex items-center gap-1">
            {logotype}
        </div>
    )
};