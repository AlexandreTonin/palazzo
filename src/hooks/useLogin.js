import { useState } from "react";
import loginRequest from "./requests/auth/login";

export function useLogin(data) {
    const [loading, setLoading] = useState();
    const [error, setError] = useState(null);

    async function login(data) {
        try {
            setLoading(true);
            setError(null);

            const response = await loginRequest(data);
            console.log(response.data);
        } catch (err) {
            setError(err.response.data.error ? "Credenciais inválidas" : "Erro ao fazer login");
        } finally {
            setLoading(false);
        }
    }

    return { login, isLoading: loading, error };
}
