import { Dispatch, PropsWithChildren, ReactElement, ReactNode, SetStateAction, createContext, forwardRef, useContext, useEffect, useId, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import React from "react";
import { Check, ChevronsUpDown, LucideIcon } from "lucide-react";
import { Button, ButtonProps } from "./ui/button";
import { CommandItem, CommandEmpty, CommandInput, CommandList, Command, CommandGroup } from "./ui/command";
import { cn } from "@/lib/utils";
import { CommandLoading } from "cmdk";
import { extractStringFromNode } from "@/lib/extract-string-from-element";

type OptionType = { value: string; label: ReactNode; } | null;

type ChangeHandler = (event: {
    target: any;
    type?: any;
}) => Promise<void | boolean>;

const ComboBoxContext = createContext<{
    value: string | null;
    setValue: Dispatch<SetStateAction<string | null>>;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setOptions: Dispatch<SetStateAction<OptionType[]>>;
    notCloseOnSelect: boolean;
} | null>(null);

export const ComboBox = forwardRef<HTMLInputElement, PropsWithChildren<
    {
        Icon?: LucideIcon, placeholder: string, empty?: ReactElement | string, loadingElement?: ReactElement | string, value?: string; setValue?: Dispatch<SetStateAction<string | null>>;
        onOpenChange?: Dispatch<SetStateAction<boolean>>; open?: boolean; onSearchChange?: (search: string) => void; name?: string; required?: boolean;
        loading?: boolean; defaultValue?: string; notCloseOnSelect?: boolean; onChange?: ChangeHandler; listRef?: React.Ref<HTMLDivElement>;
    } & ButtonProps & React.RefAttributes<HTMLButtonElement>
>>(({
    Icon, placeholder, empty, value: defaultValue, defaultValue: defVal, setValue: defaultSetValue,
    open: defaultOpen, onOpenChange, onSearchChange, name, loading, loadingElement, notCloseOnSelect,
    children, onChange, required, listRef, ...props
}, ref) => {
    const [value, setValue] = useState(defaultValue || defVal || null);
    const [open, setOpen] = useState(defaultOpen || false);
    const [values, setOptions] = useState<OptionType[]>([]);

    useEffect(() => {
        onChange && onChange({ target: { value } });
    }, [onChange, value])

    return (
        <ComboBoxContext.Provider value={
            {
                value: defaultSetValue && defaultValue ? defaultValue : value,
                setValue: defaultSetValue && defaultValue ? defaultSetValue : setValue,
                open: onOpenChange && defaultOpen ? defaultOpen : open,
                setOpen: onOpenChange && defaultOpen ? onOpenChange : setOpen,
                setOptions: setOptions,
                notCloseOnSelect: notCloseOnSelect || false
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
                        {values.find((item) => value === item?.value) ? <span className="ms-overflow-hidden ms-text-ellipsis">{values.find((item) => value === item?.value)?.label}</span> : <span className="ms-text-muted-foreground ms-overflow-hidden ms-text-ellipsis">{placeholder}</span>}
                        <ChevronsUpDown className="ms-ml-2 ms-h-4 ms-w-4 ms-shrink-0 ms-opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="ms-p-0">
                    <Command filter={(optionValue, search) => {
                        const option = values.find((option) => option?.value === optionValue);
                        if (!option) return 0;
                        if (
                            option.value.toLowerCase().includes(search.toLowerCase()) ||
                            extractStringFromNode(option.label).toLowerCase().includes(search.toLowerCase())
                        ) return 1;
                        return 0;
                    }} className="ms-mt-4 md:ms-mt-0 ms-border-t md:ms-border-t-none">
                        <CommandInput onValueChange={onSearchChange} placeholder={placeholder} />
                        <CommandList ref={listRef}>
                            {empty && <CommandEmpty>{empty}</CommandEmpty>}
                            {loading && <CommandLoading>{loadingElement}</CommandLoading>}
                            {children}
                        </CommandList>
                    </Command>
                </PopoverContent>
                <input type="hidden" ref={ref} required={required} name={name} value={value || undefined} />
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
    const { setOpen, setValue, value: contextValue, setOptions } = useComboBox();
    const id = useId()

    useEffect(() => {
        setOptions((options) => [...options, { label: children, value: value || id }]);
    }, []);

    return (
        <CommandItem
            value={value}
            onSelect={(currentValue) => {
                setValue(currentValue === value ? null : currentValue)
                setOpen(false)
            }}
            ref={ref}
            {...props}
        >
            <Check
                className={cn(
                    "ms-mr-2 ms-h-4 ms-w-4",
                    value === contextValue ? "ms-opacity-100" : "ms-opacity-0"
                )}
            />
            {children}
        </CommandItem>
    )
})

export const ComboBoxGroup = CommandGroup;
ComboBoxGroup.displayName = "ComboBoxGroup";