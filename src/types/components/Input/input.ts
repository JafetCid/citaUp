import { ReactNode } from "react";

export interface PropsInput {
    label: string;
    icon?: ReactNode;
    type: string;
    min?: string;
    placeholder?: string;
    style?: string;
    error: string;
    value: string | number;
    onChange: (value: string) => void;
}