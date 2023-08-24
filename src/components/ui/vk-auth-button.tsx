import { VKIcon } from "./vk-icon";
import * as React from "react";
import { Loader2 } from "lucide-react";
import { Button } from "./button";

export const VKAuthButton: React.FC<{
    IsLoading?: boolean;
    className?: string;
    actionType?: "login" | "register";
    type?: "button" | "submit";
    onClick?: VoidFunction;
}> = ({
    IsLoading = false,
    className,
    actionType = "login",
    type = "button",
    onClick
}) => {
        return (
            <Button
                onClick={onClick}
                disabled={IsLoading}
                type={type}
                className={className}
                variant={"vk"}
            >
                <div
                    className="flex items-center justify-center h-5 w-5 mr-2"
                >
                    <VKIcon scale={20} />
                </div>
                <span className="whitespace-nowrap overflow-hidden mt-px text-ellipsis">
                    {actionType === "login" ? "Войти" : "Зарегистрироваться"} через VK ID
                </span>
                <Loader2 className={"h-5 w-5 ml-2 " + (IsLoading ? "animate-spin" : "invisible")} />
            </Button>
        );
    };
