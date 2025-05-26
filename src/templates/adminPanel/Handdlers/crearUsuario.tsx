import api from "../../../services/api";

interface RespuestaCrearUsuario {
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
}

const crearUsuarioApi = async (
  nombre: string,
  apellido: string,
  email: string,
  contra: string,
  fecha_asig: string,
  rol: string,
  contacto: string,
  edad: number
): Promise<RespuestaCrearUsuario> => {
  try {
    const response = await api.post<RespuestaCrearUsuario>(
      "/usuarios/crear",
      {
        nombre,
        apellido,
        email,
        contra,
        fecha_asig,
        rol,
        contacto,
        edad,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("❌ Error al crear", error);
    throw new Error("Verifica los datos ingresados.");
  }
};

export default crearUsuarioApi;
