// lib/api.ts
import { API_URL } from '../../../../common/constants';
import { SINGIN_TYPE, SINGUP_TYPE } from '../requestsTypes';
import { AuthResponse } from '../responsesTypes';

export async function signup(UserData: SINGUP_TYPE): Promise<AuthResponse> {
    try {
        const res = await fetch(`${API_URL}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(UserData),
        });

        const data = await res.json();

        if (!res.ok) {
            return { message: data.message || 'Error al registrar usuario' };
        }

        return data;
    } catch (error: unknown) {
        console.error('Signup error:', error);
        return {
            message:
                typeof error === 'object' &&
                error !== null &&
                'message' in error
                    ? (error as { message: string }).message
                    : 'Error inesperado al registrar usuario',
        };
    }
}

export async function signin(UserData: SINGIN_TYPE): Promise<AuthResponse> {
    try {
        const res = await fetch(`${API_URL}/auth/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(UserData),
        });

        const data = await res.json();

        if (!res.ok) {
            return { message: data.message || 'Credenciales incorrectas' };
        }

        return data;
    } catch (error: unknown) {
        console.error('Signin error:', error);
        return {
            message:
                typeof error === 'object' &&
                error !== null &&
                'message' in error
                    ? (error as { message: string }).message
                    : 'Error inesperado al iniciar sesión',
        };
    }
}
