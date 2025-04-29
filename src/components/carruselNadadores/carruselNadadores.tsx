import { useRef } from "react";
import "../../styles/carruselNadadores.css";
import imagenNadador from "../../assets/images/nadador.jpg";

const CarruselNadadores = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const nadadores = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    nombre: `Nadador ${i + 1}`,
    imagen: imagenNadador,
  }));

  const scroll = (offset: number) => {
    if (!carouselRef.current) return;        // si es null, salimos
    carouselRef.current.scrollBy({
      left: offset,
      behavior: "smooth",
    });
  };
  

  return (
    <div className="carousel-container">
      {/* Flechas de desplazamiento */}
      <button className="carousel-arrow left" onClick={() => scroll(-200)}>‹</button>

      <div className="carousel" ref={carouselRef}>
        {nadadores.map((nadador) => (
          <div key={nadador.id} className="carousel-item">
            <div className="carousel-image-container">
              <img
                src={nadador.imagen}
                alt={nadador.nombre}
                className="carousel-image"
              />
            </div>
            <p className="carousel-text">{nadador.nombre}</p>
          </div>
        ))}
      </div>

      <button className="carousel-arrow right" onClick={() => scroll(200)}>›</button>
    </div>
  );
};

export default CarruselNadadores;