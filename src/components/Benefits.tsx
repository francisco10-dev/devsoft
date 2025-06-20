import React from 'react'

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Experiencia técnica',
      description: 'Equipo de desarrolladores altamente cualificados con experiencia en el sector.'
    },
    {
      title: 'Metodologías ágiles',
      description: 'Trabajamos con Scrum y Kanban para garantizar entregas rápidas y de calidad.'
    },
    {
      title: 'Transparencia',
      description: 'Comunicación clara y reportes periódicos sobre el progreso de tu proyecto.'
    },
    {
      title: 'Enfoque en resultados',
      description: 'Nos alineamos con tus objetivos de negocio para ofrecer soluciones que generen valor.'
    }
  ]

  return (
    <section id="benefits" className="benefits">
      <div className="container">
        <div className="benefits-content">
          <h2 className="section-title">¿Por qué elegirnos?</h2>
          <p className="section-subtitle">Ventajas de trabajar con nosotros.</p>
          
          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-number">0{index + 1}</div>
                <div className="benefit-text">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="benefits-image">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Equipo de desarrollo" />
        </div>
      </div>
    </section>
  )
}

export default Benefits