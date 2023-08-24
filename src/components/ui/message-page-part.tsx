import { X } from "lucide-react";
import * as React from "react";
import { Button } from "./button";

interface MessagePagePartProps {
    type?: "info" | "success" | "warning" | "error";
    title?: string;
    close?: () => void;
    icon?: React.ReactElement;
}

export const MessagePagePart: React.FC<React.PropsWithChildren<MessagePagePartProps>> = ({ type, title, close, children, icon }) => {
    const successClassName = "bg-green-100 border-green-400 text-green-800";
    const warnClassName = "bg-yellow-100 border-yellow-400 text-yellow-800";
    const errorClassName = "bg-red-100 border-red-400 text-red-800";
    const infoClassName = "bg-blue-100 border-blue-400 text-blue-800";

    const className =
        type === "error" ? errorClassName :
            type === "success" ? successClassName :
                type === "warning" ? warnClassName :
                    infoClassName;
    const buttonClassName =
        type === "error" ? "hover:bg-red-200 text-red-800" :
            type === "success" ? "hover:bg-green-200 text-green-800" :
                type === "warning" ? "hover:bg-yellow-200 text-yellow-800" :
                    "hover:bg-blue-200 text-blue-800";

    return (
        <div className={"p-2 rounded-md border " + className}>
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    {icon && <div className="flex items-center justify-center">
                        {icon}
                    </div>}
                    {title && <h3 className="font-vksans font-semibold">{title}</h3>}
                    {!title && <div className="text-sm">{children}</div>}
                </div>
                {close && <Button onClick={close} size={"icon"} className={"bg-transparent w-7 h-7 " + buttonClassName}>
                    <X className="h-[1rem] w-[1rem]" />
                </Button>}
            </div>
            {(title && children) && <div className="flex mt-2">
                {icon && <div className="flex items-center justify-center p-3">
                    {icon}
                </div>}
                <div className="flex-1 text-sm">{children}</div>
            </div>}
        </div>
    )
};

MessagePagePart.defaultProps = { type: "info" }