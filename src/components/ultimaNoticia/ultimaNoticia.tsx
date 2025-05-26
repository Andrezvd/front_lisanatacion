import "../../styles/ultimaNoticia.css";
import videoUltimaNoticia from "../../assets/videos/ultimaNoticia.mp4";
import imagenNoticia from "../../assets/images/nadador.jpg"


const noticias = [
  {
    id: 1,
    imagen: imagenNoticia,
    titulo: "Evento Nacional",
    descripcion: "Campeonato con récord de asistencia.",
  },
  {
    id: 2,
    imagen: imagenNoticia,
    titulo: "Nuevo Récord",
    descripcion: "Récord en 100m libres.",
  },
  {
    id: 3,
    imagen: imagenNoticia,
    titulo: "Sesiones Abiertas",
    descripcion: "Entrenamientos juveniles disponibles.",
  },
  {
    id: 4,
    imagen: imagenNoticia,
    titulo: "Nuevo Récord",
    descripcion: "Récord en 100m libres.",
  },
  {
    id: 5,
    imagen: imagenNoticia,
    titulo: "Sesiones Abiertas",
    descripcion: "Entrenamientos juveniles disponibles.",
  },
  {
    id: 6,
    imagen: imagenNoticia,
    titulo: "Nuevo Récord",
    descripcion: "Récord en 100m libres.",
  },
  {
    id: 7,
    imagen: imagenNoticia,
    titulo: "Sesiones Abiertas",
    descripcion: "Entrenamientos juveniles disponibles.",
  },
];



const UltimaNoticia = () => {
  return (
    <div className="contenedorUltimaNoticia">
      <div className="videoUltimaNoticia overlay">
        <video src={videoUltimaNoticia} autoPlay muted loop playsInline />
        <div className="videoCaption">
          <h3 className="videoTitulo">Red richard gana en 100M masculino</h3>
          <p className="videoDescripcion">
            Tras una larga jornada Red richard se lleva el campeonato sirenin frente a su rival
          </p>
        </div>
      </div>

      <div className="textoUltimaNoticia">
        <h2 className="tituloNoticia">Últimas Noticias</h2>
        <div className="listaNoticias">
          {noticias.slice(0, 5).map((noticia) => (
            <div key={noticia.id} className="noticiaItem">
              <img src={noticia.imagen} alt={noticia.titulo} />
              <div>
                <h3>{noticia.titulo}</h3>
                <p>{noticia.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimaNoticia;
