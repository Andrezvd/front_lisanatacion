import React, { useState } from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import "../styles/editarNoticia.css"
import Patrocinadores from "../components/patrocinadoresOficiales/patrocinadoresOficiales";

const EditarNoticia = () => {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí haces el fetch al endpoint correspondiente
    console.log("Editando noticia:", titulo, contenido);
  };

  return (
    <>
    <NavBar/>
    <div className="form-container">
      <h2>Editar Noticia Principal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <textarea
          placeholder="Contenido"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
        />
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
    <Patrocinadores/>
    <Footer/>
    </>
  );
};

export default EditarNoticia;
