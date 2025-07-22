import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const FreeResourcesSection = ({ trackLinkClick }) => {
  const navigate = useNavigate();
  const { getLocalizedPath } = useLanguage();
  const resources = [
    {
      id: 1,
      icon: 'bi bi-robot',
      title: 'Evaluación de Competencias en IA (eng)',
      titleSpan: 'Competencias en IA  (eng)',
      description: 'Descubre qué tan avanzada está tu organización en el uso de inteligencia artificial para el aprendizaje. Evaluación interactiva con recomendaciones personalizadas.',
      delay: '100',
      action: () => {
        trackLinkClick('AI Proficiency Challenge', 'Free Resources');
        // Navigate to dedicated AI Proficiency Challenge page
        navigate(getLocalizedPath('/ai-proficiency-challenge'));
      },
      isButton: true
    },
    {
      id: 2,
      icon: 'bi bi-book',
      title: 'Guía de Mejores Prácticas',
      titleSpan: 'Mejores Prácticas',
      description: 'Manual completo con estrategias probadas para diseñar cursos efectivos, aumentar el engagement estudiantil y optimizar resultados de aprendizaje.',
      delay: '200',
      action: () => {
        trackLinkClick('Best Practices Guide', 'Free Resources');
        navigate(getLocalizedPath('/coming-soon?resource=Mejores%20Prácticas'));
      },
      isButton: true
    },
    {
      id: 3,
      icon: 'bi bi-calculator',
      title: 'Calculadora de ROI eLearning',
      titleSpan: 'ROI eLearning',
      description: 'Herramienta interactiva para calcular el retorno de inversión de tus proyectos de eLearning y justificar el presupuesto ante stakeholders.',
      delay: '300',
      action: () => {
        trackLinkClick('ROI Calculator', 'Free Resources');
        navigate(getLocalizedPath('/coming-soon?resource=ROI%20eLearning'));
      },
      isButton: true
    },
    {
      id: 4,
      icon: 'bi bi-check2-square',
      title: 'Checklist de Implementación XR',
      titleSpan: 'Implementación XR',
      description: 'Lista completa de verificación para implementar exitosamente tecnologías de realidad extendida en programas educativos corporativos.',
      delay: '400',
      action: () => {
        trackLinkClick('XR Implementation Checklist', 'Free Resources');
        navigate(getLocalizedPath('/coming-soon?resource=Implementaci%C3%B3n%20XR'));
      },
      isButton: true
    },
    {
      id: 5,
      icon: 'bi bi-file-earmark-text',
      title: 'Plantillas de Creación de Contenido',
      titleSpan: 'Creación de Contenido',
      description: 'Conjunto de plantillas prediseñadas para acelerar la creación de contenido educativo profesional y mantener consistencia visual.',
      delay: '500',
      action: () => {
        trackLinkClick('Content Creation Templates', 'Free Resources');
        navigate(getLocalizedPath('/coming-soon?resource=Creaci%C3%B3n%20de%20Contenido'));
      },
      isButton: true
    },
    {
      id: 6,
      icon: 'bi bi-graph-up',
      title: 'Dashboard de Analíticas de Aprendizaje',
      titleSpan: 'Analíticas de Aprendizaje',
      description: 'Herramienta de visualización de datos para monitorear el progreso estudiantil, identificar patrones y optimizar estrategias educativas.',
      delay: '600',
      action: () => {
        trackLinkClick('Learning Analytics Dashboard', 'Free Resources');
        window.location.href = getLocalizedPath('/coming-soon?resource=Analíticas de Aprendizaje');
      },
      isButton: true
    }
  ];

  return (
    <section id="free-resources" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Recursos</h2>
        <div>
          {/* <span>Explora nuestros</span>
          <span className="description-title">materiales gratuitos</span> */}
        </div>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="service-header">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="service-intro">
                <h2 className="service-heading">
                  <div>Recursos educativos</div>
                  <div><span>totalmente gratuitos</span></div>
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="service-summary">
                <p>
                  Accede a evaluaciones interactivas, guías especializadas y herramientas de análisis que te permitirán evaluar y mejorar tus estrategias de eLearning.
                </p>
                {/* <a href="#free-resources" className="service-btn">
                  Explorar todos los recursos
                  <i className="bi bi-arrow-right"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {resources.map((resource) => (
            <div key={resource.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={resource.delay}>
              <div className="service-card position-relative z-1">
                <div className="service-icon" style={window.innerWidth < 768 ? { width: '100%', height: 'auto' } : { width: '100%', height: 'auto' }}>
                  <i className={resource.icon}></i>
                </div>
                
                {resource.isButton ? (
                  <button 
                    className="card-action d-flex align-items-center justify-content-center rounded-circle"
                    onClick={resource.action}
                    style={{ 
                      border: 'none', 
                      // background: 'transparent',
                      cursor: 'pointer'
                    }}
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </button>
                ) : (
                  <a href={resource.link} className="card-action d-flex align-items-center justify-content-center rounded-circle">
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                )}
                
                <h3>
                  {resource.isButton ? (
                    <button 
                      onClick={resource.action}
                      style={{ 
                        border: 'none', 
                        background: 'transparent',
                        cursor: 'pointer',
                        textAlign: 'left',
                        color: 'inherit',
                        padding: 0,
                        margin: 0,
                        fontSize: 'inherit',
                        fontWeight: 'inherit',
                        fontFamily: 'inherit'
                      }}
                    >
                      {resource.title.split(' ')[0]} <span>{resource.titleSpan || resource.title.split(' ').slice(1).join(' ')}</span>
                    </button>
                  ) : (
                    <a href={resource.link}>
                      {resource.title.split(' ')[0]} <span>{resource.titleSpan || resource.title.split(' ').slice(1).join(' ')}</span>
                    </a>
                  )}
                </h3>
                <p>{resource.description}</p>
                
                {resource.comingSoon && (
                  <div style={{ 
                    position: 'absolute', 
                    top: '10px', 
                    right: '10px', 
                    background: 'var(--accent-color)', 
                    color: 'white', 
                    padding: '4px 8px', 
                    borderRadius: '12px', 
                    fontSize: '0.7rem',
                    fontWeight: 'bold'
                  }}>
                    Próximamente
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeResourcesSection;