import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '../utils/analytics';
import XRAIProficiencyChallenge from '../components/G-01-AIProficiency';
import FreeResourcesSection from '../components/Resources';

const ResourcesPage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Small delay to ensure the component is fully rendered
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <main className="main">
      {/* Hero Section for Resources */}

         <div className="page-title dark-background aos-init aos-animate" data-aos="fade">
        <div className="container position-relative">
          <h1>Recursos</h1>
          <p>Experiencias inmersivas gratuitas</p>
          <nav className="breadcrumbs">
            {/* <ol>
              <li><a href="index.html">Home</a></li>
              <li className="current">Avatars 3D<</li>
            </ol> */}

            <ol>
              <li>
                
              </li>
            </ol>
          </nav>
        </div>
      </div>
    

      {/* Free Resources Section */}
      <FreeResourcesSection trackLinkClick={trackLinkClick} />

      {/* AI Proficiency Challenge Section */}
  

      {/* Newsletter Signup Section */}
      <section id="newsletter" className="call-to-action section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="advertise-1 d-flex flex-column flex-lg-row gap-4 align-items-center position-relative">
            {/* Left Content */}
            <div className="content-left flex-grow-1" data-aos="fade-right" data-aos-delay="200">
              <span className="badge text-uppercase mb-2">¡Mantente actualizado!</span>
              <h2>Recibe nuevos recursos gratuitos cada mes</h2>
              <p className="my-4">
                Suscríbete a nuestro newsletter y recibe acceso anticipado a nuevos recursos, guías exclusivas y las últimas tendencias en tecnología educativa.
              </p>

              <div className="features d-flex flex-wrap gap-3 mb-4">
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Recursos exclusivos mensualmente</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Tendencias de la industria</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Sin spam, cancela cuando quieras</span>
                </div>
              </div>

              <div className="cta-buttons d-flex flex-wrap gap-3">
                <a 
                  href="#contact" 
                  className="btn btn-primary"
                  onClick={() => trackButtonClick('Newsletter CTA - Suscribirse', 'Resources Newsletter')}
                >
                  Suscribirse al newsletter
                </a>
                <a 
                  href="#free-resources" 
                  className="btn btn-outline"
                  onClick={() => trackButtonClick('Newsletter CTA - Ver más recursos', 'Resources Newsletter')}
                >
                  Ver más recursos
                </a>
              </div>
            </div>

            {/* Right Content */}
            <div className="content-right position-relative" data-aos="fade-left" data-aos-delay="300">
              <img src="assets/img/misc/misc-1.webp" alt="Recursos de eLearning"
                className="img-fluid rounded-4" />
              <div className="floating-card">
                <div className="card-icon">
                  <i className="bi bi-download"></i>
                </div>
                <div className="card-content">
                  <span className="stats-number">1000+</span>
                  <span className="stats-text">Descargas mensuales</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="decoration">
              <div className="circle-1"></div>
              <div className="circle-2"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResourcesPage;

