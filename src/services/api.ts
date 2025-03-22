import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // Asegúrate de que esta variable esté definida en el .env
});

export default api;  // 🔹 Esto es lo que React espera recibir

