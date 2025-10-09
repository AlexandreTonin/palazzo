import { useEffect, useState } from "react";
import findAllProperties from "./requests/properties/findAllProperties";

export function useProperties() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProperties() {
            try {
                setLoading(true);
                setError(null);

                const response = await findAllProperties();
                setProperties(response.data);
            } catch (err) {
                setError(err.message ?? "Erro ao buscar propriedades");
            } finally {
                setLoading(false);
            }
        }

        fetchProperties();
    }, [setError]);

    return { data: properties, isLoading: loading, error };
}
