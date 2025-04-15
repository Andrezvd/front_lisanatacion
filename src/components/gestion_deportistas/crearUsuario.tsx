import { useState } from "react";
import api from "../../services/api";

const CrearUsuario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    contra: "",
    email: "",
    fecha_asig: "",
    rol: "",
  });

  const [mensaje, setMensaje] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log("📤 Enviando al backend:", formData);

      const response = await api.post("/usuarios/", null, {
        params: {
          nombre: formData.nombre,
          contra: formData.contra,
          email: formData.email,
          fecha_asig: formData.fecha_asig,
          rol: formData.rol,
        },
      });

      if (response.status === 200) {
        setMensaje("✅ Usuario creado con éxito.");
        setFormData({ nombre: "", contra: "", email: "", fecha_asig: "", rol: "" });
      } else {
        setMensaje("❌ Error al crear usuario.");
      }
    } catch (error: any) {
      console.error("❌ Error del servidor:", error.response?.data);
      setMensaje("⚠️ Error en la conexión con el backend.");
    }
  };

  return (
    <div>
      <h2>Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
        <input type="text" name="contra" placeholder="Contraseña" value={formData.contra} onChange={handleChange} required />
        <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="fecha_asig" placeholder="YYYY-MM-DD" value={formData.fecha_asig} onChange={handleChange} required />
        <select name="rol" value={formData.rol} onChange={handleChange} required>
          <option value="">Selecciona un rol</option>
          <option value="admin">Admin</option>
          <option value="usuario">Deportista</option>
        </select>
        <button type="submit">Crear Usuario</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default CrearUsuario;
