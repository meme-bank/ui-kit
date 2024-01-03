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
    user?: Pick<UserType, "backgroundUrl" | "avatarUrl" | "displayname" | "tag">;
    skeletonLoad?: boolean;
    noFullWidth?: boolean;
    setAvatar?: () => void;
    setBg?: () => void;
    className?: ClassNameValue;
    infoClassName?: ClassNameValue;
    avatarClassName?: ClassNameValue;
    displaynameClassName?: ClassNameValue;
    tagClassName?: ClassNameValue;
    nameBlockClassName: ClassNameValue;
}

export const ProfileBlockBackground: React.FC<React.PropsWithChildren<Pick<ProfileBlockProps, "className" | "setBg" | "skeletonLoad" | "noFullWidth"> & { backgroundUrl?: string }>> = ({ children, className, setBg, skeletonLoad, noFullWidth, backgroundUrl }) => {
    if (skeletonLoad) return (
        <Skeleton className={cn("ms-aspect-[5/2] ms-max-w-full ms-rounded-md", !noFullWidth && "ms-w-[42rem]")} />
    )

    return (
        <div className={cn("ms-aspect-[5/2] ms-group/profilebg ms-relative ms-py-2 ms-max-w-full ms-rounded-md ms-border ms-bg-cover ms-bg-center ms-flex ms-justify-center ms-items-center ms-bg-secondary", !noFullWidth && "ms-w-[42rem]", className)} style={{ backgroundImage: `url("${backgroundUrl}")` }}>
            {children}
            {setBg && <div onClick={setBg} className="ms-hidden ms-right-2 ms-top-2 ms-bg-background/90 group-hover/profilebg:ms-flex duration-150 justify-center items-center cursor-pointer h-8 w-8 rounded-full absolute border backdrop-blur-sm">
                <Pencil className="ms-h-4 ms-w-4" />
            </div>}
        </div>
    )
};

export const ProfileInfoBlock: React.FC<{
    displaynameClassName?: ClassNameValue;
    tagClassName?: ClassNameValue; nameBlockClassName?: ClassNameValue; avatarClassName?: ClassNameValue, user?: Pick<UserType, "backgroundUrl" | "avatarUrl" | "displayname" | "tag">; setAvatar?: () => void; className?: ClassNameValue;
}> = ({ className, setAvatar, user, avatarClassName, displaynameClassName, tagClassName, nameBlockClassName }) => {
    return (
        <div className={cn("ms-border ms-h-40 ms-max-h-full ms-aspect-square ms-flex ms-items-center ms-flex-col ms-gap-1.5 ms-justify-evenly ms-p-2 ms-bg-background/90 ms-backdrop-blur-[2px] ms-rounded-md", className)}>
            <StandardAvatar className={cn("ms-h-20 ms-w-20 ms-border ms-group/avatar ms-relative ms-aspect-square ms-max-h-full", avatarClassName)} fallback={user?.displayname} src={user?.avatarUrl}>
                {setAvatar && <div onClick={setAvatar} className="ms-hidden ms-inset-0 ms-m-auto ms-bg-background/90 group-hover/avatar:ms-flex ms-duration-150 ms-justify-center ms-items-center ms-cursor-pointer ms-h-8 ms-w-8 ms-rounded-full ms-absolute ms-border ms-backdrop-blur-sm">
                    <Pencil className="ms-h-4 ms-w-4" />
                </div>}
            </StandardAvatar>
            <div className={cn("ms-flex ms-items-center ms-flex-col", nameBlockClassName)}>
                <h4 className={cn("ms-text-xs", displaynameClassName)}>{user?.displayname}</h4>
                <p className={cn("ms-text-xs ms-text-muted-foreground", tagClassName)}>@{user?.tag}</p>
            </div>
        </div>
    );
}

export const ProfileBlock: React.FC<ProfileBlockProps> = ({ user, skeletonLoad, noFullWidth, setAvatar, setBg, className, infoClassName, avatarClassName, nameBlockClassName, displaynameClassName, tagClassName }) => {
    return (
        <ProfileBlockBackground skeletonLoad={skeletonLoad} noFullWidth={noFullWidth} backgroundUrl={user?.backgroundUrl} className={className} setBg={setBg}>
            <ProfileInfoBlock user={user} setAvatar={setAvatar} className={infoClassName} avatarClassName={avatarClassName} nameBlockClassName={nameBlockClassName} displaynameClassName={displaynameClassName} tagClassName={tagClassName} />
        </ProfileBlockBackground>
    )
}