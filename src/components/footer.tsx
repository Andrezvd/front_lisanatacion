import React from "react";
import "../styles/footer.css";
import logo from "../assets/logo/logoLigaSana.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top-card">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p className="footer-description">
          Dedicados a promover la excelencia en la natación en Santander.
        </p>
      </div>

      <div className="footer-content">
        <div className="footer-contact">
          <h4>Contáctanos</h4>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Carrera 30 No 14-45, Bucaramanga</p>
          <p><FontAwesomeIcon icon={faClock} /> Lun-Vie: 8AM-12M / 2PM-5PM</p>
          <p><FontAwesomeIcon icon={faPhone} /> +607 6084566</p>
          <p>Email: lsf@ligasantandereanadefutbol.co</p>
          <p>NIT: 890.203.403-6</p>
        </div>

        <div className="footer-social">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/lisanatacion.oficial/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Liga de Natación de Santander. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
