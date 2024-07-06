import * as React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ui-components/tooltip";
import { Button } from "@ui-components/button";
import { Bell, Coins, Computer, Flag, Lock, LogIn, LogOut, Moon, Receipt, RussianRuble, Search, Sun, User, Wallet, X } from "lucide-react";
import { StandardAvatar } from "@ui-components/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@ui-components/dropdown-menu";
import { Separator } from "@ui-components/separator";
import { nFormatter } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { Logotype, LogotypeProps } from "./ui/logotype";
import { DialogClose } from "@radix-ui/react-dialog";

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

const HeaderSearch: React.FC<{ search: (text: string) => void; appName?: string }> = ({ search, appName }) => {
    const { register, handleSubmit } = useForm<{ search: string }>();

    return (
        <>
            <Dialog>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <DialogTrigger asChild>
                            <Button type="submit" size={"icon"} className="sm:ms-w-52 sm:ms-px-3 sm:ms-py-2 sm:ms-justify-start" variant={"outline"}>
                                <Search className="ms-h-[1.2rem] ms-w-[1.2rem] sm:ms-mr-3" />
                                <span className="ms-text-muted-foreground ms-hidden sm:ms-inline">Поиск</span>
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
                        <DialogDescription>Найти сущность на {appName || "НБМ"}</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <form onSubmit={handleSubmit(({ search: text }) => search(text))} className="ms-flex-row ms-flex ms-w-full ms-items-center ms-gap-1">
                            <Input {...register("search")} placeholder="Поиск" />
                            <DialogClose asChild>
                                <Button type="submit" variant={"secondary"}>
                                    <Search className="ms-h-4 ms-w-4 ms-mr-2" />
                                    Найти
                                </Button>
                            </DialogClose>
                        </form>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

const ThemeSwitcher: React.FC<{ themeSwitch: (theme: 'light' | 'dark' | 'system') => void }> = ({ themeSwitch }) => {
    return (
        <DropdownMenu>
            <Tooltip>
                <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="ms-h-[1.2rem] ms-w-[1.2rem] ms-rotate-0 ms-scale-100 ms-transition-all dark:ms--rotate-90 dark:ms-scale-0" />
                            <Moon className="ms-absolute ms-h-[1.2rem] ms-w-[1.2rem] ms-rotate-90 ms-scale-0 ms-transition-all dark:ms-rotate-0 dark:ms-scale-100" />
                            <span className="ms-sr-only">Тема</span>
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
                <DropdownMenuItem onClick={() => themeSwitch?.('light')}>
                    <Sun className="ms-h-4 ms-w-4 ms-rotate-0 ms-scale-100 ms-transition-all ms-mr-2" />
                    Светлая
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => themeSwitch?.('dark')}>
                    <Moon className="ms-h-4 ms-w-4 ms-rotate-0 ms-scale-100 ms-transition-all ms-mr-2" />
                    Тёмная
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => themeSwitch?.('system')}>
                    <Computer className="ms-h-4 ms-w-4 ms-rotate-0 ms-scale-100 ms-transition-all ms-mr-2" />
                    Системная
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

const NotificationDialog: React.FC<{ unReadNotify?: boolean; Notifications?: React.FC }> = ({ Notifications, unReadNotify }) => {
    return (
        <Dialog>
            <Tooltip>
                <TooltipTrigger asChild>
                    <DialogTrigger asChild>
                        <Button variant="outline" className={unReadNotify ? "ms-relative after:ms-animate-bounce after:-ms-right-1 after:-ms-bottom-1 after:ms-border-2 after:ms-border-background after:ms-absolute after:ms-rounded-full after:ms-h-3 after:ms-aspect-square after:ms-bg-primary" : undefined} size={"icon"}>
                            <Bell className="ms-h-[1.2rem] ms-w-[1.2rem]" />
                        </Button>
                    </DialogTrigger>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{unReadNotify ? "Непрочитанные уведомления!" : "Уведомления"}</p>
                </TooltipContent>
            </Tooltip>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <p className="ms-flex ms-flex-row ms-gap-2 ms-items-center ms-justify-center sm:ms-justify-start">
                            <div className={unReadNotify ? "ms-relative after:ms-animate-bounce after:-ms-left-1 after:-ms-top-1 after:ms-border-2 after:ms-border-background after:ms-absolute after:ms-rounded-full after:ms-h-3 after:ms-aspect-square after:ms-bg-primary" : undefined}>
                                <Bell className={"ms-h-4 ms-w-4 ms-relative"} />
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
    )
}

const BalanceMenu: React.FC<Balance> = (balance) => {
    return (
        <DropdownMenu>
            <Tooltip>
                <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                        <Button variant={"outline"} className="ms-flex ms-items-center">
                            <Wallet className="ms-w-4 ms-h-4 ms-mr-2" />
                            <p className="ms-whitespace-nowrap ms-flex ms-items-center ms-gap-0.5 ms-w-8 ms-max-w-full">
                                <span className="ms-text-ellipsis ms-overflow-hidden">
                                    {balance?.balance && (nFormatter(balance.balance))}
                                </span>
                                <img src={balance.currencyImageSrc} alt={balance.currencyId} className="dark:ms-invert ms-brightness-0 ms-w-3 ms-h-3" />
                            </p>
                        </Button>
                    </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Баланс</p>
                </TooltipContent>
            </Tooltip>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    Баланс
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={balance?.transaction}>
                    <Coins className="ms-mr-2 ms-h-4 ms-w-4" />
                    Перевести
                </DropdownMenuItem>
                <DropdownMenuItem onClick={balance?.openTransactions}>
                    <Receipt className="ms-mr-2 ms-h-4 ms-w-4" />
                    Транзакции
                </DropdownMenuItem>
                <DropdownMenuItem onClick={balance?.buy}>
                    <RussianRuble className="ms-mr-2 ms-h-4 ms-w-4" />
                    Купить
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

const AuthMenu: React.FC<{ user: UserAccount; userActions: UserAccountActions; sanctumShow?: boolean }> = ({ user, userActions, sanctumShow }) => {
    return (
        <DropdownMenu>
            <Tooltip>
                <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                        <Button variant={"outline"} size={"none"} className="ms-p-0 ms-h-10 ms-overflow-hidden hover:ms-opacity-70 hover:md:ms-opacity-100 md:ms-p-1.5 md:ms-px-2 ms-items-center ms-gap-1" >
                            <StandardAvatar className="ms-h-10 md:ms-w-7 ms-w-10 md:ms-h-7 ms-rounded-none md:ms-rounded-full" src={user.avatarSrc} fallback={user.displayName} />
                            <p className="ms-hidden md:ms-block ms-text-xs ms-text-ellipsis ms-overflow-hidden ms-whitespace-nowrap ms-w-20 ms-max-w-full">{user.displayName}</p>
                        </Button>
                    </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Профиль</p>
                </TooltipContent>
            </Tooltip>
            <DropdownMenuContent>
                <DropdownMenuLabel className="ms-rounded-xl ms-flex ms-justify-center md:ms-rounded ms-p-2 ms-m-2 md:ms-m-0" style={{ background: `url("${user.backgroundSrc}")`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="ms-flex ms-text-center ms-aspect-square md:ms-aspect-auto md:ms-text-left ms-flex-col md:ms-flex-row ms-bg-background/75 ms-backdrop-blur ms-p-3 ms-rounded-xl md:ms-rounded ms-gap-2 ms-items-center ms-justify-center">
                        <StandardAvatar src={user.avatarSrc} fallback={user.displayName} className="ms-h-16 ms-w-16 md:ms-h-10 md:ms-w-10" />
                        <Separator className="ms-w-12 md:ms-w-px md:ms-h-12" />
                        <div className="ms-flex ms-flex-col">
                            <p className="ms-font-vksans ms-font-semibold">{user.displayName}</p>
                            <p className="ms-text-xs ms-text-muted-foreground">@{user.tag}</p>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={userActions?.open}>
                    <User className="ms-mr-2 ms-h-4 ms-w-4" />
                    Профиль
                </DropdownMenuItem>
                {sanctumShow && <DropdownMenuItem onClick={userActions?.openMeduzaSanctum}>
                    <Lock className="ms-mr-2 ms-h-4 ms-w-4" />
                    Аккаунт НБМ<sup className="text-muted-foreground">Sanctum</sup>
                </DropdownMenuItem>}
                <DropdownMenuItem onClick={userActions?.goverment}>
                    <Flag className="ms-mr-2 ms-h-4 ms-w-4" />
                    Государство
                </DropdownMenuItem>
                <DropdownMenuItem onClick={userActions?.logOut} className="ms-text-red-500 focus:ms-text-red-500">
                    <LogOut className="ms-mr-2 ms-h-4 ms-w-4" />
                    Выйти
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export const Header: React.FC<React.PropsWithChildren<HeaderProps>> = ({ returnToBank, children, search, unReadNotify = false, sanctumShow, logo, Notifications, user, login, userActions, themeSwitch, useTooltipProvider = true, balance, homePage }) => {
    const Component = <div className="ms-w-full ms-top-0 ms-left-0 ms-h-14 ms-fixed ms-z-50">
        <div className="ms-flex ms-bg-background/90 ms-rounded-b-md ms-backdrop-blur-sm ms-shadow-md ms-flex-row ms-border ms-border-t-0 ms-justify-between ms-h-full ms-gap-1 ms-p-2 ms-container">
            <div className="ms-flex ms-flex-row ms-items-center ms-gap-1">
                {returnToBank && <Tooltip>
                    <TooltipTrigger asChild>
                        <Button onClick={returnToBank} size={"icon"} variant={"ghost"}>
                            <X className="ms-h-[1.2rem] ms-w-[1.2rem]" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Вернуться в НБМ</p>
                    </TooltipContent>
                </Tooltip>}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant={"ghost"} onClick={homePage} className="ms-px-1.5">
                            <Logotype
                                {...logo}
                            />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Главная страница</p>
                    </TooltipContent>
                </Tooltip>
                {search && <HeaderSearch search={search} appName={logo?.appName} />}
            </div>
            <div className="ms-flex-1">
                {children}
            </div>
            <div className="ms-flex ms-flex-row ms-items-center ms-gap-1">
                {themeSwitch && <ThemeSwitcher themeSwitch={themeSwitch} />}
                {user && <>
                    <NotificationDialog Notifications={Notifications} unReadNotify={unReadNotify} />
                    {balance && <BalanceMenu {...balance} />}
                    <AuthMenu user={user} userActions={userActions || {}} sanctumShow={sanctumShow} />
                </>}
                {(!user && login) && <Button onClick={login} variant={"outline"}>
                    <LogIn className="ms-mr-2 ms-h-4 ms-w-4" />
                    Войти
                </Button>}
            </div>
        </div>
    </div>;

    if (useTooltipProvider)
        return (
            <TooltipProvider>
                {Component}
            </TooltipProvider>
        );
    return Component;
};