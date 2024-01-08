import { Dispatch, PropsWithChildren, ReactElement, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import React from "react";
import { Check, ChevronsUpDown, LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { CommandItem, CommandEmpty, CommandInput, CommandList, Command, CommandGroup } from "./ui/command";
import { cn } from "@/lib/utils";

type ValueType = { value: string; label: ReactNode; } | null;

const ComboBoxContext = createContext<{ value: ValueType; setValue: Dispatch<SetStateAction<ValueType>>; open: boolean; setOpen: Dispatch<SetStateAction<boolean>> } | null>(null);

export const ComboBox: React.FC<PropsWithChildren<
    {
        Icon?: LucideIcon, placeholder: string, empty?: ReactElement | string, value?: ValueType; setValue?: Dispatch<SetStateAction<ValueType>>;
        onOpenChange?: Dispatch<SetStateAction<boolean>>; open?: boolean;
    }
>> = ({ Icon, placeholder, children, empty, value: defaultValue, setValue: defaultSetValue, open: defaultOpen, onOpenChange }) => {
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
                <PopoverTrigger>
                    <Button
                        variant="outline"
                        className="ms-justify-between"
                    >
                        {Icon && <Icon className="ms-mr-2 ms-h-4 ms-w-4 ms-shrink-0 ms-opacity-50" />}
                        <span>{placeholder}</span>
                        <ChevronsUpDown className="ms-ml-2 ms-h-4 ms-w-4 ms-shrink-0 ms-opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="ms-p-0">
                    <Command className="md:ms-mt-4 md:ms-border-t">
                        {empty && <CommandEmpty>{empty}</CommandEmpty>}
                        <CommandInput placeholder={placeholder} />
                        <CommandList>
                            {children}
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </ComboBoxContext.Provider>
    )
};

const useComboBox = () => {
    const value = useContext(ComboBoxContext);

    if (!value)
        throw new Error("useComboBox avaible only on </ComboBoxContext.Provider>");

    return value;
};

export const ComboBoxItem: React.FC<PropsWithChildren<{ value: string; }>> = ({ value, children }) => {
    const { setOpen, setValue, value: contextValue } = useComboBox();
    return (
        <CommandItem
            key={value}
            value={value}
            onSelect={(currentValue) => {
                setValue(currentValue === contextValue?.value ? null : { value: currentValue, label: children })
                setOpen(false)
            }}
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
}

export const ComboBoxGroup = CommandGroup;
ComboBoxGroup.displayName = "ComboBoxGroup";