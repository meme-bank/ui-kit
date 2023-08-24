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

interface ProfileBlockProps {
    user?: Pick<UserType, "backgroundUrl" | "avatarUrl" | "displayname" | "tag">;
    skeletonLoad?: boolean;
    noFullWidth?: boolean;
    setAvatar?: () => void;
    setBg?: () => void;
}

export const ProfileBlock: React.FC<ProfileBlockProps> = ({ user, skeletonLoad, noFullWidth, setAvatar, setBg }) => {
    if (skeletonLoad) return (
        <Skeleton className={cn("aspect-[5/2] max-w-full rounded-md", !noFullWidth && "w-[42rem]")} />
    )

    return (
        <div className={cn("aspect-[5/2] group/profilebg relative py-2 max-w-full rounded-md border border-solid bg-cover bg-center flex justify-center items-center bg-secondary", !noFullWidth && "w-[42rem]")} style={{ backgroundImage: `url("${user?.backgroundUrl}")` }}>
            <div className="border h-40 max-h-full aspect-square flex items-center flex-col gap-1.5 justify-evenly p-2 bg-background/90 backdrop-blur-[2px] rounded-md">
                <StandardAvatar className="h-20 w-20 border group/avatar relative aspect-square max-h-full" fallback={user?.displayname} src={user?.tag}>
                    {setAvatar && <div onClick={setAvatar} className="hidden inset-0 m-auto animate-in bg-background/90 group-hover/avatar:flex duration-150 justify-center items-center cursor-pointer h-8 w-8 rounded-full absolute border backdrop-blur-sm">
                        <Pencil className="h-4 w-4" />
                    </div>}
                </StandardAvatar>
                <div className="flex items-center flex-col">
                    <h4 className="text-xs">{user?.displayname}</h4>
                    <p className="text-xs text-muted-foreground">@{user?.tag}</p>
                </div>
            </div>
            {setBg && <div onClick={setBg} className="hidden right-2 top-2 animate-in bg-background/90 group-hover/profilebg:flex duration-150 justify-center items-center cursor-pointer h-8 w-8 rounded-full absolute border backdrop-blur-sm">
                <Pencil className="h-4 w-4" />
            </div>}
        </div>
    )
}