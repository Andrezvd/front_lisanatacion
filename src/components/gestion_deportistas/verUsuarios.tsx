import { useEffect, useState } from "react";
import api from "../../services/api";

const VerUsuarios = () => {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("URL de la API:", import.meta.env.VITE_API_URL);  // 👈 Aquí

    api.get("/usuarios/")  // 👈 Nota: no pongas la URL completa aquí si ya usas baseURL
      .then(response => setUsuarios(response.data))
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
          {Array.isArray(usuarios) && usuarios.length > 0 ? (
            usuarios.map((usuario, index) => (
              <li key={index}>{usuario.nombre} - {usuario.email}</li>
            ))
          ) : (
            <p>No hay usuarios disponibles.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default VerUsuarios;
