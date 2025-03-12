import { X } from "lucide-react";
import * as React from "react";
import { Button } from "./ui/button";
import { PageBlock } from "./ui/page-block";

interface IPageBlockErrorProps {
  close(): void;
  error: string;
}

export const PageBlockError: React.FC<IPageBlockErrorProps> = ({
  close,
  error,
}) => {
  return (
    <PageBlock error>
      <div className="ms:flex ms:items-center ms:justify-between">
        <h3 className="ms:font-vksans ms:font-semibold ms:text-lg ms:text-destructive-foreground">
          Ошибка
        </h3>
        <Button
          onClick={close}
          size={"icon"}
          className={
            "ms:bg-transparent ms:w-7 ms:h-7 ms:hover:bg-red-200 ms:dark:hover:bg-red-600 ms:text-red-800 ms:dark:text-red-100"
          }
        >
          <X className="ms:h-[1rem] ms:w-[1rem]" />
        </Button>
      </div>
      <p className="ms:font-vksans ms:text-sm">{error}</p>
    </PageBlock>
  );
};
