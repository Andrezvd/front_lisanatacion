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
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa6";

const NavBar: React.FC = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const userRole = localStorage.getItem("userRole");
  const userName = localStorage.getItem("userName");
  const handleClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    window.location.href = "/";
  };


  return (
    <div className="contenedor-navbar">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>
        <ul className="navbar-links">

          {/* OPCIONES DE LA LIGA */}
          <li className="dropdown sobrelaligaOpcion">
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

          {/* DATOS MENU EMERGENTE*/}
          <li className="dropdown datosOpcion">
            <div className="dropdown-wrapper">
              <Link to="/nosotros">
                Datos <span className="icono_drowdown"><MdKeyboardArrowDown /></span>
              </Link>
              <ul className="dropdown-content">
                <div className="opcionTransparente"></div>
                <div className="fondoOpcionesDesplegables">
                  <li><Link to="/EstadisticasNadadores">Estadísticas de nadadores</Link></li>
                  <li><Link to="/EstadisticasEntrenadores">Estadísticas de entrenadores</Link></li>
                  <li><Link to="/estadisticasClub">Estadísticas de club</Link></li>
                </div>
              </ul>
            </div>
          </li>

          {/* BOTON DE MAS PARA EL DISEÑO RESPONSIVO */}
          <li className="dropdown masOpcion">
            <div className="dropdown-wrapper">
              <Link to="/buscar">
                Mas <span className="icono_drowdown"><GiHamburgerMenu /></span>
              </Link>
              <ul className="dropdown-content">
                <div className="opcionTransparente"></div>
                <div className="fondoOpcionesDesplegables opcionesDesplegadas">
                  <li><Link to="/EstadisticasNadadores">Calendario</Link></li>
                  <li><Link to="/EstadisticasEntrenadores">Pruebas</Link></li>
                  <li><Link to="/estadisticasClub">Torneos</Link></li>
                  <li><Link to="/EstadisticasNadadores">Convocatorias</Link></li>
                  <li><Link to="/EstadisticasEntrenadores">Cursos</Link></li>
                  <li><Link to="/estadisticasClub">Galería</Link></li>
                </div>
              </ul>
            </div>
          </li>

          {/* Otros enlaces */}
          <li className="calendarioOpcion"><Link to="/">Calendario <span className="icono_drowdown calendarioOpcion"><FaCalendarAlt /></span></Link></li>
          <li className="carrerasOpcion"><Link to="/carreras">Pruebas <span className="icono_drowdown carrerasOpcion"><FaSwimmer /></span></Link></li>
          <li className="torneosOpcion"><Link to="/about">Torneos <span className="icono_drowdown"><TbTournament /></span></Link></li>
          <li className="convocatoriaOpcion"><Link to="/services">Convocatorias <span className="icono_drowdown"><IoMdMegaphone /></span></Link></li>

          {userRole === "admin" || userRole === "entrenador" || userRole === "club" ? (
            <li className="dropdown">
              <div className="dropdown-wrapper">
                <Link to="#">
                  {userName} <span className="icono_drowdown"><FaUser /></span>
                </Link>
                <ul className="dropdown-content">
                  <div className="opcionTransparente"></div>
                  <div className="fondoOpcionesDesplegables opcionesDesplegadas">
                    {userRole === "admin" && (
                      <>
                        <li><Link to="/admin">Módulo de Administración</Link></li>
                        <li><Link to="/panelTorneos">Panel de torneos</Link></li>
                      </>
                    )}
                    {userRole === "entrenador" && (
                      <>
                        <li><Link to="/panelEntrenador">Panel de Entrenador</Link></li>
                        <li><Link to="/panelTorneos">Torneos</Link></li>
                      </>
                    )}
                    {userRole === "club" && (
                      <>
                        <li><Link to="/panelClub">Panel de Club</Link></li>
                        <li><Link to="/panelTorneos">Torneos</Link></li>
                      </>
                    )}
                    <li onClick={handleClick}><Link to="/logout">Log out</Link></li>
                  </div>
                </ul>
              </div>
            </li>
          ) : (
            <li className="dropdown">
              <span className="dropbtn" onClick={() => setLoginOpen(true)}>
                Iniciar sesión <span className="icono_drowdown"><FaSignInAlt /></span>
              </span>
            </li>
          )}
          <li className="galeriaOpcion"><Link to="/galeriaPanel">Galería <span className="icono_drowdown"><GrGallery /></span></Link></li>

          <li className="cursosOpcion"><Link to="/CursosPanel">Cursos <span className="icono_drowdown"><GiTeacher /></span></Link></li>
        </ul>

      </nav>
      <LoginPanel isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
};

export default NavBar;
