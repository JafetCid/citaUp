import axios from "axios"
import { API_URL } from "../config"

export const appointmnetsDoc = async (body: object) => {
    const response = await axios.post(`${API_URL}/doctor/citas`, body, {
        withCredentials: true,
    });

    return response.data;
}

export const getAppointmentsDoc = async () => {
    const response = await axios.get(`${API_URL}/doctor/citas`, {
        withCredentials: true,
    });

    return response.data.citas;
}