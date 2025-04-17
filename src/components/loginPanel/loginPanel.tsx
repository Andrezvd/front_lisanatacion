import React from "react";
import "../../styles/loginPanel.css";

interface LoginPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginPanel: React.FC<LoginPanelProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
          <form>
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" required />

            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" required />

            <button type="submit">Ingresar</button>
            <button type="button" className="forgot-password">¿Olvidaste tu contraseña?</button>
          </form>
        </div>

        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default LoginPanel;
