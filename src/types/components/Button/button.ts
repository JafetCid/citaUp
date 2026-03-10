export interface PropsButton {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    style?: string;
    buttonColor?: string;
    onClick?: () => void;
}