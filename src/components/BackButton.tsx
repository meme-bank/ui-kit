import * as React from "react";
import { Button } from "@ui-components/button"
import { ChevronLeftCircle } from "lucide-react"

export const BackButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
    return (
        <Button onClick={onClick} variant={"ghost"} size={"icon"} className="ms:h-6 ms:w-6 ms:flex ms:hover:bg-accent ms:hover:text-accent-foreground ms:duration-150 ms:items-center ms:justify-center ms:cursor-pointer ms:rounded-full">
            <ChevronLeftCircle className={"ms:h-4 ms:w-4 ms:duration-150"} />
        </Button>
    )
}