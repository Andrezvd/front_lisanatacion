import "../../styles/ultimaNoticia.css";
import videoUltimaNoticia from "../../assets/videos/ultimaNoticia.mp4"; // <-- así se importa bien



const UltimaNoticia = () => {
  return (
    <div className="contenedorUltimaNoticia">
      <div className="videoUltimaNoticia">
        {/* Aquí iría tu video (puede ser un iframe, un video tag o una imagen temporal) */}
        <video src={videoUltimaNoticia} controls />
      </div>
      <div className="textoUltimaNoticia">
        <h2 className="tituloNoticia">Vea la victoria de Red Richard en 100 metros</h2>
        <p className="textoNoticia">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default UltimaNoticia;
