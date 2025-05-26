import imagen from "../../assets/images/nadador.jpg";
import "../../styles/mejoresMomentos.css";
import { FaArrowRight } from "react-icons/fa";

const MejoresMomentos = () => {
  const momentos = [
    { id: 1, imagen, descripcion: "Golazo de media cancha" },
    { id: 2, imagen, descripcion: "Atajada espectacular" },
    { id: 3, imagen, descripcion: "Celebración épica" },
    { id: 4, imagen, descripcion: "Gol al último minuto" },
    { id: 5, imagen, descripcion: "Remontada histórica" },
    { id: 6, imagen, descripcion: "Golazo de tiro libre" },
    { id: 7, imagen, descripcion: "Asistencia mágica" },
    { id: 8, imagen, descripcion: "Gol de cabeza" },
    { id: 9, imagen, descripcion: "Golazo de volea" },
    { id: 10, imagen, descripcion: "Gol en el último segundo" },
    { id: 11, imagen, descripcion: "Golazo de larga distancia" },
    { id: 12, imagen, descripcion: "Gol de penalti" },
    { id: 13, imagen, descripcion: "Gol en propia puerta" },
    { id: 14, imagen, descripcion: "Gol de rebote" },
    { id: 15, imagen, descripcion: "Gol de contraataque" },
    { id: 16, imagen, descripcion: "Gol de cabeza" },
    { id: 17, imagen, descripcion: "Golazo de chilena" },
    { id: 18, imagen, descripcion: "Golazo de tijera" },
    { id: 19, imagen, descripcion: "Golazo de rabona" },
    { id: 20, imagen, descripcion: "Golazo de tacón" },
  ];

  return (
    <div className="contenedor-mejores-momentos">
      <div className="header-momentos">
        <h2>Mejores Momentos</h2>
        <div className="ver-galeria">
          <span>Ver galería completa</span>
          <FaArrowRight />
        </div>
      </div>

      <div className="momentos-grid">
        {momentos.slice(0,7).map((momento) => (
          <div key={momento.id} className="momento-card">
            <img src={momento.imagen} alt={`Momento ${momento.id}`} />
            <div className="caption">{momento.descripcion}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MejoresMomentos;
