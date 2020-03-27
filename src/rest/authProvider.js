// in src/rest/authProvider.js
import decodeJwt from 'jwt-decode';

export default {
    // called when the user attempts to log in
    login: ({ username, password }) => {
        const request = new Request('http://localhost:5000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                const token = response.headers.get("X-Auth-Token")
                const permissions = decodeJwt(token).user_claims.role
                localStorage.setItem('token', token);
                localStorage.setItem('permissions', permissions)
                localStorage.setItem('refresh_token', response.headers.get("X-Refresh-Token"));
                return response.json();
            })
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('permissions')
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    }
};