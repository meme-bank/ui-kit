import { X } from "lucide-react";
import * as React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface MessagePagePartProps {
    type?: "info" | "success" | "warning" | "error";
    title?: string;
    close?: () => void;
    icon?: React.ReactElement;
}

export const MessagePagePart: React.FC<React.PropsWithChildren<MessagePagePartProps>> = ({ type, title, close, children, icon }) => {
    const successClassName = "ms-bg-green-100 ms-border-green-400 ms-text-green-800";
    const warnClassName = "ms-bg-yellow-100 ms-border-yellow-400 ms-text-yellow-800";
    const errorClassName = "ms-bg-red-100 ms-border-red-400 ms-text-red-800";
    const infoClassName = "ms-bg-blue-100 ms-border-blue-400 ms-text-blue-800";

    const className =
        type === "error" ? errorClassName :
            type === "success" ? successClassName :
                type === "warning" ? warnClassName :
                    infoClassName;
    const buttonClassName =
        type === "error" ? "hover:ms-bg-red-200 ms-text-red-800" :
            type === "success" ? "hover:ms-bg-green-200 ms-text-green-800" :
                type === "warning" ? "hover:ms-bg-yellow-200 ms-text-yellow-800" :
                    "hover:ms-bg-blue-200 ms-text-blue-800";

    return (
        <div className={cn("ms-p-2 ms-rounded-md ms-border", className)}>
            <div className="ms-flex ms-items-center ms-justify-between">
                <div className="ms-flex ms-gap-2">
                    {icon && <div className="ms-flex ms-items-center ms-justify-center">
                        {icon}
                    </div>}
                    {title && <h3 className="ms-font-vksans ms-font-semibold">{title}</h3>}
                    {!title && <div className="ms-text-sm">{children}</div>}
                </div>
                {close && <Button onClick={close} size={"icon"} className={"ms-bg-transparent ms-w-7 ms-h-7 " + buttonClassName}>
                    <X className="ms-h-[1rem] ms-w-[1rem]" />
                </Button>}
            </div>
            {(title && children) && <div className="ms-flex ms-mt-2">
                {icon && <div className="ms-flex ms-items-center ms-justify-centerms- p-3">
                    {icon}
                </div>}
                <div className="ms-flex-1 ms-text-sm">{children}</div>
            </div>}
        </div>
    )
};

MessagePagePart.defaultProps = { type: "info" }