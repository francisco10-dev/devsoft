import React from 'react'

const Technologies: React.FC = () => {
  const technologies = [
    { name: 'React', logo: '⚛️' },
    { name: 'TypeScript', logo: '📘' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'Python', logo: '🐍' },
    { name: 'Django', logo: 'D' },
    { name: 'AWS', logo: '☁️' },
    { name: 'Docker', logo: '🐳' },
    { name: 'Kubernetes', logo: '⎈' },
    { name: 'Flutter', logo: '📱' },
    { name: 'GraphQL', logo: '🔼' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'PostgreSQL', logo: '🐘' }
  ]

  return (
    <section id="technologies" className="technologies">
      <div className="container">
        <h2 className="section-title">Tecnologías que utilizamos</h2>
        <p className="section-subtitle">Trabajamos con las herramientas más modernas y confiables del mercado</p>
        
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-item">
              <div className="tech-logo">{tech.logo}</div>
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies