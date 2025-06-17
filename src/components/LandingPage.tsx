import { useEffect } from "react";
import '../styles/styles.css'

export default function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-section");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="landing-container">
      <header className="hero">
        <div className="hero-content">
          <h1>Impulsamos tu negocio con soluciones tecnológicas a medida</h1>
          <p>Desarrollo de software profesional para empresas modernas</p>
          <button className="cta-button">Contáctanos</button>
        </div>
        <img src="/images/hero-illustration.svg" alt="Hero Illustration" className="hero-img" />
      </header>

      <section className="fade-section services">
        <h2>Nuestros Servicios</h2>
        <div className="grid">
          <div className="card">Desarrollo Web</div>
          <div className="card">Aplicaciones Móviles</div>
          <div className="card">Integraciones API</div>
          <div className="card">Consultoría Técnica</div>
        </div>
      </section>

      <section className="fade-section benefits">
        <h2>¿Por qué trabajar con nosotros?</h2>
        <ul>
          <li>Equipo especializado y multidisciplinario</li>
          <li>Calidad garantizada y cumplimiento de tiempos</li>
          <li>Atención personalizada y enfoque en resultados</li>
        </ul>
      </section>

      <section className="fade-section testimonials">
        <h2>Testimonios</h2>
        <blockquote>
          “Gracias a su equipo logramos automatizar procesos clave y aumentar nuestra eficiencia.”
          <footer>— Cliente satisfecho</footer>
        </blockquote>
      </section>

      <section className="fade-section technologies">
        <h2>Tecnologías que usamos</h2>
        <div className="grid">
          <div className="tech">React</div>
          <div className="tech">TypeScript</div>
          <div className="tech">Node.js</div>
          <div className="tech">PostgreSQL</div>
        </div>
      </section>

      <section className="fade-section contact">
        <h2>Contáctanos</h2>
        <form className="contact-form">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="Mensaje" rows={5} required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Tu Empresa de Software. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos de Servicio</a>
        </div>
      </footer>
    </div>
  );
}
