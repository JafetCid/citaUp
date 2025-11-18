import { AppointmentsForm } from "@/types/validations/appointmentForm/appointment";

export interface PropsAppointments {
    style?: string;
    contatcStyle?: string;
    isSubmitting: boolean;
    handleSubmit: (e: React.FormEvent) => void;
    handleInputChange: (value: string | number, field: keyof AppointmentsForm) => void;
    formData: {
        name: string;
        email: string;
        phoneNumber: number | string;
        date: number | string;
        hour: number | string;
        service: string;
        comments: string;
    }
    errors: {
        name?: string;
        email?: string;
        phoneNumber?: number | string;
        date?: number | string;
        hour?: number | string;
        service?: string;
        comments?: string;
    }
}