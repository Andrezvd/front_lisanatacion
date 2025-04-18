import React from "react";
import { Link } from "react-router-dom";
import "../styles/accesoDenegado.css";

const AccessDenied: React.FC = () => {
  return (
    <div className="access-denied-container">
      <h1>¡Ups! ⚠️</h1>
      <p>No tienes permisos para acceder a esta página.</p>
      <Link to="/" className="back-button">
        Volver al inicio
      </Link>
    </div>
  );
};

export default AccessDenied;
