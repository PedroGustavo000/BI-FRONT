import axios from "axios";

const api = axios.create({
    baseURL: " http://localhost:8080/aulas",
});


api.interceptors.request.use(async (config) => {
    try {
        const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmaWxpcGVAZW1haWwuY29tIiwiaWF0IjoxNjk4MjY4Njc4LCJleHAiOjE3MDE4Njg2Nzh9.SNOfaRzetJ4XWfk-4WwCuB49Kjr0VdEhep8cIc3vyH6pkLtj4x4Tpp6PDTiUXF0BASUSbGmvP0zT4dZ_oO9fHw';
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    } catch (error) {
        console.log("Erro de Interceptor ", error)
    }
});

export default api;
