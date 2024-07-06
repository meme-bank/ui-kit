import * as React from "react";
import { Pencil } from "lucide-react";
import { Skeleton } from "./skeleton";
import { StandardAvatar } from "./avatar";
import { cn } from "@lib/utils";
import { ClassNameValue } from "tailwind-merge";

interface UserType {
    backgroundUrl?: string;
    avatarUrl?: string;
    displayname: string;
    tag: string;
}

export interface ProfileBlockProps {
    account?: Pick<UserType, "backgroundUrl" | "avatarUrl" | "displayname" | "tag">;
    skeletonLoad?: boolean;
    noFullWidth?: boolean;
    setAvatar?: () => void;
    setBg?: () => void;
    className?: ClassNameValue;
    infoClassName?: ClassNameValue;
    avatarClassName?: ClassNameValue;
    displaynameClassName?: ClassNameValue;
    tagClassName?: ClassNameValue;
    nameBlockClassName?: ClassNameValue;
}

export const ProfileBlockBackground: React.FC<React.PropsWithChildren<Pick<ProfileBlockProps, "className" | "setBg" | "skeletonLoad" | "noFullWidth"> & { backgroundUrl?: string }>> = ({ children, className, setBg, skeletonLoad, noFullWidth, backgroundUrl }) => {
    if (skeletonLoad) return (
        <Skeleton className={cn("ms-aspect-[5/2] ms-max-w-full ms-rounded-md", !noFullWidth && "ms-w-[42rem]")} />
    )

    return (
        <div className={cn("sm:ms-aspect-[5/2] ms-max-w-full sm:ms-relative ms-border sm:ms-py-2 ms-rounded-md ms-overflow-hidden sm:ms-flex sm:ms-justify-center sm:ms-items-center", noFullWidth && "ms-w-[42rem]")}>
            <div className={cn("ms-aspect-[5/2] sm:ms-absolute ms-border-b sm:ms-border-0 sm:ms-top-0 sm:ms-left-0 ms-group/profilebg ms-relative w-full ms-bg-cover ms-bg-center ms-bg-secondary", className)} style={{ backgroundImage: `url("${backgroundUrl}")` }}>
                {setBg && <div onClick={setBg} className="ms-hidden ms-right-2 ms-top-2 ms-bg-background/90 group-hover/profilebg:ms-flex ms-duration-150 ms-justify-center ms-items-center ms-cursor-pointer ms-h-8 ms-w-8 ms-rounded-full ms-absolute ms-border ms-backdrop-blur-sm">
                    <Pencil className="ms-h-4 ms-w-4" />
                </div>}
            </div>
            {children}
        </div>
    )
};

export const ProfileInfoBlock: React.FC<{
    displaynameClassName?: ClassNameValue;
    tagClassName?: ClassNameValue; nameBlockClassName?: ClassNameValue; avatarClassName?: ClassNameValue, account?: Pick<UserType, "backgroundUrl" | "avatarUrl" | "displayname" | "tag">; setAvatar?: () => void; className?: ClassNameValue;
}> = ({ className, setAvatar, account, avatarClassName, displaynameClassName, tagClassName, nameBlockClassName }) => {
    return (
        <div className={cn("sm:ms-border sm:ms-h-40 lg:ms-h-60 ms-max-h-full sm:ms-aspect-square ms-flex ms-items-center sm:ms-flex-col ms-gap-3 sm:ms-gap-1.5 sm:ms-justify-evenly ms-p-2 ms-bg-background/90 ms-backdrop-blur-[2px] ms-rounded-md", className)}>
            <StandardAvatar className={cn("ms-w-16 ms-h-16 sm:ms-h-20 sm:ms-w-20 lg:ms-h-28 lg:ms-w-28 ms-border ms-group/avatar ms-relative ms-aspect-square ms-max-h-full", avatarClassName)} fallback={account?.displayname} src={account?.avatarUrl}>
                {setAvatar && <div onClick={setAvatar} className="ms-hidden ms-inset-0 ms-m-auto ms-bg-background/90 group-hover/avatar:ms-flex ms-duration-150 ms-justify-center ms-items-center ms-cursor-pointer ms-h-8 ms-w-8 ms-rounded-full ms-absolute ms-border ms-backdrop-blur-sm">
                    <Pencil className="ms-h-4 ms-w-4" />
                </div>}
            </StandardAvatar>
            <div className={cn("ms-flex sm:ms-items-center ms-flex-col", nameBlockClassName)}>
                <h4 className={cn("sm:ms-text-xs lg:ms-text-base", displaynameClassName)}>{account?.displayname}</h4>
                <p className={cn("ms-text-xs lg:ms-text-sm ms-text-muted-foreground", tagClassName)}>@{account?.tag}</p>
            </div>
        </div>
    );
}

export const ProfileBlock: React.FC<ProfileBlockProps> = ({ account, skeletonLoad, noFullWidth, setAvatar, setBg, className, infoClassName, avatarClassName, nameBlockClassName, displaynameClassName, tagClassName }) => {
    return (
        <ProfileBlockBackground skeletonLoad={skeletonLoad} noFullWidth={noFullWidth} backgroundUrl={account?.backgroundUrl} className={className} setBg={setBg}>
            <ProfileInfoBlock account={account} setAvatar={setAvatar} className={infoClassName} avatarClassName={avatarClassName} nameBlockClassName={nameBlockClassName} displaynameClassName={displaynameClassName} tagClassName={tagClassName} />
        </ProfileBlockBackground>
    )
}