import React, { useRef } from "react"; 
import "../styles/galeriaPanel.css";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

import img1 from "../assets/images/car1.jpg";
import img2 from "../assets/images/car2.jpg";
import img3 from "../assets/images/car3.jpg";
import img4 from "../assets/images/car4.jpg";
import img5 from "../assets/images/car5.jpg";
import img6 from "../assets/images/car6.jpg";
import img7 from "../assets/images/car7.jpg";
import img8 from "../assets/images/car8.jpg";
import img9 from "../assets/images/his1.jpg";
import img10 from "../assets/images/his2.jpg";
import img11 from "../assets/images/his3.jpg";
import img12 from "../assets/images/his4.jpg";
import vid1 from "../assets/videos/vid1.mp4";
import vid2 from "../assets/videos/vid2.mp4";


const highlights = [
  { url: img1, titulo: "Evento Destacado 1" },
  { url: img2, titulo: "Evento Destacado 2" },
  { url: img3, titulo: "Evento Destacado 3" },
  { url: img4, titulo: "Evento Destacado 4" },
  { url: img5, titulo: "Evento Destacado 5" },
  { url: img6, titulo: "Evento Destacado 6" },
  { url: img7, titulo: "Evento Destacado 7" },
  { url: img8, titulo: "Evento Destacado 8" },
];

const videos = [
  { url: vid1, titulo: "Resumen Competencia 2023" },
  { url: vid2, titulo: "Highlights Competencia 2022" },
];

const historias = [
  {
    nombre: "Daniela Rojas",
    historia: "Empezó a los 7 años y hoy representa a Santander en torneos nacionales.",
    img: img10,
  },
  {
    nombre: "Camilo Torres",
    historia: "Ex-nadador, ahora entrenador, ha formado a más de 50 atletas.",
    img: img9,
  },
  {
    nombre: "Laura Sánchez",
    historia: "Superó una lesión y volvió a competir con más fuerza que nunca.",
    img: img11,
  },
  {
    nombre: "Mateo Fernández",
    historia: "Campeón juvenil 2022, modelo de disciplina y constancia.",
    img: img12,
  },
];

const GaleriaPanel: React.FC = () => {
  const carruselRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (!carruselRef.current) return;
    carruselRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <>
      <NavBar />
      <div className="galeria-contenedor">
        <h1 className="galeria-titulo">Galería de la Liga</h1>

        <section className="galeria-subseccion">
          <h2>🏅 Highlights de la Liga</h2>
          <div className="carrusel-container">
            <button className="carrusel-flecha izq" onClick={() => scroll(-600)}>‹</button>

            <div className="carrusel" ref={carruselRef}>
              {highlights.map((img, i) => (
                <div className="highlight-item" key={i}>
                  <img src={img.url} alt={img.titulo} />
                  <p>{img.titulo}</p>
                </div>
              ))}
              <div className="highlight-vermas">Ver más highlights →</div>
            </div>

            <button className="carrusel-flecha der" onClick={() => scroll(600)}>›</button>
          </div>
        </section>

        <section className="galeria-subseccion">
          <h2>🎥 Videos destacados</h2>
          <div className="video-grid">
            {videos.map((video, index) => (
              <div className="video-item" key={index}>
                <div className="video-wrapper">
                  <iframe
                    src={video.url}
                    title={video.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p>{video.titulo}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="galeria-subseccion">
          <h2>💬 Historias que inspiran</h2>
          <div className="historia-grid">
            {historias.map((h, i) => (
              <div className="historia-card" key={i}>
                <img src={h.img} alt={h.nombre} />
                <h3>{h.nombre}</h3>
                <p>{h.historia}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GaleriaPanel;
