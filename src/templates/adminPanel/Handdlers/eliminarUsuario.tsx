import api from "../../../services/api";


export const eliminarUsuarioApi = async (email: string): Promise<string> => {
  try {
    const response = await api.delete<{ mensaje: string }>(`/usuarios/${email}`);
    return response.data.mensaje;
  } catch (error) {
    console.error("❌ Error al eliminar usuario", error);
    throw new Error("No se pudo eliminar el usuario.");
  }
};
