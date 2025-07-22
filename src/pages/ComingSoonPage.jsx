import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MinimalistLayout from '../components/MinimalistLayout';
import { trackPageView } from '../utils/analytics';

const ComingSoonPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const resourceName = searchParams.get('resource') || 'Resource';

  useEffect(() => {
    trackPageView(`${resourceName} - Coming Soon`);
  }, [resourceName]);

  const goBack = () => {
    navigate('/resources');
  };

  const getResourceIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'best practices guide':
      case 'mejores prácticas':
        return 'bi bi-book';
      case 'roi calculator':
      case 'roi elearning':
        return 'bi bi-calculator';
      case 'xr implementation checklist':
      case 'implementación xr':
        return 'bi bi-check2-square';
      case 'content creation templates':
      case 'creación de contenido':
        return 'bi bi-file-earmark-text';
      case 'learning analytics dashboard':
      case 'analíticas de aprendizaje':
        return 'bi bi-graph-up';
      default:
        return 'bi bi-gear';
    }
  };

  const getResourceDescription = (name) => {
    switch (name.toLowerCase()) {
      case 'best practices guide':
      case 'mejores prácticas':
        return 'Manual completo con estrategias probadas para diseñar cursos efectivos, aumentar el engagement estudiantil y optimizar resultados de aprendizaje.';
      case 'roi calculator':
      case 'roi elearning':
        return 'Herramienta interactiva para calcular el retorno de inversión de tus proyectos de eLearning y justificar el presupuesto ante stakeholders.';
      case 'xr implementation checklist':
      case 'implementación xr':
        return 'Lista completa de verificación para implementar exitosamente tecnologías de realidad extendida en programas educativos corporativos.';
      case 'content creation templates':
      case 'creación de contenido':
        return 'Conjunto de plantillas prediseñadas para acelerar la creación de contenido educativo profesional y mantener consistencia visual.';
      case 'learning analytics dashboard':
      case 'analíticas de aprendizaje':
        return 'Herramienta de visualización de datos para monitorear el progreso estudiantil, identificar patrones y optimizar estrategias educativas.';
      default:
        return 'Este recurso estará disponible próximamente. Regístrate para recibir una notificación cuando esté listo.';
    }
  };

  return (
    <MinimalistLayout title={`${resourceName} - Coming Soon`}>
      <div className="container" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        {/* Back Navigation */}
        <div className="back-navigation">
          <button
            className="back-arrow-btn"
            onClick={goBack}
            title="Go back to Resources"
          >
            <i className="bi bi-arrow-left"></i>
            <span>Back to Resources</span>
          </button>
          <div className="navigation-logo">
            <img src="/assets/img/edunest-dark.svg" alt="Edunest" width="120" />
          </div>
        </div>

        <div className="coming-soon-card">
          <div className="coming-soon-content">
            <div className="resource-icon">
              <i className={getResourceIcon(resourceName)}></i>
            </div>
            
            <h1>{resourceName}</h1>
            <div className="coming-soon-badge">Próximamente</div>
            
            <p className="resource-description">
              {getResourceDescription(resourceName)}
            </p>
            
            <div className="notify-section">
              <h3>¿Te interesa este recurso?</h3>
              <p>Regístrate para recibir una notificación cuando esté disponible.</p>
              
              <div className="notify-form">
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="tu-email@empresa.com"
                    className="email-input"
                  />
                  <button className="btn btn-primary">
                    Notificarme
                  </button>
                </div>
              </div>
            </div>
            
            <div className="alternative-actions">
              <h4>Mientras tanto...</h4>
              <div className="action-buttons">
                <button 
                  className="btn btn-secondary"
                  onClick={() => navigate('/ai-proficiency-challenge')}
                >
                  <i className="bi bi-robot"></i>
                  Tomar el AI Challenge
                </button>
                <a 
                  href="#contact" 
                  className="btn btn-outline"
                >
                  <i className="bi bi-chat-dots"></i>
                  Hablar con un Experto
                </a>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .back-navigation {
            margin-bottom: 2rem;
          }
          
          .back-arrow-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.25rem;
            background: transparent;
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            color: var(--default-color);
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
          }
          
          .back-arrow-btn:hover {
            border-color: var(--accent-color);
            background-color: rgba(227, 161, 39, 0.1);
            color: var(--accent-color);
            transform: translateX(-2px);
          }
          
          .coming-soon-card {
            background: var(--surface-color);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            padding: 3rem;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
          }
          
          .resource-icon {
            width: 80px;
            height: 80px;
            background: rgba(227, 161, 39, 0.1);
            border: 2px solid rgba(227, 161, 39, 0.3);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 2rem;
          }
          
          .resource-icon i {
            font-size: 2.5rem;
            color: var(--accent-color);
          }
          
          h1 {
            color: var(--heading-color);
            font-family: var(--heading-font);
            margin-bottom: 1rem;
            font-size: 2.5rem;
            font-weight: 600;
          }
          
          .coming-soon-badge {
            display: inline-block;
            background: var(--accent-color);
            color: white;
            padding: 0.5rem 1.5rem;
            border-radius: 25px;
            font-weight: 600;
            font-size: 0.9rem;
            margin-bottom: 2rem;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .resource-description {
            color: var(--default-color);
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 3rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .notify-section {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 2rem;
            margin-bottom: 2rem;
          }
          
          .notify-section h3 {
            color: var(--heading-color);
            margin-bottom: 0.5rem;
          }
          
          .notify-section p {
            color: var(--default-color);
            margin-bottom: 1.5rem;
          }
          
          .form-group {
            display: flex;
            gap: 1rem;
            max-width: 400px;
            margin: 0 auto;
          }
          
          .email-input {
            flex: 1;
            padding: 0.8rem 1rem;
            border: 2px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.02);
            color: var(--default-color);
            font-size: 1rem;
          }
          
          .email-input:focus {
            outline: none;
            border-color: var(--accent-color);
          }
          
          .email-input::placeholder {
            color: rgba(255, 255, 255, 0.4);
          }
          
          .btn {
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.9rem;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .btn-primary {
            background: var(--accent-color);
            color: white;
          }
          
          .btn-primary:hover {
            background: color-mix(in srgb, var(--accent-color), black 10%);
            transform: translateY(-2px);
          }
          
          .btn-secondary {
            background: rgba(227, 161, 39, 0.1);
            color: var(--accent-color);
            border: 2px solid rgba(227, 161, 39, 0.3);
          }
          
          .btn-secondary:hover {
            background: rgba(227, 161, 39, 0.2);
            border-color: var(--accent-color);
          }
          
          .btn-outline {
            background: transparent;
            color: var(--default-color);
            border: 2px solid rgba(255, 255, 255, 0.2);
          }
          
          .btn-outline:hover {
            border-color: var(--accent-color);
            color: var(--accent-color);
          }
          
          .alternative-actions {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 2rem;
          }
          
          .alternative-actions h4 {
            color: var(--heading-color);
            margin-bottom: 1.5rem;
          }
          
          .action-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }
          
          @media (max-width: 768px) {
            .coming-soon-card {
              padding: 2rem 1.5rem;
            }
            
            h1 {
              font-size: 2rem;
            }
            
            .form-group {
              flex-direction: column;
              max-width: 100%;
            }
            
            .action-buttons {
              flex-direction: column;
              align-items: center;
            }
            
            .btn {
              min-width: 200px;
              justify-content: center;
            }
          }
        `}</style>
      </div>
    </MinimalistLayout>
  );
};

export default ComingSoonPage;

