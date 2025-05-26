import React, { useState, useEffect } from "react";
import {actualizarUsuarioApi,} from "./Handdlers/actualizarUsuario";
import crearUsuarioApi from "./Handdlers/crearUsuario";
import { obtenerTodosLosUsuariosApi } from "./Handdlers/obtenerUsuarios";
import { obtenerUsuarioPorEmailApi } from "./Handdlers/obtenerUsuarioEmail";
import { eliminarUsuarioApi } from "./Handdlers/eliminarUsuario";
import "../../styles/gestion/gestionUsuarios.css";

const GestionUsuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [emailBusqueda, setEmailBusqueda] = useState("");
  const [usuarioEncontrado, setUsuarioEncontrado] = useState<any | null>(null);
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contra: "",
    fecha_asig: "",
    rol: "",
    contacto: "",
    edad: 0,
  });

  // Obtener todos los usuarios al cargar
  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const data = await obtenerTodosLosUsuariosApi();
      setUsuarios(data);
    } catch (err) {
      alert("❌ Error al cargar usuarios");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleCrearUsuario = async () => {
    try {
      await crearUsuarioApi(
        formulario.nombre,
        formulario.apellido,
        formulario.email,
        formulario.contra,
        formulario.fecha_asig,
        formulario.rol,
        formulario.contacto,
        Number(formulario.edad)
      );
      alert("✅ Usuario creado");
      setFormulario({
        nombre: "",
        apellido: "",
        email: "",
        contra: "",
        fecha_asig: "",
        rol: "",
        contacto: "",
        edad: 0,
      });
      fetchUsuarios();
    } catch (err) {
      alert("❌ Error al crear usuario");
    }
  };

  const handleBuscarUsuario = async () => {
    try {
      const user = await obtenerUsuarioPorEmailApi(emailBusqueda);
      setUsuarioEncontrado(user);
    } catch (err) {
      alert("❌ Usuario no encontrado");
      setUsuarioEncontrado(null);
    }
  };

  const handleEliminarUsuario = async (email: string) => {
    if (confirm("¿Estás seguro de eliminar este usuario?")) {
      try {
        await eliminarUsuarioApi(email);
        alert("✅ Usuario eliminado");
        fetchUsuarios();
      } catch (err) {
        alert("❌ Error al eliminar usuario");
      }
    }
  };

  const handleActualizarUsuario = async () => {
    try {
      await actualizarUsuarioApi(emailBusqueda, {
        nombre: formulario.nombre,
        apellido: formulario.apellido,
        rol: formulario.rol,
      });
      alert("✅ Usuario actualizado");
      fetchUsuarios();
    } catch (err) {
      alert("❌ Error al actualizar usuario");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>👤 Gestión de Usuarios</h2>

      {/* Crear Usuario */}
      <h3>➕ Crear Usuario</h3>
      <input name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={handleInputChange} />
      <input name="apellido" placeholder="Apellido" value={formulario.apellido} onChange={handleInputChange} />
      <input name="email" placeholder="Email" value={formulario.email} onChange={handleInputChange} />
      <input name="contra" placeholder="Contraseña" value={formulario.contra} onChange={handleInputChange} />
      <input name="fecha_asig" placeholder="Fecha Asignación" value={formulario.fecha_asig} onChange={handleInputChange} />
      <input name="rol" placeholder="Rol" value={formulario.rol} onChange={handleInputChange} />
      <input name="contacto" placeholder="Contacto" value={formulario.contacto} onChange={handleInputChange} />
      <input name="edad" type="number" placeholder="Edad" value={formulario.edad} onChange={handleInputChange} />
      <button onClick={handleCrearUsuario}>Crear</button>

      <hr />

      {/* Buscar Usuario */}
      <h3>🔍 Buscar Usuario por Email</h3>
      <input value={emailBusqueda} onChange={(e) => setEmailBusqueda(e.target.value)} placeholder="Email a buscar" />
      <button onClick={handleBuscarUsuario}>Buscar</button>

      {usuarioEncontrado && (
        <div>
          <p><strong>Nombre:</strong> {usuarioEncontrado.nombre}</p>
          <p><strong>Apellido:</strong> {usuarioEncontrado.apellido}</p>
          <p><strong>Email:</strong> {usuarioEncontrado.email}</p>
          <p><strong>Rol:</strong> {usuarioEncontrado.rol}</p>
        </div>
      )}

      <hr />

      {/* Actualizar Usuario */}
      <h3>✏️ Actualizar Usuario</h3>
      <p>(Se actualizará el usuario con el email ingresado arriba)</p>
      <input name="nombre" placeholder="Nuevo Nombre" value={formulario.nombre} onChange={handleInputChange} />
      <input name="apellido" placeholder="Nuevo Apellido" value={formulario.apellido} onChange={handleInputChange} />
      <input name="rol" placeholder="Nuevo Rol" value={formulario.rol} onChange={handleInputChange} />
      <button onClick={handleActualizarUsuario}>Actualizar</button>

      <hr />

      {/* Lista de Usuarios */}
      <h3>📋 Lista de Usuarios</h3>
      <ul>
        {usuarios.map((user) => (
          <li key={user.email}>
            {user.nombre} {user.apellido} ({user.email}) - Rol: {user.rol}
            <button onClick={() => handleEliminarUsuario(user.email)} style={{ marginLeft: "10px" }}>
              ❌ Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestionUsuarios;
