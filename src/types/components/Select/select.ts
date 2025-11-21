import { AppointmentsForm } from "@/types/validations/appointmentForm/appointment";
import { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

export interface PropsSelect {
    label: string;
    labelOptions?: string;
    icon: ReactNode;
    style?: string;
    info?: string[];
    error?: string;
    name: keyof AppointmentsForm;
    register: UseFormRegister<AppointmentsForm>;
    // value: string | number;
    // onChange: (value: string) => void;
}