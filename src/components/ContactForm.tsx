import React, { useState } from 'react'

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: ''
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="section-title">Contáctanos</h2>
          <p className="section-subtitle">Estamos listos para convertir tus ideas en realidad</p>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre completo" 
                required 
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Correo electrónico" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Teléfono" 
                />
              </div>
            </div>
            
            <div className="form-group">
              <select 
                name="service" 
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un servicio</option>
                <option value="web">Desarrollo Web</option>
                <option value="mobile">Aplicaciones Móviles</option>
                <option value="custom">Software a Medida</option>
                <option value="consulting">Consultoría TI</option>
                <option value="cloud">Cloud Computing</option>
                <option value="maintenance">Mantenimiento</option>
              </select>
            </div>
            
            <div className="form-group">
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu proyecto" 
                rows={5}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm