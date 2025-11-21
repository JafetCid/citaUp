import z from "zod";

export const profileModalFormSchema = z.object({
    name: z
        .string()
        .refine((nam) => nam.trim() !== "", {
            message: "El nombre no puede estar vacio",
        })
        .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, {
            message: "Ingrese solo letras y espacios",
        })
        .min(4, {
            message: "Ingrese mas de 4 caracteres",
        })
        .max(30, {
            message: "Ingrese menos de 30 caracteres",
        }),
    lastName: z
        .string()
        .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, {
            message: "Ingrese solo letras y espacios",
        })
        .min(10, {
            message: "Ingrese mas de 10 caracteres",
        })
        .max(50, {
            message: "Ingrese menos de 50 caracteres",
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
    email: z.string().email({
        message: "Ingrese un correo valido",
    }),
    password: z
        .string()
        .min(6, {
            message: "La contraseña debe ser mayor a 6 caracteres",
        })
        .max(15, {
            message: "La contraseña debe ser menor a 15 caracteres",
        }),
});