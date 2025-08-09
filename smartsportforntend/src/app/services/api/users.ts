export async function getUsers() {
    const response = await fetch('127.0.0.1:8000/users/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            credentials: 'include', // Ensure cookies are sent with the request`
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return response.json();
}
