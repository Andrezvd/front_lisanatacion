import React from "react";
import "../../styles/loginPanel.css"

interface LoginPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginPanel: React.FC<LoginPanelProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h2>Iniciar Sesión</h2>
        <form>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" required />

          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" required />

          <button type="submit">Entrar</button>
        </form>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default LoginPanel;
