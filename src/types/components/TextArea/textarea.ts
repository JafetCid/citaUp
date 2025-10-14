export interface PropsTextArea {
    label: string;
    placeholder?: string;
    style?: string;
    value: string | number;
    onChange: (value: string) => void;
}