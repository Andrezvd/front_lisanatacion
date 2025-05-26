import api from "../../../services/api";

interface RespuestaCrearUsuario {
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
}


export const actualizarUsuarioApi = async (
  email: string,
  datosActualizados: Partial<RespuestaCrearUsuario>
): Promise<RespuestaCrearUsuario> => {
  try {
    const response = await api.put<RespuestaCrearUsuario>(
      `/usuarios/${email}`,
      datosActualizados,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("❌ Error al actualizar usuario", error);
    throw new Error("No se pudo actualizar el usuario.");
  }
};
