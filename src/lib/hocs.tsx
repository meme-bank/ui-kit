import { Component, ExoticComponent, ForwardRefExoticComponent, ForwardRefRenderFunction, FunctionComponent, PropsWithoutRef, RefAttributes, forwardRef } from "react";
import { useMediaQuery } from "./utils";
import React from "react";

export function ResponsibilityHOC
    <ThenProps = {}, ElseThenProps = {}, ThenRef = unknown, ElseThenRef = unknown>
    (query: string,
        Then: FunctionComponent<ThenProps> | Component<ThenProps> | ExoticComponent<ThenProps> |
            ForwardRefRenderFunction<PropsWithoutRef<ThenProps> & RefAttributes<ThenRef>> | ForwardRefExoticComponent<PropsWithoutRef<ThenProps> & RefAttributes<ThenRef>>,
        ElseThen: FunctionComponent<ElseThenProps> | Component<ElseThenProps> | ExoticComponent<ElseThenProps> |
            ForwardRefRenderFunction<PropsWithoutRef<ElseThenProps> & RefAttributes<ElseThenRef>> | ForwardRefExoticComponent<PropsWithoutRef<ElseThenProps> & RefAttributes<ElseThenRef>> |
            null = null
    ): ForwardRefExoticComponent<PropsWithoutRef<ElseThenProps & ThenProps> & RefAttributes<ThenRef & ElseThenRef>> {
    return forwardRef(
        (props: ThenProps & ElseThenProps, ref) => {
            const match = useMediaQuery(query);
            // @ts-ignore
            return match ? <Then {...props} ref={ref} /> : ElseThen ? <ElseThen {...props} ref={ref} /> : null;
        }
    )
}