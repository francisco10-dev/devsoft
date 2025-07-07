import React, { useState } from "react";
import { sendEmail } from "../service/email/email";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        localStorage.setItem("contactFormSubmitted", "true");
        setSubmitStatus({
          success: true,
          message:
            "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          service: "",
        });
      } else {
        setSubmitStatus({
          success: false,
          message:
            result.error ||
            "Error al enviar el mensaje. Por favor intenta nuevamente.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Ocurrió un error inesperado. Por favor intenta más tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
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

            {submitStatus.message && (
              <div
                className={`alert ${
                  submitStatus.success ? "alert-success" : "alert-error"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            {!submitStatus.success && (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre completo"
                    required
                    disabled={isSubmitting}
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
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Teléfono"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="web">Desarrollo Web</option>
                    <option value="mobile">Aplicaciones Móviles</option>
                    <option value="custom">Software a Medida</option>
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
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            )}
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
