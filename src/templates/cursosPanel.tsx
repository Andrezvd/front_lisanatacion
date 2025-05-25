import React, { useState } from "react";
import "../styles/trainersPanel.css";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Prueba from "../components/prueba";
import CrearCursoModal from "../components/crearCursoModal/crearCursoModal"; // Importa tu modal

const CursosPanel: React.FC = () => {
  const [panelOpen, setPanelOpen] = useState(false); // estado para abrir/cerrar modal

  return (
    <>
      <NavBar />
   
      <Footer />
    </>
  );
};

export default CursosPanel;
