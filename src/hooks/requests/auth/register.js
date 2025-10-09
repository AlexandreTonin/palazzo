import { API } from "@/services/api";

export default async function registerRequest(data) {
    const response = await API.post('/register', data);
    return response;
}