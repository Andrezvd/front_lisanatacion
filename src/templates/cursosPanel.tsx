import React, { useState } from "react";
import "../styles/cursosPanel.css";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import CrearCursoModal from "../components/crearCursoModal/crearCursoModal"; // Modal de creación



interface Curso {
  piscina: string;
  horario: string;
  entrenador: string;
  categoria: string;
  maxCupos: number;
  cantidadMiembros: number;
  disciplina: string;
  precioMes: number;
  precioPrueba: number;
  descripcion: string;
}

const CursosPanel: React.FC = () => {
  const [panelOpen, setPanelOpen] = useState(false);

  const cursos: Curso[] = [
    {
      piscina: "Piscina Central",
      horario: "Lunes y Miércoles 8:00-9:00",
      entrenador: "Carlos Pérez",
      categoria: "Niños",
      maxCupos: 15,
      cantidadMiembros: 12,
      disciplina: "Natación Básica",
      precioMes: 40000,
      precioPrueba: 5000,
      descripcion: "Curso de iniciación a la natación para niños de 6 a 10 años."
    },
    {
      piscina: "Piscina Norte",
      horario: "Martes y Jueves 17:00-18:00",
      entrenador: "Ana Martínez",
      categoria: "Adultos",
      maxCupos: 20,
      cantidadMiembros: 18,
      disciplina: "Natación Intermedia",
      precioMes: 50000,
      precioPrueba: 6000,
      descripcion: "Curso para adultos con conocimientos básicos de natación."
    },
    {
      piscina: "Piscina Sur",
      horario: "Lunes a Viernes 7:00-8:00",
      entrenador: "Luis Ramírez",
      categoria: "Adolescentes",
      maxCupos: 12,
      cantidadMiembros: 10,
      disciplina: "Natación Competitiva",
      precioMes: 60000,
      precioPrueba: 7000,
      descripcion: "Entrenamiento intensivo para competencia."
    },
    {
      piscina: "Piscina Este",
      horario: "Sábados 10:00-12:00",
      entrenador: "María López",
      categoria: "Niños",
      maxCupos: 10,
      cantidadMiembros: 8,
      disciplina: "Natación Recreativa",
      precioMes: 35000,
      precioPrueba: 5000,
      descripcion: "Curso recreativo enfocado en el juego y aprendizaje acuático."
    },
    {
      piscina: "Piscina Oeste",
      horario: "Martes y Jueves 19:00-20:00",
      entrenador: "Pedro Gómez",
      categoria: "Adultos",
      maxCupos: 18,
      cantidadMiembros: 14,
      disciplina: "Acondicionamiento Físico",
      precioMes: 45000,
      precioPrueba: 6000,
      descripcion: "Curso de natación como forma de ejercicio físico integral."
    },
    {
      piscina: "Piscina Olímpica",
      horario: "Domingos 9:00-11:00",
      entrenador: "Laura Fernández",
      categoria: "Mixto",
      maxCupos: 25,
      cantidadMiembros: 22,
      disciplina: "Estilos Avanzados",
      precioMes: 70000,
      precioPrueba: 10000,
      descripcion: "Curso de perfeccionamiento de estilos de natación."
    }
  ];

  return (
    <>
      <NavBar />
      <main className="cursos-container">
        <h1>Cursos de Natación</h1>
        <div className="cursos-grid">
          {cursos.map((curso, index) => (
            <div key={index} className="curso-card">
              <h2>{curso.disciplina}</h2>
              <p><strong>Piscina:</strong> {curso.piscina}</p>
              <p><strong>Horario:</strong> {curso.horario}</p>
              <p><strong>Entrenador:</strong> {curso.entrenador}</p>
              <p><strong>Categoría:</strong> {curso.categoria}</p>
              <p><strong>Max Cupos:</strong> {curso.maxCupos}</p>
              <p><strong>Miembros Actuales:</strong> {curso.cantidadMiembros}</p>
              <p><strong>Precio Mensual:</strong> ${curso.precioMes}</p>
              <p><strong>Precio Prueba:</strong> ${curso.precioPrueba}</p>
              <p>{curso.descripcion}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CursosPanel;
