import * as React from "react";
import { Skeleton } from "@ui-components/skeleton";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@ui-components/form";
import { Input } from "@ui-components/input";
import { LucideIcon } from "lucide-react";

export interface InputFormFieldProps {
    label?: string;
    name: string;
    skeletonLoad?: boolean;
    placeholder?: string;
    description?: string;
    LabelIcon?: LucideIcon;
}

/*
    @using Using InputFormField in Form
*/
export const InputFormField: React.FC<InputFormFieldProps> = ({ label, name, skeletonLoad, placeholder, description, LabelIcon }) => {
    if (skeletonLoad) {
        return (
            <div className="space-y-2">
                <Skeleton className="inline-block leading-none text-sm font-medium rounded-md">
                    <span className="invisible inline-flex items-center gap-2">
                        {LabelIcon && <LabelIcon className="h-4 w-4" />}
                        {label}
                    </span>
                </Skeleton>
                <Skeleton className="h-10 w-full rounded-md px-3 py-2 text-sm" />
                <Skeleton className="inline-block rounded-md">
                    <span className="invisible text-sm text-muted-foreground">{description}</span>
                </Skeleton>
            </div>
        )
    }
    return (
        <FormField name={name} render={({ field }) => (
            <FormItem>
                {label &&
                    <FormLabel>
                        <span className="flex items-center gap-2">
                            {LabelIcon && <LabelIcon className="h-4 w-4" />}
                            {label}
                        </span>
                    </FormLabel>
                }
                <FormControl>
                    <Input {...field} placeholder={placeholder} />
                </FormControl>
                {description && <FormDescription>{description}</FormDescription>}
                <FormMessage />
            </FormItem>
        )} />
    )
}