import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
        months:
          "ms-flex ms-flex-col ms-space-y-4 sm:ms-space-x-4 sm:ms-space-y-0",
        month: "ms-space-y-4",
        caption:
          "ms-flex ms-justify-center ms-pt-1 ms-relative ms-items-center",
        caption_label: "ms-text-sm ms-font-medium",
        nav: "ms-space-x-1 ms-flex ms-items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline", size: "defaultNoPadding" }),
          "ms-h-7 ms-w-7 ms-bg-transparent ms-p-0 ms-opacity-50 hover:ms-opacity-100"
        ),
        nav_button_previous: "ms-absolute ms-left-1",
        nav_button_next: "ms-absolute ms-right-1",
        table: "ms-w-full ms-border-collapse ms-space-y-1",
        head_row: "ms-flex ms-justify-evenly",
        head_cell:
          "ms-text-muted-foreground ms-rounded-md ms-w-9 ms-font-normal ms-text-[0.8rem]",
        row: "ms-flex ms-justify-evenly ms-w-full ms-mt-2",
        cell: "ms-h-9 ms-w-9 ms-text-center ms-text-sm ms-p-0 ms-relative [&:has([aria-selected].day-range-end)]:ms-rounded-r-md [&:has([aria-selected].day-outside)]:ms-bg-accent/50 [&:has([aria-selected])]:ms-bg-accent first:[&:has([aria-selected])]:ms-rounded-l-md last:[&:has([aria-selected])]:ms-rounded-r-md focus-within:ms-relative focus-within:ms-z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "ms-h-9 ms-w-9 ms-p-0 ms-font-normal aria-selected:ms-opacity-100"
        ),
        day_range_end: "ms-day-range-end",
        day_selected:
          "ms-bg-primary ms-text-primary-foreground hover:ms-bg-primary hover:ms-text-primary-foreground focus:ms-bg-primary focus:ms-text-primary-foreground",
        day_today: "ms-bg-accent ms-text-accent-foreground",
        day_outside:
          "ms-day-outside ms-text-muted-foreground ms-opacity-50 aria-selected:ms-bg-accent/50 aria-selected:ms-text-muted-foreground aria-selected:ms-opacity-30",
        day_disabled: "ms-text-muted-foreground ms-opacity-50",
        day_range_middle:
          "aria-selected:ms-bg-accent aria-selected:ms-text-accent-foreground",
        day_hidden: "ms-invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft className="ms-h-4 ms-w-4 ms-text-foreground" />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRight className="ms-h-4 ms-w-4 ms-text-foreground" />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
