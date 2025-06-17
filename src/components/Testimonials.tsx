import React from 'react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'María González',
      position: 'CEO, FinTech Solutions',
      content: 'El equipo de DevSolutions transformó por completo nuestra plataforma. Su enfoque profesional y atención al detalle superó nuestras expectativas.',
      rating: 5
    },
    {
      name: 'Carlos Mendoza',
      position: 'CTO, RetailTech',
      content: 'Trabajar con ellos ha sido una experiencia excepcional. Entregaron el proyecto antes de lo esperado y con una calidad impecable.',
      rating: 5
    },
    {
      name: 'Ana López',
      position: 'Directora de TI, SaludDigital',
      content: 'Su solución personalizada ha optimizado nuestros procesos en un 40%. Altamente recomendados para proyectos complejos.',
      rating: 4
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Lo que dicen nuestros clientes</h2>
        <p className="section-subtitle">Testimonios de empresas que han confiado en nosotros</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials