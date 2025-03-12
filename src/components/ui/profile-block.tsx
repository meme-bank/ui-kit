import { cn } from "@lib/utils";
import clsx from "clsx";
import { Pencil } from "lucide-react";
import * as React from "react";
import { ClassNameValue } from "tailwind-merge";
import { StandardAvatar } from "./avatar";
import { CropperDialogContent, OnUpload } from "./cropper-controls";
import { Dialog, DialogTrigger } from "./dialog";
import { Skeleton } from "./skeleton";

interface ProfileAccountType {
  backgroundUrl?: string;
  avatarUrl?: string;
  displayname: string;
  tag: string;
}

export interface ProfileBlockProps {
  account?: ProfileAccountType;
  skeletonLoad?: boolean;
  noFullWidth?: boolean;
  setAvatar?: OnUpload;
  setBg?: OnUpload;
  className?: ClassNameValue;
  infoClassName?: ClassNameValue;
  avatarClassName?: ClassNameValue;
  displaynameClassName?: ClassNameValue;
  tagClassName?: ClassNameValue;
  nameBlockClassName?: ClassNameValue;
  mobileForce?: boolean;
}

export const ProfileBlockBackground: React.FC<
  React.PropsWithChildren<
    Pick<
      ProfileBlockProps,
      "className" | "setBg" | "skeletonLoad" | "noFullWidth" | "mobileForce"
    > & { backgroundUrl?: string }
  >
> = ({
  children,
  className,
  setBg,
  skeletonLoad,
  noFullWidth,
  backgroundUrl,
}) => {
    const [cropperDialog, setCropperDialog] = React.useState(false);
    if (skeletonLoad)
      return (
        <Skeleton
          className={cn(
            "ms:@container/main ms:max-w-full ms:rounded-md",
            noFullWidth && "ms:w-[42rem]"
          )}
        >
          <div className="@md/ms:main:aspect-[5/2] @md/ms:main:relative">
            <div className="ms:aspect-[5/2] @md/ms:main:absolute @md/ms:main:top-0 @md/ms:main:left-0"></div>
            {children}
          </div>
        </Skeleton>
      );

    return (
      <div
        className={clsx(
          "ms:@container/main ms:max-w-full",
          noFullWidth && "ms:w-[42rem]"
        )}
      >
        <div
          className={cn(
            "@md/ms:main:aspect-[5/2] @md/ms:main:relative ms:border @md/ms:main:py-2 ms:rounded-md ms:overflow-hidden @md/ms:main:flex @md/ms:main:justify-center @md/ms:main:items-center",
            className
          )}
        >
          <div
            className={cn(
              "ms:aspect-[5/2] @md/ms:main:absolute ms:border-b @md/ms:main:border-0 @md/ms:main:top-0 @md/ms:main:left-0 ms:group/profilebg ms:relative w-full ms:bg-cover ms:bg-center ms:bg-secondary"
            )}
            style={{ backgroundImage: `url("${backgroundUrl}")` }}
          >
            {setBg && (
              <Dialog onOpenChange={setCropperDialog} open={cropperDialog}>
                <DialogTrigger className="ms:flex ms:opacity-0 ms:right-2 ms:top-2 ms:bg-background/90 group-hover/ms:profilebg:opacity-100 ms:justify-center ms:items-center ms:cursor-pointer ms:h-8 ms:w-8 ms:rounded-full ms:absolute ms:border ms:backdrop-blur-sm ms:duration-150">
                  <Pencil className="ms:h-4 ms:w-4" />
                </DialogTrigger>
                <CropperDialogContent
                  openState={cropperDialog}
                  onUpload={setBg}
                  type="background"
                />
              </Dialog>
            )}
          </div>
          {children}
        </div>
      </div>
    );
  };

export const ProfileInfoBlock: React.FC<{
  displaynameClassName?: ClassNameValue;
  tagClassName?: ClassNameValue;
  nameBlockClassName?: ClassNameValue;
  avatarClassName?: ClassNameValue;
  account?: ProfileAccountType;
  setAvatar?: OnUpload;
  className?: ClassNameValue;
}> = ({
  className,
  setAvatar,
  account,
  avatarClassName,
  displaynameClassName,
  tagClassName,
  nameBlockClassName,
}) => {
    const [cropperDialog, setCropperDialog] = React.useState(false);
    return (
      <div
        className={cn(
          "@md/ms:main:border @md/ms:main:h-40 @3xl/ms:main:h-60 ms:max-h-full @md/ms:main:aspect-square ms:flex ms:items-center @md/ms:main:flex-col ms:gap-3 @md/ms:main:gap-1.5 @md/ms:main:justify-evenly ms:p-2 ms:bg-background/90 ms:backdrop-blur-[2px] ms:rounded-md",
          className
        )}
      >
        <StandardAvatar
          className={cn(
            "ms:w-16 ms:h-16 @md/ms:main:h-20 @md/ms:main:w-20 @3xl/ms:main:h-28 @3xl/ms:main:w-28 ms:border ms:group/avatar ms:relative ms:aspect-square ms:max-h-full",
            avatarClassName
          )}
          fallback={account?.displayname}
          src={account?.avatarUrl}
        >
          {setAvatar && (
            <Dialog onOpenChange={setCropperDialog} open={cropperDialog}>
              <DialogTrigger className="ms:opacity-0 group-hover/ms:avatar:opacity-100 ms:inset-0 ms:m-auto ms:bg-background/90 ms:flex ms:duration-150 ms:justify-center ms:items-center ms:cursor-pointer ms:h-8 ms:w-8 ms:rounded-full ms:absolute ms:border ms:backdrop-blur-sm">
                <Pencil className="ms:h-4 ms:w-4" />
              </DialogTrigger>
              <CropperDialogContent
                openState={cropperDialog}
                onUpload={setAvatar}
                type="avatar"
              />
            </Dialog>
          )}
        </StandardAvatar>
        <div
          className={cn(
            "ms:flex @md/ms:main:items-center ms:flex-col",
            nameBlockClassName
          )}
        >
          <h4
            className={cn(
              "@md/ms:main:text-xs @3xl/ms:main:text-base",
              displaynameClassName
            )}
          >
            {account?.displayname}
          </h4>
          <p
            className={cn(
              "ms:text-xs @3xl/ms:main:text-sm ms:text-muted-foreground",
              tagClassName
            )}
          >
            @{account?.tag}
          </p>
        </div>
      </div>
    );
  };

export const ProfileBlock: React.FC<ProfileBlockProps> = ({
  account,
  skeletonLoad,
  noFullWidth,
  setAvatar,
  setBg,
  className,
  infoClassName,
  avatarClassName,
  nameBlockClassName,
  displaynameClassName,
  tagClassName,
}) => {
  return (
    <ProfileBlockBackground
      skeletonLoad={skeletonLoad}
      noFullWidth={noFullWidth}
      backgroundUrl={account?.backgroundUrl}
      className={className}
      setBg={setBg}
    >
      <ProfileInfoBlock
        account={account}
        setAvatar={setAvatar}
        className={infoClassName}
        avatarClassName={avatarClassName}
        nameBlockClassName={nameBlockClassName}
        displaynameClassName={displaynameClassName}
        tagClassName={tagClassName}
      />
    </ProfileBlockBackground>
  );
};
