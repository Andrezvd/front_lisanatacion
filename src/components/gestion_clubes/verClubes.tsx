import { useEffect, useState } from "react";
import api from "../../services/api";

const VerClubes = () => {
  const [clubes, setClubes] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get("/clubes/")  // Asegúrate de que la ruta es correcta
      .then(response => setClubes(response.data))
      .catch(error => {
        console.error("Error:", error);
        setError("⚠️ Error al obtener usuarios.");
      });
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      {error ? <p>{error}</p> : (
        <ul>
          {clubes.length > 0 ? (
            clubes.map((clubes, index) => (
              <li key={index}>{clubes.nombre} - {clubes.id}</li>
            ))
          ) : (
            <p>No hay clubes disponibles.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default VerClubes;