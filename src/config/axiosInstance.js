import axios from "axios"

// create crea una variables donde se guarda por defecto la url
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api/v1'
})

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})