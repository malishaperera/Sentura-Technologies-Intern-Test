import axios from "axios";


const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_WEAVY_API_KEY}`,
    },
});

export const createUser = (userData) => apiClient.post("/api/users", userData);
export const listUsers = () => apiClient.get("/api/users");
export const getUser = (userId) => apiClient.get(`/api/users/${userId}`);
export const updateUser = (userId, userData) => apiClient.put(`/api/users/${userId}`, userData);
export const deleteUser = (userId) => apiClient.delete(`/api/users/${userId}`);