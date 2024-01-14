import { Dispatch, PropsWithChildren, ReactElement, ReactNode, SetStateAction, createContext, forwardRef, useContext, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import React from "react";
import { Check, ChevronsUpDown, LucideIcon } from "lucide-react";
import { Button, ButtonProps } from "./ui/button";
import { CommandItem, CommandEmpty, CommandInput, CommandList, Command, CommandGroup } from "./ui/command";
import { cn } from "@/lib/utils";
import { CommandLoading } from "cmdk";

type ValueType = { value: string; label: ReactNode; } | null;

const ComboBoxContext = createContext<{ value: ValueType; setValue: Dispatch<SetStateAction<ValueType>>; open: boolean; setOpen: Dispatch<SetStateAction<boolean>> } | null>(null);

export const ComboBox = forwardRef<HTMLDivElement, PropsWithChildren<
    {
        Icon?: LucideIcon, placeholder: string, empty?: ReactElement | string, loadingElement?: ReactElement | string, value?: ValueType; setValue?: Dispatch<SetStateAction<ValueType>>;
        onOpenChange?: Dispatch<SetStateAction<boolean>>; open?: boolean; onValueChange?: (search: string) => void; name?: string;
        loading?: boolean;
    } & ButtonProps & React.RefAttributes<HTMLButtonElement>
>>(({
    Icon, placeholder, empty, value: defaultValue, setValue: defaultSetValue,
    open: defaultOpen, onOpenChange, onValueChange, name, loading, loadingElement,
    children, ...props
}, ref) => {
    const [value, setValue] = useState<ValueType>(defaultValue || null);
    const [open, setOpen] = useState(defaultOpen || false);

    return (
        <ComboBoxContext.Provider value={
            {
                value: defaultSetValue && defaultValue ? defaultValue : value,
                setValue: defaultSetValue && defaultValue ? defaultSetValue : setValue,
                open: onOpenChange && defaultOpen ? defaultOpen : open,
                setOpen: onOpenChange && defaultOpen ? onOpenChange : setOpen,
            }
        }>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className="ms-justify-between"
                        role="combobox"
                        aria-expanded={open}
                        {...props}
                    >
                        {Icon && <Icon className="ms-mr-2 ms-h-4 ms-w-4 ms-shrink-0 ms-opacity-50" />}
                        {value ? <span>{value.label}</span> : <span className="ms-text-muted-foreground ms-overflow-hidden ms-text-ellipsis">{placeholder}</span>}
                        <ChevronsUpDown className="ms-ml-2 ms-h-4 ms-w-4 ms-shrink-0 ms-opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="ms-p-0">
                    <Command className="ms-mt-4 md:ms-mt-0 ms-border-t md:ms-border-t-none">
                        <CommandInput onValueChange={onValueChange} placeholder={placeholder} />
                        <CommandList ref={ref}>
                            {empty && <CommandEmpty>{empty}</CommandEmpty>}
                            {loading && <CommandLoading>{loadingElement}</CommandLoading>}
                            {children}
                        </CommandList>
                    </Command>
                </PopoverContent>
                <input type="hidden" name={name} value={value?.value || undefined} />
            </Popover>
        </ComboBoxContext.Provider>
    )
});

const useComboBox = () => {
    const value = useContext(ComboBoxContext);

    if (!value)
        throw new Error("useComboBox avaible only on </ComboBoxContext.Provider>");

    return value;
};

export const ComboBoxItem = forwardRef<React.ElementRef<typeof CommandItem>, React.ComponentPropsWithoutRef<typeof CommandItem>>(({ value, children, ...props }, ref) => {
    const { setOpen, setValue, value: contextValue } = useComboBox();
    return (
        <CommandItem
            value={value}
            onSelect={(currentValue) => {
                setValue(currentValue === contextValue?.value ? null : { value: currentValue, label: children })
                setOpen(false)
            }}
            ref={ref}
            {...props}
        >
            <Check
                className={cn(
                    "ms-mr-2 ms-h-4 ms-w-4",
                    value === contextValue?.value ? "ms-opacity-100" : "ms-opacity-0"
                )}
            />
            {children}
        </CommandItem>
    )
})

export const ComboBoxGroup = CommandGroup;
ComboBoxGroup.displayName = "ComboBoxGroup";