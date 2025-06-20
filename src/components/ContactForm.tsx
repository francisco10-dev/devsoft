import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    alert(
      "Gracias por contactarnos. Nos pondremos en contacto contigo pronto."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      service: "",
    });
  };

  return (
    <div className="contact-form-container">
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Contáctanos</h2>
            <p className="section-subtitle">
              Estamos listos para convertir tus ideas en realidad
            </p>

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

              <button type="submit" className="btn btn-primary">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="map">
        <iframe
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12261.34618884912!2d-84.15581532324256!3d9.918871930039412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fc89ffb80fe9%3A0x24fbc782c723412d!2zU2FuIEpvc8OpLCBFc2NhesO6!5e1!3m2!1ses!2scr!4v1750393109216!5m2!1ses!2scr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
