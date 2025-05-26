import api from "../../../services/api";

interface RespuestaCrearUsuario {
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
}

export const obtenerUsuarioPorEmailApi = async (
  email: string
): Promise<RespuestaCrearUsuario> => {
  try {
    const response = await api.get<RespuestaCrearUsuario>(`/usuarios/${email}`);
    return response.data;
  } catch (error) {
    console.error("❌ Error al obtener usuario por email", error);
    throw new Error("No se pudo encontrar el usuario.");
  }
};
