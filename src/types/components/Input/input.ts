export interface PropsInput {
    label: string;
    type: string;
    placeholder?: string;
    style?: string;
    value: string | number;
    onChange: (value: string) => void;
}