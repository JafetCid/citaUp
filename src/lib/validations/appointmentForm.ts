import { AppointmentsForm } from "@/types/validations/appointmentForm/appointment"

export const appointmentForm = (formData: AppointmentsForm) => {
    const error: Partial<AppointmentsForm> = {}

    if (!formData.name.trim()) {
        error.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
        error.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        error.email = 'El email no es válido';
    }

    if (!formData.phoneNumber) { 
        error.phoneNumber = 'El teléfono es requerido';
    }

    if (!formData.date) {
        error.date = 'La fecha es requerida';
    }

    if (!formData.hour) { 
        error.hour = 'La hora es requerida';
    }

    if (!formData.service) {
        error.service = 'El servicio es requerido';
    }

    return error;

}