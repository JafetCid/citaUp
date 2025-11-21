import { AppointmentsForm } from "@/types/validations/appointmentForm/appointment";
import { ReactNode } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface PropsInput<T extends FieldValues> {
    label: string;
    icon?: ReactNode;
    type: string;
    min?: string;
    placeholder?: string;
    style?: string;
    error?: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    // value: string | number;
    // onChange: (value: string) => void;
}