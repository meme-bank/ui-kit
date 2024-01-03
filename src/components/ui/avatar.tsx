import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn, usernameFirstLiterals } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "ms-relative ms-flex ms-h-10 ms-w-10 ms-shrink-0 ms-overflow-hidden ms-rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("ms-aspect-square ms-h-full ms-w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "ms-flex ms-h-full ms-w-full ms-items-center ms-justify-center ms-aspect-square ms-bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

interface StandardAvatarProps {
  src?: string;
  fallback?: string;
  className?: string;
}

const StandardAvatar: React.FC<React.PropsWithChildren<StandardAvatarProps>> = ({ children, fallback, src, className }) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} />
      <AvatarFallback>
        {fallback ? usernameFirstLiterals(fallback) : "НН"}
      </AvatarFallback>
      {children}
    </Avatar>
  )
};

export { Avatar, AvatarImage, AvatarFallback, StandardAvatar }
