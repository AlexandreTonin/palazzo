import { API } from "@/services/api";

export default async function findAllProperties() {
    const response = await API.get('/listings');
    return response;
}