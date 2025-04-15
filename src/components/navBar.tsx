import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navBar.css";
import logo from "../assets/logo/Logogpt.png";
import LoginPanel from "./loginPanel/loginPanel";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSignInAlt, FaCalendarAlt, FaSwimmer } from "react-icons/fa";
import { TbTournament } from "react-icons/tb";
import { IoMdMegaphone } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";
import { GrGallery } from "react-icons/gr";

const NavBar: React.FC = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="contenedor-navbar">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>
        <ul className="navbar-links">

          {/* OPCIONES DE LA LIGA */}
          <li className="dropdown">
            <div className="dropdown-wrapper">
              <Link to="/nosotros">
                Sobre la Liga <span className="icono_drowdown"><MdKeyboardArrowDown /></span>
              </Link>
              <ul className="dropdown-content">
                <div className="opcionTransparente"></div>
                <div className="fondoOpcionesDesplegables">
                  <li><Link to="/historia">Historia</Link></li>
                  <li><Link to="/nosotros">Sobre Nosotros</Link></li>
                  <li><Link to="/reglamento">Reglamento</Link></li>
                  <li><Link to="/tienda">Tienda</Link></li>
                </div>
              </ul>
            </div>
          </li>

          {/* OPCIONES DE DATOS */}
          <li className="dropdown">
            <div className="dropdown-wrapper">
              <Link to="/buscar">
                Datos <span className="icono_drowdown"><MdKeyboardArrowDown /></span>
              </Link>
              <ul className="dropdown-content">
                <div className="opcionTransparente"></div>
                <div className="fondoOpcionesDesplegables opcionesDesplegadas">
                <li><Link to="/EstadisticasNadadores">Estadísticas de nadadores</Link></li>
                <li><Link to="/EstadisticasEntrenadores">Estadísticas de entrenadores</Link></li>
                <li><Link to="/estadisticasClub">Estadísticas de club</Link></li>
                </div>
              </ul>
            </div>
          </li>

          {/* Otros enlaces */}
          <li><Link to="/">Calendario <span className="icono_drowdown"><FaCalendarAlt /></span></Link></li>
          <li><Link to="/carreras">Pruebas <span className="icono_drowdown"><FaSwimmer /></span></Link></li>
          <li><Link to="/about">Torneos <span className="icono_drowdown"><TbTournament /></span></Link></li>
          <li><Link to="/services">Convocatorias <span className="icono_drowdown"><IoMdMegaphone /></span></Link></li>
          <li><Link to="/services">Cursos <span className="icono_drowdown"><GiTeacher /></span></Link></li>
          <li><Link to="/galeria">Galería <span className="icono_drowdown"><GrGallery /></span></Link></li>

          <li className="dropdown">
            <span className="dropbtn" onClick={() => setLoginOpen(true)}>
              Iniciar sesión <span className="icono_drowdown"><FaSignInAlt /></span>
            </span>
          </li>
        </ul>
      </nav>
      <LoginPanel isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
};

export default NavBar;
