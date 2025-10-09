import { API } from "@/services/api";

export default async function findPropertyById(id) {
    const response = await API.get(`/listings/${id}`);
    return response;
}