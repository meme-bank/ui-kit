import { FC, MouseEventHandler, PropsWithChildren, SetStateAction, useState } from "react";
import { ChevronLeftCircle, ChevronRightCircle, LucideIcon } from "lucide-react";
import React from "react";
import { PageBlock } from "./page-block";
import { cn } from "@lib/utils";
import { Separator } from "./separator";

export interface NavigatorType extends FC<PropsWithChildren> {
    Button: FC<PropsWithChildren<{ action: MouseEventHandler, Icon?: LucideIcon, IconRender?: React.FC, iconClassName?: string, className?: string; isActive?: boolean }>>;
    ButtonNoAdaptive: FC<PropsWithChildren<{ action: MouseEventHandler, Icon?: LucideIcon, IconRender?: React.FC, iconClassName?: string, className?: string; isActive?: boolean }>>;
    Header: FC<PropsWithChildren>;
    ButtonContainer: FC<PropsWithChildren>;
    Separator: FC;
}

const NavigatorContext = React.createContext<{ setOpen: React.Dispatch<SetStateAction<boolean>>, open: boolean }>({ open: true, setOpen() { } });
const useNavigator = () => React.useContext(NavigatorContext);

export const Navigator: NavigatorType = ({ children }) => {
    const [open, setOpen] = useState(true);

    return (
        <NavigatorContext.Provider value={{ open, setOpen }}>
            <PageBlock>
                {children}
            </PageBlock>
        </NavigatorContext.Provider>
    )
};

Navigator.Button = ({ Icon, children, action, className, isActive, IconRender, iconClassName }) => {
    return (
        <div
            className={
                cn(
                    "w-[90px] h-[90px] lg:w-full lg:h-auto p-2 text-sm flex lg:justify-start justify-center flex-col lg:flex-row select-none px-3 duration-150 rounded-md items-center group cursor-pointer text-secondary-foreground gap-2 font-semibold",
                    (isActive ? "bg-secondary shadow" : "hover:bg-secondary hover:shadow"),
                    className
                )
            }
            onClick={action}
        >
            {Icon && <Icon className={cn("h-8 w-8 lg:w-4 lg:h-4", iconClassName)} />}
            {(IconRender && !Icon) && <IconRender />}
            {(!IconRender && !Icon) && <ChevronRightCircle className={cn("h-8 w-8 rotate-90 lg:w-4 lg:h-4 lg:rotate-0", iconClassName)} />}
            <Separator className={cn("h-px w-8 duration-150 lg:h-5 lg:w-px", (isActive ? "mb-0" : "mb-1 lg:mb-0 group-hover:mb-0"))} />
            <div className={cn("duration-150 text-xs lg:text-sm text-ellipsis block overflow-hidden whitespace-nowrap", (isActive ? "lg:ml-1 mb-1 lg:mb-0" : "group-hover:lg:ml-1 mb-0 group-hover:mb-1 group-hover:lg:mb-0"))}>{children}</div>
        </div>
    )
};
Navigator.ButtonNoAdaptive = ({ Icon, children, action, className, isActive, IconRender, iconClassName }) => {
    return (
        <div
            className={
                cn(
                    "w-full text-sm select-none p-2 flex px-3 rounded items-center group cursor-pointer gap-2 font-semibold hover:text-accent-foreground hover:bg-accent hover:shadow",
                    (isActive ? "bg-secondary shadow" : "hover:bg-secondary hover:shadow"),
                    className
                )
            }
            onClick={action}
        >
            {Icon && <Icon className={cn("h-4 w-4", iconClassName)} />}
            {(IconRender && !Icon) && <IconRender />}
            {(!IconRender && !Icon) && <ChevronRightCircle className={cn("h-4 w-4", iconClassName)} />}
            <Separator orientation="vertical" className="h-5" />
            <div className={cn("duration-150 text-ellipsis block overflow-hidden whitespace-nowrap", (isActive ? "ml-1" : "group-hover:lg:ml-1"))}>{children}</div>
        </div>
    )
};

Navigator.Header = ({ children }) => {
    const { open, setOpen } = useNavigator();

    return (
        <div className={cn("flex gap-2 items-center justify-between duration-150", (!open ? "mb-3" : "mb-5"))}>
            <h4 className="font-vksans">{children || "Навигация"}</h4>
            <div onClick={() => setOpen(state => !state)} className="h-6 w-6 flex hover:bg-accent hover:text-accent-foreground duration-150 items-center justify-center cursor-pointer rounded-full">
                <ChevronLeftCircle className={cn("h-4 w-4 duration-150", !open && "rotate-180")} />
            </div>
        </div>
    )
}

Navigator.ButtonContainer = ({ children }) => {
    const { open } = useNavigator();
    if (!open) return null;

    return (
        <div className="flex duration-150 lg:flex-col justify-center gap-1">
            {children}
        </div>
    )
};

Navigator.Separator = () => {
    return (
        <Separator className="my-2" />
    )
}