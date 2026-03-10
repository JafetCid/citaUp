import axios from "axios"
import { API_URL } from "../config"

export const getUser = async () => {
    const response = await axios.get(`${API_URL}/doctor/perfil`, {
        withCredentials: true,
    });

    return response.data;
}