import { ReactNode } from "react";

export interface PropsSelect {
    label: string;
        icon: ReactNode;
        style?: string;
        error: string;
        info?: string[];
        value: string | number;
        onChange: (value: string) => void;
}