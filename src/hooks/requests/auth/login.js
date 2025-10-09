import { API } from "@/services/api";

export default async function loginRequest(data) {
    const response = await API.post('/login', data);
    return response;
}