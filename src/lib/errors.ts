import axios from "axios";

export const axiosErrors = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        const data = error.response?.data;

        if (Array.isArray(data?.errors)) {
            // Extraer y mostrar los mensajes
            data.errors.forEach((err: { field: string; message: string }) => {
                console.error(`Error en ${err.field}: ${err.message}`);
            });
        } else {
            const message = data?.message || "Error desconocido del servidor";
            console.error(message);
        }

    } else if (error instanceof Error) {
        console.error("Error inesperado:", error.message || error);
    }
}