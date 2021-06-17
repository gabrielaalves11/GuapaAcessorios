import axios from "axios";

export const TOKEN_KEY = "@api_rest_guapa";
export const getToken = () => localStorage.getItem(TOKEN_KEY);

const api = axios.create ({
    baseURL: "https://localhost:5001/api/",
    headers: {
        "Context-type": "apllication/json"
    }
});

api.interceptors.request.use(async config => {
    const token = getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;