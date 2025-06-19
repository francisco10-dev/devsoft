import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-primary">3o</span>
          <span className="logo-secondary">Digital</span>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#benefits">Beneficios</a></li>
            <li><a href="#technologies">Tecnologías</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
        <button className="btn btn-secondary">Contactar</button>
      </div>
    </header>
  )
}

export default Header