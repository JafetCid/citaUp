import { AppointmentsForm } from "@/types/validations/appointmentForm/appointment";
import { UseFormRegister } from "react-hook-form";

export interface PropsTextArea {
    label: string;
    placeholder?: string;
    style?: string;
    error?: string;
    name: keyof AppointmentsForm;
    register: UseFormRegister<AppointmentsForm>
    // value: string | number;
    // onChange: (value: string) => void;
}