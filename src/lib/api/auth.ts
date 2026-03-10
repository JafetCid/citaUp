import axios from "axios"
import { API_URL } from "../config";

export const loginRequest = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/login`, {
        correo: email,
        password
    }, {
        withCredentials: true,   // esto permite recibir cookies
    });

    return response.data;
}

interface Register {
    nombre: string;
    apellidos: string;
    correo: string;
    password: string;
}

export const signUpRequest = async (body: Register) => {
    const response = await axios.post(`${API_URL}/auth/register/doctor`, body);

    const data = response.data;
    // console.log(data);

    return data;
}