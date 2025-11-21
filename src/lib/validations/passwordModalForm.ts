import z from "zod";

export const passwordModalFormSchema = z.object({
    password: z
    .string()
    .min(6, {
        message: "La contraseña debe ser mayor a 6 caracteres",
    })
    .max(15, {
        message: "La contraseña debe ser menor a 15 caracteres",
    }),
    confirmPassword: z
    .string()
    .min(6, {
        message: "La contraseña debe ser mayor a 6 caracteres",
    })
    .max(15, {
        message: "La contraseña no debe ser mayor a 15 caracteres",
    }),
}).refine(data => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"]
})