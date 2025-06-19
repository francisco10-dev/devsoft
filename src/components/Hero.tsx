import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Impulsamos tu negocio con soluciones tecnológicas a medida</h1>
          <p className="hero-subtitle">Desarrollo de software personalizado que se adapta a tus necesidades y escala con tu empresa.</p>
          <div className="hero-cta">
            <button className="btn btn-primary">Comenzar proyecto</button>
            <button className="btn btn-secondary">Saber más</button>
          </div>
        </div>
        <div className="hero-imag">
           <img src="/logo3o.png" alt="Desarrollo de software" />
        </div>
      </div>
    </section>
  )
}

export default Hero