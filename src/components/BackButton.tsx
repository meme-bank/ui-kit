import * as React from "react";
import { Button } from "@ui-components/button"
import { ChevronLeftCircle } from "lucide-react"

export const BackButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
    return (
        <Button onClick={onClick} variant={"ghost"} size={"icon"} className="h-6 w-6 flex hover:bg-accent hover:text-accent-foreground duration-150 items-center justify-center cursor-pointer rounded-full">
            <ChevronLeftCircle className={"h-4 w-4 duration-150"} />
        </Button>
    )
}