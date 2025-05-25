import api from "../../services/api";

interface LoginResponse {
  access_token: string;
  token_type: string;
  // el backend no devuelve usuario explícito aquí
}

const manejarLogin = async (email: string, password: string): Promise<string> => {
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

    const { access_token } = response.data;

    // Guardar solo el token en localStorage
    localStorage.setItem("access_token", access_token);

    return access_token;

  } catch (error) {
    console.error("❌ Error al obtener el token:", error);
    throw new Error("Error de autenticación. Verifica tu correo y contraseña.");
  }
};

export default manejarLogin;
