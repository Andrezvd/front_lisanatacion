import { useState } from "react";
import api from "../../services/api";

const CrearClub = () => {
  const [formData, setFormData] = useState({
    nombre: "",
  });

  const [mensaje, setMensaje] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/clubes/", formData);

      if (response.status === 200) {
        setMensaje("✅ Club creado con éxito.");
        setFormData({ nombre: ""});
      } else {
        setMensaje("❌ Error al crear Club.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMensaje("⚠️ Error en la conexión con el backend.");
    }
  };

  return (
    <div>
      <h2>Crear Club</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
        <button type="submit">Crear club</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default CrearClub;