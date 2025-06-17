import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Smartphone, Globe, Database, Users, Award, Star, Mail, Phone, MapPin, Menu, X, ArrowRight } from 'lucide-react';
import '../styles/LandingStyles.css'

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  company: string;
  content: string;
  rating: number;
}

const SoftwareLandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services: Service[] = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desarrollo Web",
      description: "Aplicaciones web modernas y escalables con las últimas tecnologías"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Apps Móviles",
      description: "Desarrollo nativo e híbrido para iOS y Android"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Soluciones Cloud",
      description: "Arquitecturas cloud seguras y eficientes"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Bases de Datos",
      description: "Diseño y optimización de sistemas de datos"
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "María González",
      company: "TechCorp",
      content: "Excelente trabajo. Entregaron el proyecto a tiempo y superaron nuestras expectativas.",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      company: "StartupXYZ",
      content: "Profesionales excepcionales. Nos ayudaron a escalar nuestro negocio digitalmente.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      company: "RetailPlus",
      content: "La calidad del código y la atención al cliente son incomparables.",
      rating: 5
    }
  ];

  const technologies = [
    "React", "Node.js", "TypeScript", "Python", "AWS", "Docker", "MongoDB", "PostgreSQL"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'navbar-blur shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">DevSoft</h1>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
                <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">Beneficios</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonios</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Servicios</a>
              <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beneficios</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Testimonios</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-bg pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h1 className="hero-title text-4xl md:text-6xl font-bold text-white mb-6">
                Impulsamos tu negocio con 
                <span className="text-yellow-300"> soluciones tecnológicas</span> a medida
              </h1>
              <p className="hero-subtitle text-xl text-gray-100 mb-8">
                Transformamos ideas en software innovador que impulsa el crecimiento de tu empresa
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary px-8 py-4 text-white font-semibold rounded-lg flex items-center justify-center gap-2">
                  Empezar proyecto
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="btn-secondary px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-50">
                  Ver portafolio
                </button>
              </div>
            </div>
            
            <div className="animate-slideInRight">
              <div className="relative">
                <div className="animate-float">
                  <svg className="w-full h-auto max-w-lg mx-auto" viewBox="0 0 400 300" fill="none">
                    <rect x="50" y="50" width="300" height="200" rx="10" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2"/>
                    <rect x="70" y="70" width="260" height="30" rx="5" fill="#3b82f6"/>
                    <rect x="70" y="120" width="120" height="80" rx="5" fill="#f3f4f6"/>
                    <rect x="210" y="120" width="120" height="80" rx="5" fill="#f3f4f6"/>
                    <rect x="70" y="220" width="260" height="15" rx="3" fill="#e5e7eb"/>
                    <circle cx="100" cy="160" r="20" fill="#3b82f6"/>
                    <circle cx="240" cy="160" r="20" fill="#10b981"/>
                    <rect x="130" y="150" width="50" height="8" rx="2" fill="#6b7280"/>
                    <rect x="130" y="165" width="40" height="6" rx="1" fill="#9ca3af"/>
                    <rect x="270" y="150" width="50" height="8" rx="2" fill="#6b7280"/>
                    <rect x="270" y="165" width="40" height="6" rx="1" fill="#9ca3af"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones tecnológicas completas para hacer crecer tu negocio
            </p>
          </div>
          
          <div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué elegirnos?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Equipo Experto</h3>
                    <p className="text-gray-600">Desarrolladores senior con más de 5 años de experiencia</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Calidad Garantizada</h3>
                    <p className="text-gray-600">Código limpio, escalable y con las mejores prácticas</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <ChevronRight className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Entrega Rápida</h3>
                    <p className="text-gray-600">Metodologías ágiles para entregas en tiempo récord</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slideInRight">
              <div className="relative">
                <img 
                  src="data:image/svg+xml,%3Csvg width='500' height='400' viewBox='0 0 500 400' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='500' height='400' fill='%23f8fafc'/%3E%3Crect x='50' y='50' width='400' height='300' rx='20' fill='%23ffffff' stroke='%23e2e8f0' stroke-width='2'/%3E%3Ccircle cx='250' cy='150' r='40' fill='%233b82f6'/%3E%3Crect x='180' y='220' width='140' height='20' rx='10' fill='%23e2e8f0'/%3E%3Crect x='200' y='260' width='100' height='15' rx='7' fill='%23cbd5e1'/%3E%3Crect x='100' y='320' width='60' height='10' rx='5' fill='%2310b981'/%3E%3Crect x='180' y='320' width='80' height='10' rx='5' fill='%23f59e0b'/%3E%3Crect x='280' y='320' width='70' height='10' rx='5' fill='%23ef4444'/%3E%3C/svg%3E"
                  alt="Desarrollo de software"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-gray-600">Testimonios reales de empresas que confían en nosotros</p>
          </div>
          
          <div className="testimonial-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card bg-gray-50 p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tecnologías que utilizamos</h2>
            <p className="text-xl text-gray-300">Trabajamos con las tecnologías más modernas y demandadas</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-badge px-6 py-3 bg-gray-800 text-white rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl font-bold mb-6">¿Listo para empezar?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Contáctanos y recibe una consulta gratuita para tu proyecto
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-200" />
                  <span className="text-blue-100">info@devsoft.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-200" />
                  <span className="text-blue-100">+506 2222-3333</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-blue-200" />
                  <span className="text-blue-100">San José, Costa Rica</span>
                </div>
              </div>
            </div>
            
            <div className="animate-slideInRight">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>
                
                <button
                  onClick={() => alert('Mensaje enviado! Nos pondremos en contacto contigo pronto.')}
                  className="w-full btn-primary px-6 py-3 text-white font-semibold rounded-lg"
                >
                  Enviar mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">DevSoft</h3>
              <p className="text-gray-400">
                Transformamos ideas en soluciones tecnológicas innovadoras
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Desarrollo Web</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apps Móviles</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Soluciones Cloud</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consultoría</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portafolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-400">
                <p>info@devsoft.com</p>
                <p>+506 2222-3333</p>
                <p>San José, Costa Rica</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DevSoft. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SoftwareLandingPage;