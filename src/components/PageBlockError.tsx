import * as React from "react";
import { PageBlock } from "./ui/page-block";
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface IPageBlockErrorProps {
    close(): void;
    error: string;
}

export const PageBlockError: React.FC<IPageBlockErrorProps> = ({ close, error }) => {
    return (
        <PageBlock error>
            <div className="flex items-center justify-between">
                <h3 className="font-vksans font-semibold text-lg text-red-800 dark:text-red-100">Ошибка</h3>
                <Button onClick={close} size={"icon"} className={"bg-transparent w-7 h-7 hover:bg-red-200 dark:hover:bg-red-600 text-red-800 dark:text-red-100"}>
                    <X className="h-[1rem] w-[1rem]" />
                </Button>
            </div>
            <p className="font-vksans text-sm">{error}</p>
        </PageBlock>
    )
}