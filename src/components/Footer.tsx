import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="logo">
              <span className="logo-primary">3o</span>
              <span className="logo-secondary">Digital</span>
            </div>
            <p>
              Impulsamos negocios con soluciones tecnológicas innovadoras y de
              alto impacto.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/3odigital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <FaInstagram />
              </a>
              <a href="https://wa.me/50664694072">
                <FaWhatsapp />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Servicios</h3>
            <ul>
              <li>
                <a href="#">Desarrollo Web</a>
              </li>
              <li>
                <a href="#">Aplicaciones Móviles</a>
              </li>
              <li>
                <a href="#">Software a Medida</a>
              </li>
            </ul>
          </div>

         {/** <div className="footer-links">
            <h3>Compañía</h3>
            <ul>
              <li>
                <a href="#">Sobre nosotros</a>
              </li>
              <li>
                <a href="#">Equipo</a>
              </li>
              <li>
                <a href="#">Casos de estudio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>*/}

          <div className="footer-contact">
            <h3>Contacto</h3>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>Escazú, San José, Costa
                Rica.
              </li>
              <li>
                <i className="fas fa-phone"></i>+506 6469 - 4072
              </li>
              {/*<li>
                <i className="fas fa-envelope"></i>info3o@gmail.com
              </li> */}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} 3oDigital. Todos los derechos
            reservados.
          </p>
          <div className="legal-links">
            <a href="#">Términos de servicio</a>
            <a href="#">Política de privacidad</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
