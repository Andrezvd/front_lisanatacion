import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navBar.css";
import logo from "../assets/logo/Logogpt.png";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";


const NavBar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="contenedor-navbar">
      <nav className="navbar">
          <div className="navbar-logo">
            <Link to="/"><img src={logo} alt="Logo" /></Link>
          </div>
        <ul className="navbar-links">
          <li><Link to="/nosotros">Sobre la Liga</Link></li>
          <li><Link to="/buscar"><FaSearch size={20} color="white" /></Link></li>
          <li><Link to="/">Calendario</Link></li>
          <li><Link to="/carreras">Carreras <IoIosArrowDown size={16} color="white"/></Link></li>
          <li><Link to="/about">Torneos</Link></li>
          <li><Link to="/services">Cursos</Link></li>
          <li><Link to="/galeria">Galeria</Link></li>
          <li
            className="dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="dropbtn">Iniciar sesión</span>
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

