import api from "../../services/api";

interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  fecha_asig: string;
  email: string;
  rol: string;
  contacto: string | null;
  edad: number | null;
}

interface LoginResponse {
  access_token: string;
  token_type: string;
  usuario: Usuario;
}

const manejarLogin = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await api.post<LoginResponse>(
      "/login",
      new URLSearchParams({
        grant_type: "password",
        username: email,
        password: password,
        scope: "",
        client_id: "string",
        client_secret: "string",
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token, usuario } = response.data;

    // Guardar en localStorage
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("userName", usuario.nombre);
    localStorage.setItem("userRole", usuario.rol);
    localStorage.setItem("userEmail", usuario.email);

    return response.data;

  } catch (error) {
    console.error("❌ Error al obtener el token:", error);
    throw new Error("Error de autenticación. Verifica tu correo y contraseña.");
  }
};

export default manejarLogin;
