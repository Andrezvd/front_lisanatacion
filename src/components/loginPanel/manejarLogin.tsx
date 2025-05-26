import api from "../../services/api";

interface LoginResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

const manejarLogin = async (email: string, password: string): Promise<string> => {
  try {
    const response = await api.post<LoginResponse>(
      "/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { access_token } = response.data;

    localStorage.setItem("access_token", access_token);

    return access_token;

  } catch (error) {
    console.error("❌ Error al obtener el token:", error);
    throw new Error("Error de autenticación. Verifica tu correo y contraseña.");
  }
};

export default manejarLogin;