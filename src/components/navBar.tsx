import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navBar.css";
import logo from "../assets/icons/ligaicon.ico"
const NavBar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="contenedor-navbar">
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Liga de natacion Santander</Link>
      </div>
      <div className="navbar-logo-center">
          <img src={logo} alt="Logo" />
        </div>
      <ul className="navbar-links">
        <li><Link to="/carreras">Carreras</Link></li>
        <li><Link to="/about">Torneos</Link></li>
        <li><Link to="/services">Cursos</Link></li>
        <li><Link to="/galeria">Galeria</Link></li>
        <li 
          className="dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span className="dropbtn">Ingresar</span>
          {isDropdownOpen && (
            <ul className="dropdown-content">
              <li><Link to="/ingreso/entrenador">Soy Entrenador</Link></li>
              <li><Link to="/ingreso/administrador">Soy Administrador</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default NavBar;

