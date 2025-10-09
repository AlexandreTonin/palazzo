import { useState } from "react";
import registerRequest from "./requests/auth/register";

export function useRegister(data) {
    const [loading, setLoading] = useState();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    async function register(data) {
        try {
            setLoading(true);
            setError(null);

            const response = await registerRequest(data);
            console.log(response.data);
            setSuccess("Registro realizado com sucesso!");
        } catch (err) {
            setError(err.response.data.error ? err.response.data.error : "Erro ao registrar");
        } finally {
            setLoading(false);
        }
    }

    return { register, isLoading: loading, error, success };
}
