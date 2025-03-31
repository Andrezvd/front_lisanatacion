import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navBar.css";

const NavBar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Liga Santandereana de Natación</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/about">Torneos</Link></li>
        <li><Link to="/services">Cursos</Link></li>
        <li><Link to="/contact">HighLights</Link></li>
        <li 
          className="dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span className="dropbtn">Ingresar ▼</span>
          {isDropdownOpen && (
            <ul className="dropdown-content">
              <li><Link to="/ingreso/entrenador">Soy Entrenador</Link></li>
              <li><Link to="/ingreso/administrador">Soy Administrador</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

