import * as React from "react";
import { Pencil } from "lucide-react";
import { Skeleton } from "./skeleton";
import { StandardAvatar } from "./avatar";
import { cn } from "@lib/utils";

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
    className?: string;
    infoClassName?: string;
}

export const ProfileBlockBackground: React.FC<React.PropsWithChildren<Pick<ProfileBlockProps, "className" | "setBg" | "skeletonLoad" | "noFullWidth"> & { backgroundUrl?: string }>> = ({ children, className, setBg, skeletonLoad, noFullWidth, backgroundUrl }) => {
    if (skeletonLoad) return (
        <Skeleton className={cn("aspect-[5/2] max-w-full rounded-md", !noFullWidth && "w-[42rem]")} />
    )

    return (
        <div className={cn("aspect-[5/2] group/profilebg relative py-2 max-w-full rounded-md border bg-cover bg-center flex justify-center items-center bg-secondary", !noFullWidth && "w-[42rem]", className)} style={{ backgroundImage: `url("${backgroundUrl}")` }}>
            {children}
            {setBg && <div onClick={setBg} className="hidden right-2 top-2 bg-background/90 group-hover/profilebg:flex duration-150 justify-center items-center cursor-pointer h-8 w-8 rounded-full absolute border backdrop-blur-sm">
                <Pencil className="h-4 w-4" />
            </div>}
        </div>
    )
};

export const ProfileInfoBlock: React.FC<{ user?: Pick<UserType, "backgroundUrl" | "avatarUrl" | "displayname" | "tag">; setAvatar?: () => void; className?: string; }> = ({ className, setAvatar, user }) => {
    return (
        <div className={cn("border h-40 max-h-full aspect-square flex items-center flex-col gap-1.5 justify-evenly p-2 bg-background/90 backdrop-blur-[2px] rounded-md", className)}>
            <StandardAvatar className="h-20 w-20 border group/avatar relative aspect-square max-h-full" fallback={user?.displayname} src={user?.tag}>
                {setAvatar && <div onClick={setAvatar} className="hidden inset-0 m-auto bg-background/90 group-hover/avatar:flex duration-150 justify-center items-center cursor-pointer h-8 w-8 rounded-full absolute border backdrop-blur-sm">
                    <Pencil className="h-4 w-4" />
                </div>}
            </StandardAvatar>
            <div className="flex items-center flex-col">
                <h4 className="text-xs">{user?.displayname}</h4>
                <p className="text-xs text-muted-foreground">@{user?.tag}</p>
            </div>
        </div>
    );
}

export const ProfileBlock: React.FC<ProfileBlockProps> = ({ user, skeletonLoad, noFullWidth, setAvatar, setBg, className, infoClassName }) => {
    return (
        <ProfileBlockBackground skeletonLoad={skeletonLoad} noFullWidth={noFullWidth} backgroundUrl={user?.backgroundUrl} className={className} setBg={setBg}>
            <ProfileInfoBlock user={user} setAvatar={setAvatar} className={infoClassName} />
        </ProfileBlockBackground>
    )
}