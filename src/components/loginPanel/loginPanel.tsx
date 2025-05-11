import React, { useState } from "react";
import "../../styles/loginPanel.css";
import ManejarLogin from "./manejarLogin";

interface LoginPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginPanel: React.FC<LoginPanelProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje(null);

    try {
      // Llamar a la función ManejarLogin
      const { access_token, usuario } = await ManejarLogin(email, password);
      
      // Guardar los datos del usuario y token en localStorage
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("userName", usuario.nombre);
      localStorage.setItem("userRole", usuario.rol);
      localStorage.setItem("userEmail", usuario.email);
      localStorage.setItem("userInfo", JSON.stringify(usuario)); // Guardar el usuario completo

      // Mensaje de éxito
      setMensaje("✅ Sesión iniciada correctamente.");
      onClose(); // Cerrar el modal solo cuando la sesión sea exitosa
    } catch (error: any) {
      // Mostrar error
      setMensaje("❌ Error al iniciar sesión: " + error.message);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-left">
          <h3>Autenticación de Usuarios</h3>
          <p>
            Este es el módulo de inicio de sesión para aquellos a quienes la liga les ha proporcionado una cuenta.
            Si usted es entrenador o club, o quiere hacer el proceso para avalar su club o campo de entrenamiento,
            puede seguir el siguiente enlace:
          </p>
          <a href="/proceso-autenticacion" className="auth-link">
            Proceso de Autenticación Entrenador o Club
          </a>
          <p>
            La normativa para solicitar una cuenta puede hacerse presencial o por medio de la página web,
            donde se solicitarán documentos que avalen sus estudios en el campo de la natación y el deporte,
            además de documentos personales.
          </p>
        </div>

        <div className="modal-right">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Ingresar</button>
            <button type="button" className="forgot-password">¿Olvidaste tu contraseña?</button>

            {mensaje && <p className="mensaje-login">{mensaje}</p>}
          </form>
        </div>

        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default LoginPanel;
