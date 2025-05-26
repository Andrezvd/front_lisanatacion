import React, { useState } from "react";
import "../../styles/crearCursosModal.css";

interface CrearCursoModalProps {
  onClose: () => void;
}

const CrearCursoModal: React.FC<CrearCursoModalProps> = ({ onClose }) => {
  const [piscina, setPiscina] = useState("");
  const [horario, setHorario] = useState("");
  const [entrenador, setEntrenador] = useState("");
  const [categoria, setCategoria] = useState("");
  const [maxCupos, setMaxCupos] = useState<number | "">("");
  const [cantidadMiembros, setCantidadMiembros] = useState<number | "">("");
  const [disciplina, setDisciplina] = useState("");
  const [precioMes, setPrecioMes] = useState<number | "">("");
  const [precioPrueba, setPrecioPrueba] = useState<number | "">("");
  const [descripcion, setDescripcion] = useState("");

  // Datos de ejemplo para piscinas y horarios
    const piscinas: { [key: string]: string[] } = {
    " Piscina Olímpica": ["Lunes 7am", "Miércoles 6pm"],
    "Piscina Club A": ["Martes 8am", "Jueves 5pm"],
    };

  // Horarios disponibles según piscina seleccionada
  const horarios = piscina ? piscinas[piscina] : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí procesas el formulario, por ejemplo enviar a backend
    console.log({
      piscina,
      horario,
      entrenador,
      categoria,
      maxCupos,
      cantidadMiembros,
      disciplina,
      precioMes,
      precioPrueba,
      descripcion,
    });
    onClose(); // cerrar modal después de enviar
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Crear Curso</h2>
        <form onSubmit={handleSubmit}>
          <label>Piscina</label>
          <select value={piscina} onChange={e => setPiscina(e.target.value)} required>
            <option value="">Selecciona una piscina</option>
            {Object.keys(piscinas).map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>

          <label>Horario</label>
          <select value={horario} onChange={e => setHorario(e.target.value)} required>
            <option value="">Selecciona un horario</option>
            {horarios.map(h => (
              <option key={h} value={h}>{h}</option>
            ))}
          </select>

          <label>Entrenador</label>
          <input type="text" value={entrenador} onChange={e => setEntrenador(e.target.value)} required />

          <label>Categoría</label>
          <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)} required />

          <label>Max Cupos</label>
          <input type="number" value={maxCupos} onChange={e => setMaxCupos(Number(e.target.value))} required />

          <label>Cantidad Miembros</label>
          <input type="number" value={cantidadMiembros} onChange={e => setCantidadMiembros(Number(e.target.value))} required />

          <label>Disciplina</label>
          <input type="text" value={disciplina} onChange={e => setDisciplina(e.target.value)} required />

          <label>Precio Mes</label>
          <input type="number" value={precioMes} onChange={e => setPrecioMes(Number(e.target.value))} required />

          <label>Precio Prueba</label>
          <input type="number" value={precioPrueba} onChange={e => setPrecioPrueba(Number(e.target.value))} required />

          <label>Descripción</label>
          <textarea value={descripcion} onChange={e => setDescripcion(e.target.value)} required />

          <button type="submit">Crear Curso</button>
          <button type="button" onClick={onClose}>Cerrar</button>
        </form>
      </div>
    </div>
  );
};

export default CrearCursoModal;

