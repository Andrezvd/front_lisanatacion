import { useEffect, useState } from "react";
import api from "../../services/api";
import "../../styles/pruebas_recientes.css";

const PruebasRecientes = () => {
    /*const [pruebas, setPruebas] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      console.log("URL de la API:", import.meta.env.VITE_API_URL); 
  
      api.get("/pruebas/") 
        .then(response => setPruebas(response.data))
        .catch(error => {
          console.error("Error:", error);
          setError("⚠️ Error al obtener usuarios.");
        });
    }, []);*/
    const mockPruebas = [
        {
            id: 1,
            fecha: "2025-04-16:15:00",
            prueba: "100m Libre Masculino",
            piscina: "Piscina Olímpica Bogotá"
        },
        {
            id: 2,
            fecha: "2025-04-17:17:00",
            prueba: "200m Mariposa Femenino",
            piscina: "Complejo Acuático Medellín"
        },
        {
            id: 3,
            fecha: "2025-04-18:18:00",
            prueba: "50m Pecho Mixto",
            piscina: "Piscina Central Cali"
        },

        {
          id: 4,
          fecha: "2025-05-16:15:00",
          prueba: "100m Libre Masculino",
          piscina: "Piscina Olímpica Bogotá"
      },
    ];

    return (
        <div className="contenedor-pruebas">
            <div className="cards-container">
                {mockPruebas.map(prueba => (
                    <div key={prueba.id} className="card-prueba">
                        <p className="fecha">{formatearFechaHora(prueba.fecha)}</p>
                        <h3 className="titulo">{prueba.prueba}</h3>
                        <p className="piscina">{prueba.piscina}</p>
                    </div>
                ))}
            </div>
            <div className="ver-todas">
                <button className="btn-ver-todas">Ver todas las pruebas</button>
            </div>
        </div>
    );
};


const formatearFechaHora = (fechaStr: string) => {
    const hoy = new Date();
    const fecha = new Date(fechaStr);
  
    const hoySinHora = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
    const fechaSinHora = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
  
    const diferenciaDias = (fechaSinHora.getTime() - hoySinHora.getTime()) / (1000 * 60 * 60 * 24);
  
    const hora = fecha.toLocaleTimeString("es-ES", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  
    if (diferenciaDias === 0) {
      return `Hoy, ${hora}`;
    } else if (diferenciaDias === 1) {
      return `Mañana, ${hora}`;
    } else {
      const fechaFormateada = fecha.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
      });
      return `${fechaFormateada}, ${hora}`;
    }
  };

export default PruebasRecientes;