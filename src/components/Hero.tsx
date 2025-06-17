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
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Desarrollo de software" />
        </div>
      </div>
    </section>
  )
}

export default Hero