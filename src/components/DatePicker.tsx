"use client";

import {
  format as formatDate,
  formatRelative,
  setHours,
  setMinutes,
} from "date-fns";
import { ru } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";

import { Button, ButtonVariants } from "@/components/ui/button";
import { Calendar, CalendarProps } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn, generateRangeArray, useIsomorphicLayoutEffect } from "@/lib/utils";
import { ComboBox, ComboBoxItem } from "./ComboBox";

export const DatePicker: React.FC<
  Omit<CalendarProps, "mode" | "className"> &
    Pick<ButtonVariants, "size"> & {
      onSelect?: React.Dispatch<React.SetStateAction<Date | undefined>>;
      selected?: Date;
      withTime?: boolean;
      open?: boolean;
      onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
      format?: "relative" | "absolute";
      className?: string;
    }
> = ({
  onSelect,
  selected,
  format,
  withTime,
  open: defOpen,
  onOpenChange,
  className,
  size,
  ...props
}) => {
  const [date, setDate] = React.useState<Date | undefined>(selected);
  const [timeValue, setTimeValue] = React.useState<string>("00:00");
  const [open, setOpen] = React.useState(defOpen || false);

  useIsomorphicLayoutEffect(() => {
    if (onOpenChange) onOpenChange(open);
  }, [open, onOpenChange]);
  useIsomorphicLayoutEffect(() => {
    setOpen(defOpen || false);
  }, [defOpen]);
  useIsomorphicLayoutEffect(() => {
    if (selected !== date && onSelect) onSelect(date);
  }, [date, onSelect]);
  useIsomorphicLayoutEffect(() => {
    setTimeValue(selected ? formatDate(selected, "HH:mm") : "00:00");
    if (selected !== date) setDate(selected || new Date());
  }, [selected]);
  useIsomorphicLayoutEffect(() => {
    const [hours, minutes] = timeValue.split(":").map(str => parseInt(str, 10));
    setDate(setHours(setMinutes(date || new Date(), minutes), hours));
  }, [timeValue]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          size={size}
          className={cn(
            "ms-w-[220px] ms-max-w-full ms-justify-start ms-text-left ms-font-normal",
            !date && "ms-text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="ms-mr-2 ms-h-4 ms-w-4" />
          {date ? (
            format === "relative" ? (
              formatRelative(date, new Date(), { locale: ru })
            ) : (
              formatDate(date, withTime ? "p PP" : "PP", { locale: ru })
            )
          ) : (
            <span>Выберите дату {withTime && "и время"}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="ms-w-auto ms-p-0">
        <Calendar
          mode="single"
          initialFocus
          {...props}
          selected={date}
          onSelect={date => {
            if (!timeValue || !date) {
              setDate(date || new Date());
              return;
            }
            const [hours, minutes] = timeValue
              .split(":")
              .map(str => parseInt(str, 10));
            const newDate = new Date(
              date.getFullYear(),
              date.getMonth(),
              date.getDate(),
              hours,
              minutes
            );
            setDate(newDate);
          }}
        />
        <div className="ms-items-center ms-flex-row-reverse md:ms-flex-row md:ms-justify-between ms-p-2 ms-flex ms-gap-4">
          <Button onClick={() => setOpen(false)} size="sm">
            <CalendarIcon className="ms-mr-2 ms-h-4 ms-w-4" />
            Выбрать
          </Button>
          {withTime && (
            <div className="ms-items-center ms-justify-end ms-flex ms-gap-0.5">
              <ComboBox
                size="sm"
                setValue={val => {
                  const [hours, minutes] = timeValue.split(":");
                  if (typeof val === "function") {
                    setTimeValue(`${val(hours)}:${minutes}`);
                  } else {
                    setTimeValue(`${val}:${minutes}`);
                  }
                }}
                className="ms-w-[4.5rem]"
                value={timeValue.split(":")[0]}
                placeholder={timeValue.split(":")[0]}
              >
                {generateRangeArray(24)
                  .map(x => x.toString().padStart(2, "0"))
                  .map(val => (
                    <ComboBoxItem value={val} key={val}>
                      {val}
                    </ComboBoxItem>
                  ))}
              </ComboBox>
              <span>:</span>
              <ComboBox
                size="sm"
                setValue={val => {
                  const [hours, minutes] = timeValue.split(":");
                  if (typeof val === "function") {
                    setTimeValue(`${hours}:${val(minutes)}`);
                  } else {
                    setTimeValue(`${hours}:${val}`);
                  }
                }}
                className="ms-w-[4.5rem]"
                value={timeValue.split(":")[1]}
                placeholder={timeValue.split(":")[1]}
              >
                {generateRangeArray(60)
                  .map(x => x.toString().padStart(2, "0"))
                  .map(val => (
                    <ComboBoxItem value={val} key={val}>
                      {val}
                    </ComboBoxItem>
                  ))}
              </ComboBox>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};
