import api from "../../../services/api";

interface RespuestaCrearUsuario {
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
}

export const obtenerTodosLosUsuariosApi = async (): Promise<RespuestaCrearUsuario[]> => {
  try {
    const response = await api.get<RespuestaCrearUsuario[]>("/usuarios/lista");
    return response.data;
  } catch (error) {
    console.error("❌ Error al obtener usuarios", error);
    throw new Error("No se pudo obtener la lista de usuarios.");
  }
};
