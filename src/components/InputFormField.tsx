import * as React from "react";
import { Skeleton } from "@ui-components/skeleton";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@ui-components/form";
import { Input, InputProps } from "@ui-components/input";
import { LucideIcon } from "lucide-react";

export interface InputFormFieldProps extends InputProps {
    label?: string;
    name: string;
    skeletonLoad?: boolean;
    placeholder?: string;
    description?: string;
    LabelIcon?: LucideIcon;
}

export const InputFormField: React.FC<InputFormFieldProps> = ({ label, name, skeletonLoad, placeholder, description, LabelIcon, ...props }) => {
    if (skeletonLoad) {
        return (
            <div className="ms-space-y-2">
                <Skeleton className="ms-inline-block ms-leading-none ms-text-sm ms-font-medium ms-rounded-md">
                    <span className="ms-invisible ms-inline-flex ms-items-center ms-gap-2">
                        {LabelIcon && <LabelIcon className="h-4 w-4" />}
                        {label}
                    </span>
                </Skeleton>
                <Skeleton className="ms-h-10 ms-w-full ms-rounded-md ms-px-3 ms-py-2 ms-text-sm" />
                <Skeleton className="ms-inline-block ms-rounded-md">
                    <span className="ms-invisible ms-text-sm ms-text-muted-foreground">{description}</span>
                </Skeleton>
            </div>
        )
    }
    return (
        <FormField name={name} render={({ field }) => (
            <FormItem>
                {label &&
                    <FormLabel>
                        <span className="ms-flex ms-items-center ms-gap-2">
                            {LabelIcon && <LabelIcon className="h-4 w-4" />}
                            {label}
                        </span>
                    </FormLabel>
                }
                <FormControl>
                    <Input {...props} {...field} placeholder={placeholder} />
                </FormControl>
                {description && <FormDescription>{description}</FormDescription>}
                <FormMessage />
            </FormItem>
        )} />
    )
}