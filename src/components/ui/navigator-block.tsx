import { Iconable } from "@/lib/types";
import { cn } from "@lib/utils";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import React, {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import { PageBlock } from "./page-block";
import { Separator } from "./separator";

export interface NavigatorType extends FC<PropsWithChildren> {
  Button: FC<
    PropsWithChildren<{
      action: MouseEventHandler;
      Icon?: Iconable;
      IconRender?: React.FC;
      iconClassName?: string;
      className?: string;
      isActive?: boolean;
    }>
  >;
  ButtonNoAdaptive: FC<
    PropsWithChildren<{
      action: MouseEventHandler;
      Icon?: Iconable;
      IconRender?: React.FC;
      iconClassName?: string;
      className?: string;
      isActive?: boolean;
    }>
  >;
  Header: FC<PropsWithChildren>;
  ButtonContainer: FC<PropsWithChildren>;
  Separator: FC;
}

const NavigatorContext = React.createContext<{
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  open: boolean;
}>({ open: true, setOpen() { } });
const useNavigator = () => React.useContext(NavigatorContext);

export const Navigator: NavigatorType = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <NavigatorContext.Provider value={{ open, setOpen }}>
      <PageBlock>{children}</PageBlock>
    </NavigatorContext.Provider>
  );
};

Navigator.Button = ({
  Icon,
  children,
  action,
  className,
  isActive,
  IconRender,
  iconClassName,
}) => {
  return (
    <div
      className={cn(
        "ms:w-[100px] ms:h-[100px] ms:lg:w-full ms:lg:h-auto ms:p-2 ms:text-sm ms:flex ms:lg:justify-start ms:justify-center ms:flex-col ms:lg:flex-row ms:select-none ms:px-3 ms:duration-150 ms:rounded-md ms:items-center ms:group ms:cursor-pointer ms:text-secondary-foreground ms:gap-2 ms:font-semibold",
        isActive
          ? "ms:bg-secondary ms:shadow"
          : "ms:hover:bg-secondary ms:hover:shadow",
        className
      )}
      onClick={action}
    >
      {Icon && (
        <Icon
          className={cn("ms:h-8 ms:w-8 ms:lg:w-4 ms:lg:h-4", iconClassName)}
        />
      )}
      {IconRender && !Icon && <IconRender />}
      {!IconRender && !Icon && (
        <ChevronRightCircle
          className={cn(
            "ms:h-8 ms:w-8 ms:rotate-90 ms:lg:w-4 ms:lg:h-4 ms:lg:rotate-0",
            iconClassName
          )}
        />
      )}
      <Separator
        className={cn(
          "ms:h-px ms:w-8 ms:duration-150 ms:lg:h-5 ms:lg:w-px",
          isActive ? "mb-0" : "mb-1 lg:mb-0 group-hover:mb-0"
        )}
      />
      <div
        className={cn(
          "ms:duration-150 ms:text-xs ms:lg:text-sm ms:text-ellipsis ms:block ms:overflow-hidden ms:whitespace-nowrap",
          isActive
            ? "ms:lg:ml-1 ms:mb-1 ms:lg:mb-0"
            : "ms:group-hover:lg:ml-1 ms:mb-0 group-ms:hover:mb-1 ms:group-hover:lg:mb-0"
        )}
      >
        {children}
      </div>
    </div>
  );
};
Navigator.ButtonNoAdaptive = ({
  Icon,
  children,
  action,
  className,
  isActive,
  IconRender,
  iconClassName,
}) => {
  return (
    <div
      className={cn(
        "ms:w-full ms:text-sm ms:select-none ms:p-2 ms:flex ms:px-3 ms:rounded ms:items-center ms:group ms:cursor-pointer ms:gap-2 ms:font-semibold ms:hover:text-accent-foreground ms:hover:bg-accent ms:hover:shadow",
        isActive
          ? "ms:bg-secondary ms:shadow"
          : "ms:hover:bg-secondary ms:hover:shadow",
        className
      )}
      onClick={action}
    >
      {Icon && <Icon className={cn("ms:h-4 ms:w-4", iconClassName)} />}
      {IconRender && !Icon && <IconRender />}
      {!IconRender && !Icon && (
        <ChevronRightCircle className={cn("ms:h-4 ms:w-4", iconClassName)} />
      )}
      <Separator orientation="vertical" className="ms:h-5" />
      <div
        className={cn(
          "ms:duration-150 ms:text-ellipsis ms:block ms:overflow-hidden ms:whitespace-nowrap",
          isActive ? "ms:ml-1" : "ms:group-hover:lg:ml-1"
        )}
      >
        {children}
      </div>
    </div>
  );
};

Navigator.Header = ({ children }) => {
  const { open, setOpen } = useNavigator();

  return (
    <div
      className={cn(
        "ms:flex ms:gap-2 ms:items-center ms:justify-between ms:duration-150",
        !open ? "ms:mb-3" : "ms:mb-5"
      )}
    >
      <div className="ms:h-6 ms:w-6" />
      <h4 className="ms:font-vksans ms:font-bold">{children || "Навигация"}</h4>
      <div
        onClick={() => setOpen(state => !state)}
        className="ms:h-6 ms:w-6 ms:flex ms:hover:bg-accent ms:hover:text-accent-foreground ms:duration-150 ms:items-center ms:justify-center ms:cursor-pointer ms:rounded-full"
      >
        <ChevronLeftCircle
          className={cn(
            "ms:h-4 ms:w-4 ms:duration-150",
            !open && "ms:rotate-180"
          )}
        />
      </div>
    </div>
  );
};

Navigator.ButtonContainer = ({ children }) => {
  const { open } = useNavigator();
  if (!open) return null;

  return (
    <div className="ms:flex ms:duration-150 ms:lg:flex-col ms:justify-center ms:gap-1">
      {children}
    </div>
  );
};

Navigator.Separator = () => {
  return <Separator className="ms:my-2" />;
};
