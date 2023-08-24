import * as React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ui-components/tooltip";
import { Button } from "@ui-components/button";
import { Bell, Coins, Computer, Flag, Lock, LogIn, LogOut, Moon, Receipt, RussianRuble, Search, Sun, User, Wallet, X } from "lucide-react";
import { StandardAvatar } from "@ui-components/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@ui-components/dropdown-menu";
import { Separator } from "@ui-components/separator";
import { nFormatter } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { Logotype, LogotypeProps } from "./ui/logotype";

interface UserAccount {
    displayName: string;
    avatarSrc?: string;
    tag: string;
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
            <form onSubmit={handleSubmit(({ search: text }) => search(text))} className="hidden sm:flex flex-row items-center gap-1">
                <Input type="search" {...register("search")} className="w-52 max-w-full" placeholder="Поиск" />
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button type="submit" size={"icon"} variant={"secondary"}>
                            <Search className="h-[1.2rem] w-[1.2rem]" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Найти</p>
                    </TooltipContent>
                </Tooltip>
            </form>
            <Dialog>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <DialogTrigger asChild>
                            <Button className="sm:hidden" type="submit" size={"icon"} variant={"outline"}>
                                <Search className="h-[1.2rem] w-[1.2rem]" />
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
                    <form onSubmit={handleSubmit(({ search: text }) => search(text))} className="flex-row flex items-center gap-1">
                        <Input type="search" {...register("search")} placeholder="Поиск" />
                        <Button type="submit" variant={"secondary"}>
                            <Search className="h-4 w-4 mr-2" />
                            Найти
                        </Button>
                    </form>
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
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Тема</span>
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
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all mr-2" />
                    Светлая
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => themeSwitch?.('dark')}>
                    <Moon className="h-4 w-4 rotate-0 scale-100 transition-all mr-2" />
                    Тёмная
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => themeSwitch?.('system')}>
                    <Computer className="h-4 w-4 rotate-0 scale-100 transition-all mr-2" />
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
                        <Button variant="outline" className={unReadNotify ? "relative after:animate-bounce after:-right-1 after:-bottom-1 after:border-2 after:border-background after:absolute after:rounded-full after:h-3 after:aspect-square after:bg-primary" : undefined} size={"icon"}>
                            <Bell className="h-[1.2rem] w-[1.2rem]" />
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
                        <p className="flex flex-row gap-2 items-center">
                            <div className={unReadNotify ? "relative after:animate-bounce after:-left-1 after:-top-1 after:border-2 after:border-background after:absolute after:rounded-full after:h-3 after:aspect-square after:bg-primary" : undefined}>
                                <Bell className={"h-4 w-4 relative"} />
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
                        <Button variant={"outline"}>
                            <Wallet className="w-4 h-4 mr-2" />
                            <p className="text-ellipsis overflow-hidden whitespace-nowrap w-8 max-w-full">{balance?.balance && nFormatter(balance.balance)}</p>
                            <p className="ml-2">L</p>
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
                    <Coins className="mr-2 h-4 w-4" />
                    Перевести
                </DropdownMenuItem>
                <DropdownMenuItem onClick={balance?.openTransactions}>
                    <Receipt className="mr-2 h-4 w-4" />
                    Транзакции
                </DropdownMenuItem>
                <DropdownMenuItem onClick={balance?.buy}>
                    <RussianRuble className="mr-2 h-4 w-4" />
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
                        <Button variant={"outline"} className="p-1.5 px-2 flex items-center gap-1" >
                            <StandardAvatar className="h-7 w-7" src={user.avatarSrc} fallback={user.displayName} />
                            <p className="hidden md:block text-xs text-ellipsis overflow-hidden whitespace-nowrap w-20 max-w-full">{user.displayName}</p>
                        </Button>
                    </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Профиль</p>
                </TooltipContent>
            </Tooltip>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    <div className="flex gap-2 h-12 items-center">
                        <StandardAvatar src={user.avatarSrc} fallback={user.displayName} />
                        <Separator orientation="vertical" />
                        <div className="flex flex-col gap-[2px]">
                            <p>{user.displayName}</p>
                            <p className="text-xs text-muted-foreground">@{user.tag}</p>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={userActions?.open}>
                    <User className="mr-2 h-4 w-4" />
                    Профиль
                </DropdownMenuItem>
                {sanctumShow && <DropdownMenuItem onClick={userActions?.openMeduzaSanctum}>
                    <Lock className="mr-2 h-4 w-4" />
                    Аккаунт НБМ<sup className="text-muted-foreground">Sanctum</sup>
                </DropdownMenuItem>}
                <DropdownMenuItem onClick={userActions?.goverment}>
                    <Flag className="mr-2 h-4 w-4" />
                    Государство
                </DropdownMenuItem>
                <DropdownMenuItem onClick={userActions?.logOut} className="text-red-500 focus:text-red-500">
                    <LogOut className="mr-2 h-4 w-4" />
                    Выйти
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export const Header: React.FC<HeaderProps> = ({ returnToBank, search, unReadNotify = false, sanctumShow, logo, Notifications, user, login, userActions, themeSwitch, useTooltipProvider = true, balance, homePage }) => {
    const Component = <div className="w-full top-0 left-0 h-14 fixed z-50">
        <div className="flex bg-background/90 rounded-b-md backdrop-blur-sm shadow-md flex-row border border-t-0 justify-between h-full gap-1 p-2 container">
            <div className="flex flex-row items-center gap-1">
                {returnToBank && <Tooltip>
                    <TooltipTrigger asChild>
                        <Button onClick={returnToBank} size={"icon"} variant={"ghost"}>
                            <X className="h-[1.2rem] w-[1.2rem]" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Вернуться в НБМ</p>
                    </TooltipContent>
                </Tooltip>}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant={"ghost"} onClick={homePage} className="px-1.5">
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
            <div className="flex flex-row items-center gap-1">
                {themeSwitch && <ThemeSwitcher themeSwitch={themeSwitch} />}
                {user && <>
                    <NotificationDialog Notifications={Notifications} unReadNotify={unReadNotify} />
                    {balance && <BalanceMenu {...balance} />}
                    <AuthMenu user={user} userActions={userActions || {}} sanctumShow={sanctumShow} />
                </>}
                {(!user && login) && <Button onClick={login} variant={"outline"}>
                    <LogIn className="mr-2 h-4 w-4" />
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