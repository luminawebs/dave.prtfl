import React from 'react';
import MinimalistLayout from '../components/MinimalistLayout';
// import { useLocation } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { trackButtonClick } from '../utils/analytics';
import ImpactoDemostrado from '../components/ImpactoDemostrado';
import FAQSection from '../components/FAQSection';


const CoursesPage = () => {
    const { t } = useTranslation();
  return (
    <MinimalistLayout title="Courses">
      <section className="page-title">
        <div className="container">
          <h1>Courses Development</h1>
          <p className="lead">Explore my catalog of cutting-edge learning experiences.</p>
        </div>
      </section>

    
    
      {/* About Section */}
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('about.title')}</h2>
          <div>
            <span>{t('about.subtitle')} </span>
            <span className="description-title">{t('about.subtitleHighlight')}</span>
          </div>
        </div>

        <div className="container">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
              <div className="about-image position-relative">
                <img src="/assets/img/courses.png" className="img-fluid rounded-4 shadow-sm" alt="Equipo de eLearning"
                  loading="lazy" />
                <div className="experience-badge">
                  <span className="years">10+</span>
                  <span className="text">{t('about.yearsExperience')}</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-left" data-aos-delay="300">
              <div className="about-content">
                <h2>{t('about.mainTitle')}</h2>
                <p className="lead">{t('about.leadText')}</p>
                <p>{t('about.description')}</p>

                <div className="row g-4 mt-3">
                  <div className="col-md-6" data-aos="zoom-in" data-aos-delay="400">
                    <div className="feature-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <h5>{t('about.integralSupport')}</h5>
                      <p>{t('about.integralSupportDesc')}</p>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="zoom-in" data-aos-delay="450">
                    <div className="feature-item">
                      <i className="bi bi-lightbulb-fill"></i>
                      <h5>{t('about.pedagogicalTech')}</h5>
                      <p>{t('about.pedagogicalTechDesc')}</p>
                    </div>
                  </div>
                </div>

                <a
                  href="#services"
                  className="btn btn-primary mt-4"
                  onClick={() => trackButtonClick('About CTA - Conoce Nuestras Soluciones', 'About')}
                >
                  {t('about.ctaButton')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <section id="steps" className="steps section">
        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('steps.title')}</h2>
          <div><span>{t('steps.subtitle')}</span> <span className="description-title">{t('steps.subtitleHighlight')}</span></div>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="steps-wrapper">
            {/* <!-- Step 1 --> */}
            <div className="step-item" data-aos="fade-right" data-aos-delay="200">
              <div className="step-content">
                <div className="step-icon">
                  <i className="bi bi-mortarboard"></i>
                  {/* <!-- Education-focused icon --> */}
                </div>
                <div className="step-info">
                  <span className="step-number">{t('steps.step1.number')}</span>
                  <h3>{t('steps.step1.title')}</h3>
                  <p>{t('steps.step1.description')}</p>
                </div>
              </div>
            </div>
            {/* <!-- End Step Item --> */}

            {/* <!-- Step 2 --> */}
            <div className="step-item" data-aos="fade-left" data-aos-delay="300">
              <div className="step-content">
                <div className="step-icon">
                  <i className="bi bi-kanban"></i>
                  {/* <!-- Planning icon --> */}
                </div>
                <div className="step-info">
                  <span className="step-number">{t('steps.step2.number')}</span>
                  <h3>{t('steps.step2.title')}</h3>
                  <p>{t('steps.step2.description')}</p>
                </div>
              </div>
            </div>
            {/* <!-- End Step Item --> */}

            {/* <!-- Step 3 --> */}
            <div className="step-item" data-aos="fade-right" data-aos-delay="400">
              <div className="step-content">
                <div className="step-icon">
                  <i className="bi bi-code-slash"></i>
                  {/* <!-- Development icon --> */}
                </div>
                <div className="step-info">
                  <span className="step-number">{t('steps.step3.number')}</span>
                  <h3>{t('steps.step3.title')}</h3>
                  <p>{t('steps.step3.description')}</p>
                </div>
              </div>
            </div>
            {/* <!-- End Step Item --> */}

            {/* <!-- Step 4 --> */}
            <div className="step-item" data-aos="fade-left" data-aos-delay="500">
              <div className="step-content">
                <div className="step-icon">
                  <i className="bi bi-graph-up-arrow"></i>
                  {/* <!-- Results icon --> */}
                </div>
                <div className="step-info">
                  <span className="step-number">{t('steps.step4.number')}</span>
                  <h3>{t('steps.step4.title')}</h3>
                  <p>{t('steps.step4.description')}</p>
                </div>
              </div>
            </div>
            {/* <!-- End Step Item --> */}
          </div>
        </div>
      </section>
      
      <ImpactoDemostrado />
      <FAQSection />
    </MinimalistLayout>
    
  );
};

export default CoursesPage;

