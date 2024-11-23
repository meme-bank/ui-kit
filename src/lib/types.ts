import { ExoticComponent, FunctionComponent } from "react";

export type Iconable =
  | FunctionComponent<{ className?: string | null }>
  | ExoticComponent<{ className?: string | null }>
  | FunctionComponent<{ className?: string }>
  | ExoticComponent<{ className?: string }>;
