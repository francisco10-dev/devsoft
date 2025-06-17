import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="logo">
              <span className="logo-primary">Dev</span>
              <span className="logo-secondary">Solutions</span>
            </div>
            <p>Impulsamos negocios con soluciones tecnológicas innovadoras y de alto impacto.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Servicios</h3>
            <ul>
              <li><a href="#">Desarrollo Web</a></li>
              <li><a href="#">Aplicaciones Móviles</a></li>
              <li><a href="#">Software a Medida</a></li>
              <li><a href="#">Consultoría TI</a></li>
              <li><a href="#">Cloud Computing</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Compañía</h3>
            <ul>
              <li><a href="#">Sobre nosotros</a></li>
              <li><a href="#">Equipo</a></li>
              <li><a href="#">Casos de estudio</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Carreras</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contacto</h3>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> Av. Tecnológica 123, Ciudad Digital</li>
              <li><i className="fas fa-phone"></i> +1 (123) 456-7890</li>
              <li><i className="fas fa-envelope"></i> info@devsolutions.com</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} DevSolutions. Todos los derechos reservados.</p>
          <div className="legal-links">
            <a href="#">Términos de servicio</a>
            <a href="#">Política de privacidad</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer