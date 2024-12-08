import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { ru } from "date-fns/locale";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("ms-p-3", className)}
      locale={ru}
      classNames={{
        months: "ms-flex ms-flex-col ms-space-y-4 sm:ms-space-y-0",
        month: "ms-space-y-4",
        month_caption:
          "ms-flex ms-justify-center ms-pt-1 ms-relative ms-items-center",
        caption_label: "ms-text-sm ms-font-medium",
        nav: "ms-space-x-1 ms-flex ms-items-center",
        button_previous: cn(
          buttonVariants({ variant: "outline", size: "defaultNoPadding" }),
          "ms-h-7 ms-w-7 ms-bg-transparent ms-p-0 ms-opacity-50 hover:ms-opacity-100",
          "ms-absolute ms-left-2 ms-top-2 ms-z-10"
        ),
        button_next: cn(
          buttonVariants({ variant: "outline", size: "defaultNoPadding" }),
          "ms-h-7 ms-w-7 ms-bg-transparent ms-p-0 ms-opacity-50 hover:ms-opacity-100",
          "ms-absolute ms-right-2 ms-top-2 ms-z-10"
        ),
        month_grid: "ms-w-full ms-border-collapse ms-space-y-1",
        weekdays: "ms-flex ms-justify-evenly",
        weekday:
          "ms-text-muted-foreground ms-rounded-md ms-w-9 ms-font-normal ms-text-[0.8rem]",
        week: "ms-flex ms-justify-evenly ms-w-full ms-mt-2",
        day: cn(
          "ms-relative ms-group ms-p-0 ms-text-center ms-text-sm focus-within:ms-relative focus-within:ms-z-20 [&:has([aria-selected])]:ms-bg-accent *:ms-bg-first [&:has([aria-selected].outside)]:ms-bg-accent/50 [&:has([aria-selected].range-end)]:ms-rounded-r-md",
          props.mode === "range"
            ? "[&:has([aria-selected].range-end)]:ms-rounded-r-md [&:has([aria-selected].range-start)]:ms-rounded-l-md first:aria-selected:ms-rounded-l-md last:aria-selected:ms-rounded-r-md"
            : "aria-selected:ms-rounded-md"
        ),
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "ms-h-8 ms-w-8 ms-p-0 ms-font-normal ms-rounded-md"
        ),
        range_end: "range-end",
        range_start: "range-start",
        selected:
          "ms-bg-primary ms-text-primary-foreground hover:ms-bg-primary hover:ms-text-primary-foreground focus:ms-bg-primary focus:ms-text-primary-foreground",
        today: "ms-bg-accent ms-text-accent-foreground ms-rounded-md",
        outside:
          "outside ms-text-muted-foreground ms-opacity-50 aria-selected:ms-bg-accent/50 aria-selected:ms-text-muted-foreground aria-selected:ms-opacity-30",
        disabled: "ms-text-muted-foreground ms-opacity-50",
        range_middle:
          "aria-selected:ms-bg-accent aria-selected:ms-text-accent-foreground",
        hidden: "ms-invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) =>
          orientation === "right" ? (
            <ChevronRight
              className={clsx("ms-h-4 ms-w-4 ms-text-foreground")}
            />
          ) : (
            <ChevronLeft className={clsx("ms-h-4 ms-w-4 ms-text-foreground")} />
          ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
