import React from 'react'

const Services: React.FC = () => {
  const services = [
    {
      title: 'Desarrollo Web',
      description: 'Creación de sitios y aplicaciones web modernas, escalables y de alto rendimiento.',
      icon: '💻'
    },
    {
      title: 'Aplicaciones Móviles',
      description: 'Desarrollo de apps nativas e híbridas para iOS y Android con las últimas tecnologías.',
      icon: '📱'
    },
    {
      title: 'Software a Medida',
      description: 'Soluciones personalizadas diseñadas específicamente para tus necesidades empresariales.',
      icon: '🛠️'
    },
    {
      title: 'Consultoría TI',
      description: 'Asesoramiento experto para optimizar tus procesos tecnológicos y aumentar la eficiencia.',
      icon: '📊'
    },
    {
      title: 'Cloud Computing',
      description: 'Implementación y migración a la nube para mayor flexibilidad y escalabilidad.',
      icon: '☁️'
    },
    {
      title: 'Mantenimiento',
      description: 'Soporte continuo y actualizaciones para mantener tu software en óptimas condiciones.',
      icon: '🔧'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">Ofrecemos soluciones tecnológicas completas para impulsar tu negocio</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">Más información →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services