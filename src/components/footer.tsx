import React from "react";
import "../styles/footer.css"; 

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h3 className="title">Liga de Natación de Santander</h3>
        <p className="text">
          Dedicados a promover la excelencia en la natación en Santander.
        </p>
        <div className="contact">
          <h4>Contacto</h4>
          <p>Email: ligasana@gmail.com</p>
          <p>Teléfono: 318 3134245</p>
          <p>Dirección: Piscinas Olimpicas, Bucaramanga Colombia</p>
        </div>
        <div className="social">
          <h4>Síguenos</h4>
          <a href="https://www.facebook.com/lisanatacion.oficial/" target="_blank" rel="noopener noreferrer" className="link">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="link">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="link">
            Instagram
          </a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Liga de Natación de Santander. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
