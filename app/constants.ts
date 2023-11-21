export const API_BASE = 'https://dummyjson.com';
export const LIST_ENDPOINT = `${API_BASE}/products`;
export const AUTH_ENDPOINT = `${API_BASE}/auth/login`;
export const ADD_PRODUCT_ENDPOINT = `${LIST_ENDPOINT}/add`;

export const requestOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
};