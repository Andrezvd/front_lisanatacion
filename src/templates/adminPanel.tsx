import React from "react";
import "../styles/adminPanel.css";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Prueba from "../components/prueba";
import Patrocinadores from "../components/patrocinadoresOficiales/patrocinadoresOficiales";

// Importación de íconos
import { IoMdMegaphone } from "react-icons/io";
import { FaUser, FaSwimmer } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { TbTournament } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();

  const options = [
    { label: "Editar noticia principal", icon: <IoMdMegaphone size={24} />, path: "/admin/noticia" },
    { label: "Crear cuenta de Entrenador", icon: <GiTeacher size={24} />, path: "/admin/crearEntrenador" },
    { label: "Crear cuenta de Club", icon: <FaSwimmer size={24} />, path: "/admin/crearClub" },
    { label: "Gestionar Deportistas", icon: <FaUser size={24} />, path: "/admin/ModuloNadadores" },
    { label: "Gestionar Entrenadores", icon: <GiTeacher size={24} />, path: "/admin/ModuloEntrenadores" },
    { label: "Gestionar Clubes", icon: <FaSwimmer size={24} />, path: "/admin/ModuloClubes" },
    { label: "Gestionar Torneo", icon: <TbTournament size={24} />, path: "/admin/Torneos" },
  ];

  return (
    <>
      <NavBar />
      <div className="admin-panel-container">
        <h1 className="admin-title">Liga Santandereana de Natación</h1>
        <p className="admin-subtitle">
          Bienvenido, aquí puedes gestionar todo lo relacionado con el sistema.
        </p>

        <div className="admin-grid">
          {options.map((option, index) => (
            <div className="admin-card" key={index} onClick={() => navigate(option.path)}>
              <div className="admin-icon">{option.icon}</div>
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      </div>
      <Prueba />
      <Patrocinadores />
      <Footer />
    </>
  );
};

export default AdminPanel;
