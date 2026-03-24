import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

// Request interceptor
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosClient.interceptors.response.use(
    (response) => {
        return response.data; // return data directly
    },
    (error) => {
        if (error.response?.status === 401) {
            console.log("Unauthorized - redirect to login");
        }

        return Promise.reject(error);
    }
);

export const request = {
    get: <T>(url: string) => axiosClient.get<T>(url),
    post: <T, B>(url: string, body: B) => axiosClient.post<T>(url, body),
};

export default axiosClient;