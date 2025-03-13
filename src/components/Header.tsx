import { nFormatter, useMediaQuery } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import { StandardAvatar } from "@ui-components/avatar";
import { Button } from "@ui-components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ui-components/dropdown-menu";
import { Separator } from "@ui-components/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ui-components/tooltip";
import {
  Bell,
  Coins,
  Computer,
  Flag,
  Lock,
  LogIn,
  LogOut,
  Moon,
  Receipt,
  RussianRuble,
  Search,
  Sun,
  User,
  Wallet,
  X,
} from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Logotype, LogotypeProps } from "./ui/logotype";

interface UserAccount {
  displayName: string;
  avatarSrc?: string;
  tag: string;
  backgroundSrc?: string;
}
interface UserAccountActions {
  openMeduzaSanctum?: () => void;
  open?: () => void;
  logOut?: () => void;
  goverment?: () => void;
}
interface Balance {
  balance: number;
  unReadTransaction?: boolean;
  currencyImageSrc?: string;
  currencyId?: string;
  openTransactions?: () => void;
  buy?: () => void;
  transaction?: () => void;
}

interface HeaderProps {
  returnToBank?: () => void;
  user?: UserAccount;
  userActions?: UserAccountActions;
  login?: () => void;
  themeSwitch?: (theme: "system" | "dark" | "light") => void;
  useTooltipProvider?: boolean;
  balance?: Balance;
  sanctumShow?: boolean;
  search?: (text: string) => void;
  Notifications?: React.FC;
  unReadNotify?: boolean;
  logo?: Omit<LogotypeProps, "isButton">;
  homePage?: () => void;
}

const HeaderSearch: React.FC<{
  search: (text: string) => void;
  appName?: string;
}> = ({ search, appName }) => {
  const { register, handleSubmit } = useForm<{ search: string }>();

  return (
    <>
      <Dialog>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button
                type="submit"
                size={"icon"}
                className="ms:sm:w-52 ms:sm:px-3 ms:sm:py-2 ms:sm:justify-start"
                variant={"outline"}
              >
                <Search className="ms:h-[1.2rem] ms:w-[1.2rem] ms:sm:mr-3" />
                <span className="ms:text-muted-foreground ms:hidden ms:sm:inline">
                  Поиск
                </span>
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Найти</p>
          </TooltipContent>
        </Tooltip>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Поиск</DialogTitle>
            <DialogDescription>
              Найти сущность на {appName || "НБМ"}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <form
              onSubmit={handleSubmit(({ search: text }) => search(text))}
              className="ms:flex-row ms:flex ms:w-full ms:items-center ms:gap-1"
            >
              <Input {...register("search")} placeholder="Поиск" />
              <DialogClose asChild>
                <Button type="submit" variant={"secondary"}>
                  <Search className="ms:h-4 ms:w-4 ms:mr-2" />
                  Найти
                </Button>
              </DialogClose>
            </form>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

const ThemeSwitcher: React.FC<{
  themeSwitch: (theme: "light" | "dark" | "system") => void;
}> = ({ themeSwitch }) => {
  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="ms:h-[1.2rem] ms:w-[1.2rem] ms:rotate-0 ms:scale-100 ms:transition-all ms:dark:-rotate-90 ms:dark:scale-0" />
              <Moon className="ms:absolute ms:h-[1.2rem] ms:w-[1.2rem] ms:rotate-90 ms:scale-0 ms:transition-all ms:dark:rotate-0 ms:dark:scale-100" />
              <span className="ms:sr-only">Тема</span>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Тема</p>
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent>
        <DropdownMenuLabel>Тема</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => themeSwitch?.("light")}>
          <Sun className="ms:h-4 ms:w-4 ms:rotate-0 ms:scale-100 ms:transition-all ms:mr-2" />
          Светлая
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => themeSwitch?.("dark")}>
          <Moon className="ms:h-4 ms:w-4 ms:rotate-0 ms:scale-100 ms:transition-all ms:mr-2" />
          Тёмная
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => themeSwitch?.("system")}>
          <Computer className="ms:h-4 ms:w-4 ms:rotate-0 ms:scale-100 ms:transition-all ms:mr-2" />
          Системная
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const NotificationDialog: React.FC<{
  unReadNotify?: boolean;
  Notifications?: React.FC;
  isDropdownItem?: boolean;
}> = ({ Notifications, unReadNotify, isDropdownItem }) => {
  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            {!isDropdownItem ? (
              <Button
                variant="outline"
                className={
                  unReadNotify
                    ? "ms:relative ms:after:animate-bounce ms:after:-right-1 ms:after:-bottom-1 ms:after:border-2 ms:after:border-background ms:after:absolute ms:after:rounded-full ms:after:h-3 ms:after:aspect-square ms:after:bg-primary"
                    : undefined
                }
                size={"icon"}
              >
                <Bell className="ms:h-[1.2rem] ms:w-[1.2rem]" />
              </Button>
            ) : (
              <DropdownMenuItem
                className={
                  unReadNotify
                    ? "ms:relative ms:after:animate-bounce ms:after:-left-1 ms:after:-top-1 ms:after:border-2 ms:after:border-background ms:after:absolute ms:after:rounded-full ms:after:h-3 ms:after:aspect-square ms:after:bg-primary"
                    : undefined
                }
              >
                <Bell className="ms:mr-2 ms:h-4 ms:w-4" />
                Уведомления
              </DropdownMenuItem>
            )}
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>{unReadNotify ? "Непрочитанные уведомления!" : "Уведомления"}</p>
        </TooltipContent>
      </Tooltip>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <p className="ms:flex ms:flex-row ms:gap-2 ms:items-center ms:justify-center ms:sm:justify-start">
              <div
                className={
                  unReadNotify
                    ? "ms:relative ms:after:animate-bounce ms:after:-left-1 ms:after:-top-1 ms:after:border-2 ms:after:border-background ms:after:absolute ms:after:rounded-full ms:after:h-3 ms:after:aspect-square ms:after:bg-primary"
                    : undefined
                }
              >
                <Bell className={"ms:h-4 ms:w-4 ms:relative"} />
              </div>
              Уведомления
            </p>
          </DialogTitle>
          <DialogDescription>
            Здесь будут последние события, связанные с Вашим аккаунтом
          </DialogDescription>
        </DialogHeader>
        {Notifications && <Notifications />}
      </DialogContent>
    </Dialog>
  );
};

const BalanceMenu: React.FC<Balance> = balance => {
  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"outline"}
              className="ms:flex ms:justify-between ms:items-center"
            >
              <Wallet className="ms:w-4 ms:h-4 ms:mr-2" />
              <p className="ms:whitespace-nowrap ms:justify-end ms:flex ms:items-center ms:gap-0.5 ms:w-14 ms:max-w-full">
                <span className="ms:text-ellipsis ms:overflow-hidden">
                  {balance?.balance && nFormatter(balance.balance)}
                </span>
                {(balance.currencyImageSrc || balance.currencyId) && (
                  <img
                    src={balance.currencyImageSrc}
                    alt={balance.currencyId}
                    className="ms:dark:invert ms:brightness-0 ms:w-3 ms:h-3"
                  />
                )}
              </p>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Баланс</p>
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent>
        <DropdownMenuLabel>Баланс</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={balance?.transaction}>
          <Coins className="ms:mr-2 ms:h-4 ms:w-4" />
          Перевести
        </DropdownMenuItem>
        <DropdownMenuItem onClick={balance?.openTransactions}>
          <Receipt className="ms:mr-2 ms:h-4 ms:w-4" />
          Транзакции
        </DropdownMenuItem>
        <DropdownMenuItem onClick={balance?.buy}>
          <RussianRuble className="ms:mr-2 ms:h-4 ms:w-4" />
          Купить
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const AuthMenu: React.FC<{
  user: UserAccount;
  userActions: UserAccountActions;
  sanctumShow?: boolean;
  balance?: Balance;
  Notifications?: React.FC;
  unReadNotify?: boolean;
}> = ({
  user,
  userActions,
  sanctumShow,
  balance,
  Notifications,
  unReadNotify,
}) => {
    return (
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"outline"}
                size={"none"}
                className="ms:p-0 ms:h-10 ms:overflow-hidden ms:hover:opacity-70 ms:hover:md:opacity-100 ms:md:p-1.5 ms:md:px-2 ms:items-center ms:gap-1"
              >
                <StandardAvatar
                  className="ms:h-10 ms:md:w-7 ms:w-10 ms:md:h-7 ms:rounded-none ms:md:rounded-full"
                  src={user.avatarSrc}
                  fallback={user.displayName}
                />
                <p className="ms:hidden ms:md:block ms:text-xs ms:text-ellipsis ms:overflow-hidden ms:whitespace-nowrap ms:w-20 ms:max-w-full">
                  {user.displayName}
                </p>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Профиль</p>
          </TooltipContent>
        </Tooltip>
        <DropdownMenuContent>
          <DropdownMenuLabel
            className="ms:rounded-xl ms:flex ms:justify-center ms:md:rounded ms:p-2 ms:m-2 ms:md:m-0"
            style={{
              background: `url("${user.backgroundSrc}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="ms:flex ms:text-center ms:aspect-square ms:md:aspect-auto ms:md:text-left ms:flex-col ms:md:flex-row ms:bg-background/75 ms:backdrop-blur ms:p-3 ms:rounded-xl ms:md:rounded ms:gap-2 ms:items-center ms:justify-center">
              <StandardAvatar
                src={user.avatarSrc}
                fallback={user.displayName}
                className="ms:h-16 ms:w-16 ms:md:h-10 ms:md:w-10"
              />
              <Separator className="ms:w-12 ms:md:w-px ms:md:h-12" />
              <div className="ms:flex ms:flex-col">
                <p className="ms:font-vksans ms:font-semibold">
                  {user.displayName}
                </p>
                <p className="ms:text-xs ms:text-muted-foreground">@{user.tag}</p>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={userActions?.open}>
            <User className="ms:mr-2 ms:h-4 ms:w-4" />
            Профиль
          </DropdownMenuItem>
          {sanctumShow && (
            <DropdownMenuItem onClick={userActions?.openMeduzaSanctum}>
              <Lock className="ms:mr-2 ms:h-4 ms:w-4" />
              Аккаунт НБМ<sup className="text-muted-foreground">Sanctum</sup>
            </DropdownMenuItem>
          )}
          <DropdownMenuItem onClick={userActions?.goverment}>
            <Flag className="ms:mr-2 ms:h-4 ms:w-4" />
            Государство
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {balance && (
            <>
              <DropdownMenuLabel>
                <div className="ms:flex ms:font-light ms:text-sm ms:justify-between ms:gap-2 ms:items-center">
                  <p className="ms:flex ms:items-center">
                    <Wallet className="ms:w-4 ms:h-4 ms:mr-2" />
                    <span className="ms:text-ellipsis ms:overflow-hidden">
                      Баланс
                    </span>
                  </p>
                  <p className="ms:whitespace-nowrap ms:justify-end ms:flex ms:items-center ms:gap-0.5 ms:max-w-full">
                    <span className="ms:text-ellipsis ms:overflow-hidden">
                      {balance?.balance && nFormatter(balance.balance)}
                    </span>
                    {(balance.currencyImageSrc || balance.currencyId) && (
                      <img
                        src={balance.currencyImageSrc}
                        alt={balance.currencyId}
                        className="ms:dark:invert ms:brightness-0 ms:w-4 ms:h-4"
                      />
                    )}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuItem onClick={balance?.transaction}>
                <Coins className="ms:mr-2 ms:h-4 ms:w-4" />
                Перевести
              </DropdownMenuItem>
              <DropdownMenuItem onClick={balance?.openTransactions}>
                <Receipt className="ms:mr-2 ms:h-4 ms:w-4" />
                Транзакции
              </DropdownMenuItem>
              <DropdownMenuItem onClick={balance?.buy}>
                <RussianRuble className="ms:mr-2 ms:h-4 ms:w-4" />
                Купить
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          )}
          {Notifications && (
            <>
              <NotificationDialog
                Notifications={Notifications}
                unReadNotify={unReadNotify}
              />
              <DropdownMenuSeparator />
            </>
          )}
          <DropdownMenuItem
            onClick={userActions?.logOut}
            className="ms:text-destructive ms:focus:text-destructive"
          >
            <LogOut className="ms:mr-2 ms:h-4 ms:w-4" />
            Выйти
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

const ReturnToCoreAppButton: React.FC<{ returnToBank: React.MouseEventHandler; coreAppName?: string; }> = ({ returnToBank, coreAppName = "НБМ" }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button onClick={returnToBank} size={"icon"} variant={"ghost"}>
          <X className="ms:h-[1.2rem] ms:w-[1.2rem]" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Вернуться в {coreAppName}</p>
      </TooltipContent>
    </Tooltip>
  )
}

const HomePageButton: React.FC<{ logo?: Omit<LogotypeProps, "isButton">, homePage?: React.MouseEventHandler }> = ({ homePage, logo }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant={"ghost"}
          onClick={homePage}
          className="ms:px-1.5"
        >
          <Logotype {...logo} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Главная страница</p>
      </TooltipContent>
    </Tooltip>
  )
}

const Section: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="ms:flex ms:flex-row ms:items-center ms:gap-1">{children}</div>
  )
}
const LoginButton: React.FC<{ login: React.MouseEventHandler; }> = ({ login }) => {
  return (
    <Button onClick={login} variant={"outline"}>
      <LogIn className="ms:mr-2 ms:h-4 ms:w-4" />
      Войти
    </Button>
  )
}

export const Header: React.FC<React.PropsWithChildren<HeaderProps>> = ({
  returnToBank,
  children,
  search,
  unReadNotify = false,
  sanctumShow,
  logo,
  Notifications,
  user,
  login,
  userActions,
  themeSwitch,
  useTooltipProvider = true,
  balance,
  homePage,
}) => {
  const isMobile = useMediaQuery("(max-width: 470px)");

  const Component = (
    <div className="ms:w-full ms:top-0 ms:left-0 ms:h-14 ms:border-b ms:border-border/60 ms:backdrop-blur ms:shadow-sm ms:fixed ms:z-50 ms:bg-background/90">
      <div className="ms:flex ms:flex-row ms:justify-between ms:h-full ms:gap-1 ms:p-2 ms:container">
        <Section>
          {returnToBank && (
            <ReturnToCoreAppButton returnToBank={returnToBank} />
          )}
          <HomePageButton homePage={homePage} logo={logo} />
          {search && <HeaderSearch search={search} appName={logo?.appName} />}
        </Section>
        <div className="ms:flex-1">{children}</div>
        <Section>
          {themeSwitch && <ThemeSwitcher themeSwitch={themeSwitch} />}
          {user && (
            <>
              {!isMobile && (
                <NotificationDialog
                  Notifications={Notifications}
                  unReadNotify={unReadNotify}
                />
              )}
              {balance && !isMobile && <BalanceMenu {...balance} />}
              <AuthMenu
                user={user}
                userActions={userActions || {}}
                sanctumShow={sanctumShow}
                Notifications={(isMobile && Notifications) || undefined}
                unReadNotify={isMobile && unReadNotify}
                balance={(isMobile && balance) || undefined}
              />
            </>
          )}
          {!user && login && (
            <LoginButton login={login} />
          )}
        </Section>
      </div>
    </div>
  );

  if (useTooltipProvider) return <TooltipProvider>{Component}</TooltipProvider>;
  return Component;
};
