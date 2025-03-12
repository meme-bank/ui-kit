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
                    className="ms:flex ms:items-center ms:justify-center ms:h-5 ms:w-5 ms:mr-2"
                >
                    <VKIcon scale={20} />
                </div>
                <span className="ms:whitespace-nowrap ms:overflow-hidden ms:mt-px ms:text-ellipsis">
                    {actionType === "login" ? "Войти" : "Зарегистрироваться"} через VK ID
                </span>
                <Loader2 className={"ms:h-5 ms:w-5 ms:ml-2 " + (IsLoading ? "ms:animate-spin" : "ms:invisible")} />
            </Button>
        );
    };
