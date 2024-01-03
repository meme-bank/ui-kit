import { Component, ExoticComponent, FunctionComponent } from "react";
import { useMediaQuery } from "./utils";
import React from "react";

export function ResponsibilityHOC<ThenProps = {}, ElseThenProps = {}>(query: string, Then: FunctionComponent<ThenProps> | Component<ThenProps> | ExoticComponent<ThenProps>, ElseThen: FunctionComponent<ElseThenProps> | Component<ElseThenProps> | ExoticComponent<ElseThenProps> | null = null): FunctionComponent<ThenProps & ElseThenProps> {
    return (props: ThenProps & ElseThenProps) => {
        const match = useMediaQuery(query);
        // @ts-ignore
        return match ? <Then {...props} /> : ElseThen ? <ElseThen {...props} /> : null;
    }
}