import React, { useState } from "react";
import "../styles/trainersPanel.css";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Prueba from "../components/prueba";
import CrearCursoModal from "../components/crearCursoModal/crearCursoModal"; // Importa tu modal

const TrainerPanel: React.FC = () => {
  const [panelOpen, setPanelOpen] = useState(false); // estado para abrir/cerrar modal

  return (
    <>
      <NavBar />
      <div className="trainers-panel-container">
        <h1 className="trainers-title">Liga Santandereana de Natación</h1>
        <p className="trainers-subtitle">
          Bienvenido, aquí puedes gestionar todo lo relacionado con el sistema.
        </p>

        <div className="trainer-options">
          <button className="trainer-button" onClick={() => setPanelOpen(true)}>
            Crear Curso 
          </button>
          <button className="trainer-button"> Solicitar nuevo nadador</button>
          <button className="trainer-button"> Solicitar cambio de datos</button>
          <button className="trainer-button"> Agregar estudiante</button>
        </div>
      </div>

      {/* Renderiza el modal solo si está abierto */}
      {panelOpen && <CrearCursoModal onClose={() => setPanelOpen(false)} />}

      <Prueba />
      <Footer />
    </>
  );
};

export default TrainerPanel;
