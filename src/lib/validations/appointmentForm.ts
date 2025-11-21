import z from "zod";
import { horasDisponibles, servicios } from "../constants/data";

export const appointmentFormSchema = z.object({
    name: z
        .string()
        .refine((nam) => nam.trim() !== "", {
            message: "El nombre no puede estar vacio",
        })
        .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, { 
            message: "Ingrese solo letras y espacios",
        })
        .min(10, {
            message: "Ingrese mas de 10 caracteres",
        })
        .max(100, {
            message: "Ingrese menos de 100 caracteres",
        }),
    email: z.string().email({
        message: "Ingrese un correo valido",
    }),
    phoneNumber: z
        .string()
        .regex(/^[0-9]+$/, {
            message: "Solo se permiten números",
        })
        .min(10, {
            message: "Ingrese mínimo 10 dígitos",
        })
        .max(10, {
            message: "Ingrese no más de 10 dígitos",
        }),
    date: z.string().refine((dat) => new Date(dat).toString() !== "Invalid Date", {
        message: "Por favor ingrese una fecha valida",
    }),
    hour: z.enum(horasDisponibles ,{
        message: "Horario inválido",
    }),
    service: z.enum(servicios, {
        message: "Opción inválida",
    }),
    comments: z.string()
    .max(300, {
        message: "No puede exceder más de 300 caracteres",
    })
});

// import { AppointmentsForm } from "@/types/validations/appointmentForm/appointment"

// export const appointmentForm = (formData: AppointmentsForm) => {
//     const error: Partial<AppointmentsForm> = {}

//     if (!formData.name.trim()) {
//         error.name = 'El nombre es requerido';
//     }

//     if (!formData.email.trim()) {
//         error.email = 'El email es requerido';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//         error.email = 'El email no es válido';
//     }

//     if (!formData.phoneNumber) {
//         error.phoneNumber = 'El teléfono es requerido';
//     }

//     if (!formData.date) {
//         error.date = 'La fecha es requerida';
//     }

//     if (!formData.hour) {
//         error.hour = 'La hora es requerida';
//     }

//     if (!formData.service) {
//         error.service = 'El servicio es requerido';
//     }

//     return error;

// }