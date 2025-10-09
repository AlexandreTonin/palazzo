import { useEffect, useState } from "react";
import findPropertyById from "./requests/findPropertyById";

export function useProperty(id) {
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProperty() {
            if (!id) return;

            try {
                setLoading(true);
                setError(null);

                const response = await findPropertyById(id);
                setProperty(response.data);
            } catch (err) {
                setError(err.message ?? "Erro ao buscar propriedade");
            } finally {
                setLoading(false);
            }
        }

        fetchProperty();
    }, [id]);

    return { data: property, isLoading: loading, error };
}