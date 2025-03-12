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
      className={cn("ms:p-3", className)}
      locale={ru}
      classNames={{
        months: "ms:flex ms:flex-col ms:space-y-4 ms:sm:space-y-0",
        month: "ms:space-y-4",
        month_caption:
          "ms:flex ms:justify-center ms:pt-1 ms:relative ms:items-center",
        caption_label: "ms:text-sm ms:font-medium",
        nav: "ms:space-x-1 ms:flex ms:items-center",
        button_previous: cn(
          buttonVariants({ variant: "outline", size: "defaultNoPadding" }),
          "ms:h-7 ms:w-7 ms:bg-transparent ms:p-0 ms:opacity-50 ms:hover:opacity-100",
          "ms:absolute ms:left-2 ms:top-2 ms:z-10"
        ),
        button_next: cn(
          buttonVariants({ variant: "outline", size: "defaultNoPadding" }),
          "ms:h-7 ms:w-7 ms:bg-transparent ms:p-0 ms:opacity-50 ms:hover:opacity-100",
          "ms:absolute ms:right-2 ms:top-2 ms:z-10"
        ),
        month_grid: "ms:w-full ms:border-collapse ms:space-y-1",
        weekdays: "ms:flex ms:justify-evenly",
        weekday:
          "ms:text-muted-foreground ms:rounded-md ms:w-9 ms:font-normal ms:text-[0.8rem]",
        week: "ms:flex ms:justify-evenly ms:w-full ms:mt-2",
        day: cn(
          "ms:relative ms:group ms:p-0 ms:text-center ms:text-sm ms:focus-within:relative ms:focus-within:z-20 ms:[&:has([aria-selected])]:bg-accent *ms::bg-first ms:[&:has([aria-selected].outside)]:bg-accent/50 ms:[&:has([aria-selected].range-end)]:rounded-r-md",
          props.mode === "range"
            ? "ms:[&:has([aria-selected].range-end)]:rounded-r-md ms:[&:has([aria-selected].range-start)]:rounded-l-md first:aria-ms:selected:rounded-l-md last:aria-ms:selected:rounded-r-md"
            : "aria-ms:selected:rounded-md"
        ),
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "ms:h-8 ms:w-8 ms:p-0 ms:font-normal ms:rounded-md"
        ),
        range_end: "range-end",
        range_start: "range-start",
        selected:
          "ms:bg-primary ms:text-primary-foreground ms:hover:bg-primary ms:hover:text-primary-foreground ms:focus:bg-primary ms:focus:text-primary-foreground",
        today: "ms:bg-accent ms:text-accent-foreground ms:rounded-md",
        outside:
          "outside ms:text-muted-foreground ms:opacity-50 aria-ms:selected:bg-accent/50 aria-ms:selected:text-muted-foreground aria-ms:selected:opacity-30",
        disabled: "ms:text-muted-foreground ms:opacity-50",
        range_middle:
          "aria-ms:selected:bg-accent aria-ms:selected:text-accent-foreground",
        hidden: "ms:invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) =>
          orientation === "right" ? (
            <ChevronRight
              className={clsx("ms:h-4 ms:w-4 ms:text-foreground")}
            />
          ) : (
            <ChevronLeft className={clsx("ms:h-4 ms:w-4 ms:text-foreground")} />
          ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
