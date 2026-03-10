import axios from "axios"
import { API_URL } from "../config"

export const logout = async () => {
    const response = await axios.post(`${API_URL}/auth/logout`);
    console.log(response.data);

    return response;
}