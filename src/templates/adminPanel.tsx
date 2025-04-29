import React from "react";
import "../styles/adminPanel.css";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Prueba from "../components/prueba"

const AdminPanel: React.FC = () => {
  return (
    <>
      <NavBar />
    <div className="admin-panel-container">
      <h1 className="admin-title">Liga Santandereana de Natación</h1>
      <p className="admin-subtitle">Bienvenido, aquí puedes gestionar todo lo relacionado con el sistema.</p>

      <div className="admin-options">
        <button>Editar noticia Principal</button>
        <button>Crear cuenta de Entrenador</button>
        <button>Crear cuenta de Club</button>
        <button>Gestionar Deportistas</button>
        <button>Gestionar Entrenadores</button>
        <button>Gestionar Clubes</button>
        <button>Gestionar Torneo</button>
      </div>
    </div>
    <Prueba />
    <Footer />
    </>
  );
};

export default AdminPanel;
