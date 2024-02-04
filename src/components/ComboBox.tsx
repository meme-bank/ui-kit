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
    value: string | string[] | null;
    setValue: Dispatch<SetStateAction<string | null>> | Dispatch<SetStateAction<string[]>>;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setOptions: Dispatch<SetStateAction<OptionType[]>>;
    notCloseOnSelect: boolean;
    multiselect: boolean;
} | null>(null);

export const ComboBox = forwardRef<HTMLInputElement, PropsWithChildren<
    {
        Icon?: LucideIcon, placeholder: string, empty?: ReactNode, loadingElement?: ReactNode, value?: string; setValue?: Dispatch<SetStateAction<string | null>>;
        onOpenChange?: Dispatch<SetStateAction<boolean>>; open?: boolean; onSearchChange?: (search: string) => void; name?: string; required?: boolean;
        loading?: boolean; defaultValue?: string; notCloseOnSelect?: boolean; listRef?: React.Ref<HTMLDivElement>;
        onChange?: React.ChangeEventHandler<HTMLInputElement>
    } & Omit<ButtonProps, "onChange"> & React.RefAttributes<HTMLButtonElement>
>>(({
    Icon, placeholder, empty, value: defaultValue, defaultValue: defVal, setValue: defaultSetValue,
    open: defaultOpen, onOpenChange, onSearchChange, name, loading, loadingElement, notCloseOnSelect,
    children, onChange, required, listRef, ...props
}, ref) => {
    const [value, setValue] = useState(defaultValue || defVal || null);
    const [open, setOpen] = useState(defaultOpen || false);
    const [options, setOptions] = useState<OptionType[]>([]);

    let currentOption = options.find((option) => value === option?.value);

    return (
        <ComboBoxContext.Provider value={
            {
                value: defaultSetValue && defaultValue ? defaultValue : value,
                setValue: defaultSetValue && defaultValue ? defaultSetValue : setValue,
                open: onOpenChange && defaultOpen ? defaultOpen : open,
                setOpen: onOpenChange && defaultOpen ? onOpenChange : setOpen,
                setOptions: setOptions,
                notCloseOnSelect: notCloseOnSelect || false,
                multiselect: false
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
                        {currentOption ? <span className="ms-overflow-hidden ms-text-ellipsis">{currentOption.label}</span> : <span className="ms-text-muted-foreground ms-overflow-hidden ms-text-ellipsis">{placeholder}</span>}
                        <ChevronsUpDown className="ms-ml-2 ms-h-4 ms-w-4 ms-shrink-0 ms-opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="ms-p-0">
                    <Command filter={(optionValue, search) => {
                        const option = options.find((option) => option?.value === optionValue);
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
                <input type="hidden" onChange={onChange} ref={ref} required={required} name={name} value={value || undefined} />
            </Popover>
        </ComboBoxContext.Provider>
    )
});

export const MultiselectComboBox = forwardRef<HTMLInputElement, PropsWithChildren<
    {
        Icon?: LucideIcon, placeholder: string, empty?: ReactNode, loadingElement?: ReactNode, value?: string[]; setValue?: Dispatch<SetStateAction<string[]>>;
        onOpenChange?: Dispatch<SetStateAction<boolean>>; open?: boolean; onSearchChange?: (search: string) => void; name?: string; required?: boolean;
        loading?: boolean; defaultValue?: string[]; notCloseOnSelect?: boolean; listRef?: React.Ref<HTMLDivElement>;
        onChange?: React.ChangeEventHandler<HTMLInputElement>
    } & Omit<ButtonProps, "onChange"> & React.RefAttributes<HTMLButtonElement>
>>(({
    Icon, placeholder, empty, value: defaultValue, defaultValue: defVal, setValue: defaultSetValue,
    open: defaultOpen, onOpenChange, onSearchChange, name, loading, loadingElement, notCloseOnSelect,
    children, onChange, required, listRef, ...props
}, ref) => {
    const [values, setValues] = useState<string[]>(defaultValue || defVal || []);
    const [open, setOpen] = useState(defaultOpen || false);
    const [options, setOptions] = useState<OptionType[]>([]);

    let currentOptions = options.filter((option) => values.includes(option?.value as string));

    return (
        <ComboBoxContext.Provider value={
            {
                value: defaultSetValue && defaultValue ? defaultValue : values,
                setValue: defaultSetValue && defaultValue ? defaultSetValue : setValues,
                open: onOpenChange && defaultOpen ? defaultOpen : open,
                setOpen: onOpenChange && defaultOpen ? onOpenChange : setOpen,
                setOptions: setOptions,
                notCloseOnSelect: notCloseOnSelect !== undefined && notCloseOnSelect !== null ? notCloseOnSelect : true,
                multiselect: true
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
                        {currentOptions.length > 0 ? <span className="ms-overflow-hidden ms-text-ellipsis">{currentOptions.map((option, index) => <>{option?.label}{index < currentOptions.length - 1 ? ", " : null}</>)}</span> : <span className="ms-text-muted-foreground ms-overflow-hidden ms-text-ellipsis">{placeholder}</span>}
                        <ChevronsUpDown className="ms-ml-2 ms-h-4 ms-w-4 ms-shrink-0 ms-opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="ms-p-0">
                    <Command filter={(optionValue, search) => {
                        const option = options.find((option) => option?.value === optionValue);
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
                <input type="hidden" onChange={onChange} ref={ref} required={required} name={name} value={values} />
            </Popover>
        </ComboBoxContext.Provider>
    )
});

const useComboBox = () => {
    const value = useContext(ComboBoxContext);

    if (!value)
        throw new Error("<ComboBoxItem /> avaible only on <ComboBox />");

    return value;
};

export const ComboBoxItem = forwardRef<React.ElementRef<typeof CommandItem>, React.ComponentPropsWithoutRef<typeof CommandItem>>(({ value, children, ...props }, ref) => {
    const { setOpen, setValue, value: selectedValue, setOptions, multiselect } = useComboBox();
    const id = useId()

    useEffect(() => {
        setOptions((options) => [...options, { label: children, value: value || id }]);
    }, []);

    return (
        <CommandItem
            value={value || id}
            onSelect={(currentValue) => {
                if (!selectedValue) {
                    if (multiselect)
                        (setValue as Dispatch<SetStateAction<string[]>>)([currentValue]);
                    else
                        (setValue as Dispatch<SetStateAction<string | null>>)(currentValue);
                }
                if (typeof selectedValue === "string")
                    (setValue as Dispatch<SetStateAction<string | null>>)((selectedValue) => selectedValue === currentValue ? null : currentValue);
                if (selectedValue instanceof Array)
                    (setValue as Dispatch<SetStateAction<string[]>>)((selectedValue) => !selectedValue.includes(currentValue) ? [...selectedValue, currentValue] : selectedValue.filter((val) => val !== currentValue));
                setOpen(false)
            }}
            ref={ref}
            {...props}
        >
            <Check
                className={cn(
                    "ms-mr-2 ms-h-4 ms-w-4",
                    (selectedValue instanceof Array && selectedValue.includes(value || id)) || (typeof selectedValue === "string" && selectedValue === value) ? "ms-opacity-100" : "ms-opacity-0"
                )}
            />
            {children}
        </CommandItem>
    )
})

export const ComboBoxGroup = CommandGroup;
ComboBoxGroup.displayName = "ComboBoxGroup";