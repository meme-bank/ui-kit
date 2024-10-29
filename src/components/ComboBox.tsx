import { extractStringFromNode } from "@/lib/extract-string-from-element";
import { cn } from "@/lib/utils";
import { CommandLoading } from "cmdk";
import debounce from "lodash.debounce";
import { Check, ChevronsUpDown, LucideIcon } from "lucide-react";
import React, {
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
} from "react";
import { Button, ButtonProps } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export type OptionType = { value: string; label: ReactNode } | null;

const ComboBoxContext = createContext<{
  value: string | string[] | null;
  setValue:
    | Dispatch<SetStateAction<string | null>>
    | Dispatch<SetStateAction<string[]>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setOptions: Dispatch<SetStateAction<OptionType[]>>;
  notCloseOnSelect: boolean;
  multiselect: boolean;
  unselectable: boolean;
} | null>(null);

export interface ComboBoxProps
  extends Omit<ButtonProps, "onChange" | "unselectable">,
    React.RefAttributes<HTMLButtonElement> {
  Icon?: LucideIcon;
  placeholder: string;
  empty?: ReactNode;
  loadingElement?: ReactNode;
  value?: string;
  setValue?: Dispatch<SetStateAction<string | null>>;
  onOpenChange?: Dispatch<SetStateAction<boolean>>;
  open?: boolean;
  onSearchChange?: (search: string) => void;
  name?: string;
  required?: boolean;
  loading?: boolean;
  defaultValue?: string;
  notCloseOnSelect?: boolean;
  listRef?: React.Ref<HTMLDivElement>;
  unselectable?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const ComboBox = forwardRef<
  HTMLInputElement,
  PropsWithChildren<ComboBoxProps>
>(
  (
    {
      Icon,
      placeholder,
      empty,
      value: defaultValue,
      defaultValue: defVal,
      setValue: defaultSetValue,
      open: defaultOpen,
      onOpenChange,
      onSearchChange,
      name,
      loading,
      loadingElement,
      notCloseOnSelect,
      children,
      onChange,
      required,
      listRef,
      unselectable,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState(defaultValue || defVal || null);
    const [open, setOpen] = useState(defaultOpen || false);
    const [options, setOptions] = useState<OptionType[]>([]);
    const inputSearch = useCallback(
      onSearchChange ? debounce(onSearchChange, 500) : () => {},
      []
    );

    useEffect(() => {
      if (defaultSetValue) defaultSetValue(value);
    }, [value]);
    useEffect(() => {
      if (onOpenChange) onOpenChange(open);
    }, [open]);
    useEffect(() => {
      setValue(defaultValue || null);
    }, [defaultValue]);
    useEffect(() => {
      setOpen(defaultOpen || false);
    }, [defaultOpen]);

    let currentOption = options.find(option => value === option?.value);

    return (
      <ComboBoxContext.Provider
        value={{
          value: value,
          setValue: setValue,
          open: open,
          setOpen: setOpen,
          setOptions: setOptions,
          notCloseOnSelect: notCloseOnSelect || false,
          multiselect: false,
          unselectable: unselectable || false,
        }}
      >
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="ms-justify-between"
              role="combobox"
              aria-expanded={open}
              {...props}
            >
              {Icon && (
                <Icon className="ms-mr-2 ms-h-4 ms-w-4 ms-shrink-0 ms-opacity-50" />
              )}
              {currentOption ? (
                <span className="ms-overflow-hidden ms-text-ellipsis ms-text-nowrap">
                  {currentOption.label}
                </span>
              ) : (
                <span className="ms-text-nowrap ms-text-muted-foreground ms-overflow-hidden ms-text-ellipsis">
                  {placeholder}
                </span>
              )}
              <ChevronsUpDown className="ms-ml-2 ms-h-4 ms-w-4 ms-shrink-0 ms-opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="ms-p-0">
            <Command
              filter={(optionValue, search) => {
                const option = options.find(
                  option => option?.value === optionValue
                );
                if (!option) return 0;
                if (
                  option.value.toLowerCase().includes(search.toLowerCase()) ||
                  extractStringFromNode(option.label)
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                  return 1;
                return 0;
              }}
              shouldFilter={!onSearchChange}
              className="ms-mt-4 md:ms-mt-0 ms-border-t md:ms-border-t-none"
            >
              <CommandInput
                onValueChange={inputSearch}
                placeholder={placeholder}
                loading={loading}
              />
              <CommandList ref={listRef}>
                {empty && <CommandEmpty>{empty}</CommandEmpty>}
                {loading && <CommandLoading>{loadingElement}</CommandLoading>}
                {children}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <input
          type="hidden"
          onChange={onChange}
          ref={ref}
          required={required}
          name={name}
          value={value || undefined}
        />
      </ComboBoxContext.Provider>
    );
  }
);

export const MultiselectComboBox = forwardRef<
  HTMLInputElement,
  PropsWithChildren<
    ComboBoxProps & {
      value?: string[];
      defaultValue?: string[];
      setValue: React.Dispatch<React.SetStateAction<string[]>>;
    }
  >
>(
  (
    {
      Icon,
      placeholder,
      empty,
      value: defaultValue,
      defaultValue: defVal,
      setValue: defaultSetValue,
      open: defaultOpen,
      onOpenChange,
      onSearchChange,
      name,
      loading,
      loadingElement,
      notCloseOnSelect,
      children,
      onChange,
      required,
      listRef,
      unselectable,
      ...props
    },
    ref
  ) => {
    const [values, setValues] = useState<string[]>(
      defaultValue || defVal || []
    );
    const [open, setOpen] = useState(defaultOpen || false);
    const [options, setOptions] = useState<OptionType[]>([]);
    const inputSearch = useCallback(
      onSearchChange ? debounce(onSearchChange, 500) : () => {},
      []
    );

    useEffect(() => {
      if (defaultSetValue) defaultSetValue(values);
    }, [values]);
    useEffect(() => {
      if (onOpenChange) onOpenChange(open);
    }, [open]);
    useEffect(() => {
      setValues(defaultValue || []);
    }, [defaultValue]);
    useEffect(() => {
      setOpen(defaultOpen || false);
    }, [defaultOpen]);

    let currentOptions = options.filter(option =>
      values.includes(option?.value as string)
    );

    return (
      <ComboBoxContext.Provider
        value={{
          value: values,
          setValue: setValues,
          open: open,
          setOpen: setOpen,
          setOptions: setOptions,
          notCloseOnSelect:
            notCloseOnSelect !== undefined && notCloseOnSelect !== null
              ? notCloseOnSelect
              : true,
          multiselect: true,
          unselectable: unselectable || false,
        }}
      >
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="ms-justify-between"
              role="combobox"
              aria-expanded={open}
              {...props}
            >
              {Icon && (
                <Icon className="ms-mr-2 ms-h-4 ms-w-4 ms-shrink-0 ms-opacity-50" />
              )}
              {currentOptions.length > 0 ? (
                <span className="ms-overflow-hidden ms-text-nowrap ms-text-ellipsis">
                  {currentOptions.map((option, index) => (
                    <>
                      {option?.label}
                      {index < currentOptions.length - 1 ? ", " : null}
                    </>
                  ))}
                </span>
              ) : (
                <span className="ms-text-muted-foreground ms-text-nowrap ms-overflow-hidden ms-text-ellipsis">
                  {placeholder}
                </span>
              )}
              <ChevronsUpDown className="ms-ml-2 ms-h-4 ms-w-4 ms-shrink-0 ms-opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="ms-p-0">
            <Command
              filter={(optionValue, search) => {
                const option = options.find(
                  option => option?.value === optionValue
                );
                if (!option) return 0;
                if (
                  option.value.toLowerCase().includes(search.toLowerCase()) ||
                  extractStringFromNode(option.label)
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                  return 1;
                return 0;
              }}
              shouldFilter={!onSearchChange}
              className="ms-mt-4 md:ms-mt-0 ms-border-t md:ms-border-t-none"
            >
              <CommandInput
                onValueChange={inputSearch}
                placeholder={placeholder}
              />
              <CommandList ref={listRef}>
                {empty && <CommandEmpty>{empty}</CommandEmpty>}
                {loading && <CommandLoading>{loadingElement}</CommandLoading>}
                {children}
              </CommandList>
            </Command>
          </PopoverContent>
          <input
            type="hidden"
            onChange={onChange}
            ref={ref}
            required={required}
            name={name}
            value={values}
          />
        </Popover>
      </ComboBoxContext.Provider>
    );
  }
);

const useComboBox = () => {
  const value = useContext(ComboBoxContext);

  if (!value) throw new Error("<ComboBoxItem /> avaible only on <ComboBox />");

  return value;
};

export const ComboBoxItem = forwardRef<
  React.ElementRef<typeof CommandItem>,
  React.ComponentPropsWithoutRef<typeof CommandItem>
>(({ value, children, ...props }, ref) => {
  const {
    setOpen,
    setValue,
    value: selectedValue,
    setOptions,
    multiselect,
    notCloseOnSelect,
    unselectable,
  } = useComboBox();
  const id = useId();

  useEffect(() => {
    setOptions(options =>
      options.some(option => option?.value === (value || id))
        ? options
        : [...options, { label: children, value: value || id }]
    );
  }, [value, children]);

  return (
    <CommandItem
      value={value || id}
      onSelect={currentValue => {
        if (!selectedValue) {
          if (multiselect)
            (setValue as Dispatch<SetStateAction<string[]>>)([currentValue]);
          else
            (setValue as Dispatch<SetStateAction<string | null>>)(currentValue);
        }
        if (typeof selectedValue === "string")
          (setValue as Dispatch<SetStateAction<string | null>>)(
            selectedValue =>
              selectedValue === currentValue && unselectable
                ? null
                : currentValue
          );
        if (selectedValue instanceof Array)
          (setValue as Dispatch<SetStateAction<string[]>>)(selectedValue =>
            !selectedValue.includes(currentValue)
              ? [...selectedValue, currentValue]
              : selectedValue.filter(val => val !== currentValue)
          );
        !notCloseOnSelect && setOpen(false);
      }}
      ref={ref}
      {...props}
    >
      <Check
        className={cn(
          "ms-mr-2 ms-h-4 ms-w-4",
          (selectedValue instanceof Array &&
            selectedValue.includes(value || id)) ||
            (typeof selectedValue === "string" && selectedValue === value)
            ? "ms-opacity-100"
            : "ms-opacity-0"
        )}
      />
      {children}
    </CommandItem>
  );
});

export const ComboBoxGroup = CommandGroup;
ComboBoxGroup.displayName = "ComboBoxGroup";
