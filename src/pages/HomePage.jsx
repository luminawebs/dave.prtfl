import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import {
  trackButtonClick,
  trackContactClick,
  trackFormSubmission
} from '../utils/unifiedAnalytics';
import ClarityTestComponent from '../components/ClarityTestComponent';
import HeroBanner from '../components/HeroBanner';


const HomePage = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { getLocalizedPath } = useLanguage();

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
  }, [location.hash]); // Listen for hash changes


  return (
    <main className="main">
      <section id="hero" className="hero section">


        <HeroBanner />


      </section>

      {/* <!-- About Section --> */}
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('about.title')}</h2>
          <div><span>{t('about.subtitle')}</span> <span className="description-title">{t('about.subtitleHighlight')}</span></div>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center">
            {/* Professional Profile */}
            <div className="col-lg-6">
              <div className="about-content">
                <div className="experience-badge">
                  <span className="badge bg-primary">{t('about.yearsExperience')}</span>
                </div>
                <h2 className="about-title">{t('about.mainTitle')}</h2>
                <p className="lead-text">{t('about.leadText')}</p>
                <p className="description">{t('about.description')}</p>

                {/* Key Skills */}
                <div className="skills-section mb-4">
                  <h4>{t('about.skills.title')}</h4>
                  <div className="row">
                    {t('about.skills.list').map((skill, index) => (
                      <div key={index} className="col-md-6 mb-2">
                        <div className="skill-item">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          <span>{skill}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a href="#experience" className="btn btn-primary">{t('about.ctaButton')}</a>
              </div>
            </div>

            {/* Experience & Education */}
            <div className="col-lg-6">
              <div className="experience-education">
                {/* Current Role */}
                <div className="current-role mb-4">
                  <h4 className="section-subtitle">{t('about.experience.title')}</h4>
                  <div className="current-position">
                    <h5 className="position-title">{t('about.experience.currentRole')}</h5>
                    <span className="period">Marzo 2025 - Presente</span>
                  </div>
                </div>

                {/* Sectors */}
                <div className="sectors-section mb-4">
                  <h4 className="section-subtitle">{t('about.sectors.title')}</h4>
                  <div className="sectors-list">
                    {t('about.sectors.list').map((sector, index) => (
                      <span key={index} className="sector-tag">{sector}</span>
                    ))}
                  </div>
                </div>

                {/* Education Highlights */}
                <div className="education-section">
                  <h4 className="section-subtitle">{t('about.education.title')}</h4>
                  <div className="education-item">
                    <h6 className="degree-title">{t('about.education.masters')}</h6>
                  </div>
                  <div className="education-item">
                    <h6 className="degree-title">{t('about.education.specialization')}</h6>
                  </div>
                  <div className="certifications">
                    <small>Certificaciones: PSM I, UX Research, Articulate</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Row */}
          <div className="row features-row mt-5">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="bi bi-rocket-takeoff"></i>
                </div>
                <div className="feature-content">
                  <h4>{t('about.integralSupport')}</h4>
                  <p>{t('about.integralSupportDesc')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="feature-content">
                  <h4>{t('about.pedagogicalTech')}</h4>
                  <p>{t('about.pedagogicalTechDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /About Section --> */}

      {/* <!-- Professional Experience Section --> */}
      <section id="experience" className="experience section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('experience.title')}</h2>
          <div><span>{t('experience.subtitle')}</span> <span className="description-title">{t('experience.subtitleHighlight')}</span></div>
          <p className="section-description">{t('experience.description')}</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          {/* Professional Stats */}
          <div className="row stats-row mb-5">
            <div className="col-lg-3 col-md-6">
              <div className="stat-card" data-aos="zoom-in" data-aos-delay="100">
                <div className="stat-number">{t('experience.stats.experience')}</div>
                <div className="stat-label">{t('experience.stats.experienceLabel')}</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-card" data-aos="zoom-in" data-aos-delay="200">
                <div className="stat-number">{t('experience.stats.projects')}</div>
                <div className="stat-label">{t('experience.stats.projectsLabel')}</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
                <div className="stat-number">{t('experience.stats.sectors')}</div>
                <div className="stat-label">{t('experience.stats.sectorsLabel')}</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-card" data-aos="zoom-in" data-aos-delay="400">
                <div className="stat-number">{t('experience.stats.certifications')}</div>
                <div className="stat-label">{t('experience.stats.certificationsLabel')}</div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          {/* <div className="experience-timeline">
            {t('experience.roles').map((role, index) => (
              <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                
                <div className="timeline-card">
                  <div className="card-header">
                    <div className="company-info">
                      <div className="row">
                        <h3 className="position-title col-lg-8">{role.position}</h3>
                        <span className="period col-lg-4">{role.period}</span>
                      </div>
                    </div>
                    <div className="period-info">
                      <h4 className="company-name">{role.company}</h4>
                      <span className="duration">({role.duration})</span>
                      <span className="location">{role.location}</span>
                    </div>
                  </div>

                  <div className="card-body">
                    <p className="role-description">{role.description}</p>

                    {role.achievements && (
                      <div className="achievements">
                        <h5>Logros Principales:</h5>
                        <ul>
                          {role.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {role.technologies && (
                      <div className="technologies">
                        <h6>Tecnologías & Herramientas:</h6>
                        <div className="tech-tags">
                          {role.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div> */}

        
        </div>
      </section>
      {/* <!-- /Professional Experience Section --> */}

      <section id="services" className="services section">

        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('services.title')}</h2>
          <div>
            <span>{t('services.subtitle')}</span>
            <span className="description-title">{t('services.subtitleHighlight')}</span>
          </div>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="service-header">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12">
                <div className="service-intro">
                  <h2 className="service-heading">
                    <div>{t('services.mainHeading')}</div>
                    <div><span>{t('services.mainHeadingHighlight')}</span></div>
                  </h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="service-summary">
                  <p>
                    {t('services.summary')}
                  </p>
                  <a href="#services" className="service-btn">
                    {t('services.viewAllSolutions')}
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">


            {/* <!-- Service 3: 3D Characters --> */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className="bi bi-person-video3"></i>
                </div>

                <Link to={getLocalizedPath('/personajes3d#hero')} className="card-action d-flex align-items-center justify-content-center rounded-circle"><i className="bi bi-arrow-up-right"></i></Link>
                <h3>
                  <Link to={getLocalizedPath('/personajes3d#hero')} className="active">{t('services.avatars3d.title')}</Link>
                </h3>
                <p>
                  {t('services.avatars3d.description')}
                </p>
              </div>
            </div>


            {/* <!-- Service 1: Articulate Content --> */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className="bi bi-laptop"></i>
                </div>
                <a href="#navmenu" className="card-action d-flex align-items-center justify-content-center rounded-circle">
                  <i className="bi bi-arrow-up-right"></i>
                </a>
                <h3>
                  <a href="#navmenu">
                    {t('services.articulate.title')} <span>{t('services.articulate.titleHighlight')}</span>
                  </a>
                </h3>
                <p>
                  {t('services.articulate.description')}
                </p>
              </div>
            </div>

            {/* <!-- Service 2: HTML5 Multimedia --> */}
            {/* <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className="bi bi-code-square"></i>
                </div>
                <a href="#navmenu" className="card-action d-flex align-items-center justify-content-center rounded-circle">
                  <i className="bi bi-arrow-up-right"></i>
                </a>
                <h3>
                  <a href="#navmenu">
                    {t('services.html5.title')} <span>{t('services.html5.titleHighlight')}</span>
                  </a>
                </h3>
                <p>
                  {t('services.html5.description')}
                </p>
              </div>
            </div> */}



            {/* <!-- Service 4: Rapid Course Platform --> */}
            {/* <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className="bi bi-lightning-charge"></i>
                </div>
                <a href="#navmenu" className="card-action d-flex align-items-center justify-content-center rounded-circle">
                  <i className="bi bi-arrow-up-right"></i>
                </a>
                <h3>
                  <a href="#navmenu">
                    {t('services.platform.title')} <span>{t('services.platform.titleHighlight')}</span>
                  </a>
                </h3>
                <p>
                  {t('services.platform.description')}
                </p>
              </div>
            </div> */}

            {/* <!-- Service 5: Video Production --> */}
            {/* <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className="bi bi-camera-reels"></i>
                </div>
                <a href="#navmenu" className="card-action d-flex align-items-center justify-content-center rounded-circle">
                  <i className="bi bi-arrow-up-right"></i>
                </a>
                <h3>
                  <a href="#navmenu">
                    {t('services.video.title')} <span>{t('services.video.titleHighlight')}</span>
                  </a>
                </h3>
                <p>
                  {t('services.video.description')}
                </p>
              </div>
            </div> */}

            {/* <!-- Service 6: LMS Integration --> */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className="bi bi-puzzle"></i>
                </div>
                <a href="#navmenu" className="card-action d-flex align-items-center justify-content-center rounded-circle">
                  <i className="bi bi-arrow-up-right"></i>
                </a>
                <h3>
                  <a href="#navmenu">
                    {t('services.lms.title')} <span>{t('services.lms.titleHighlight')}</span>
                  </a>
                </h3>
                <p>
                  {t('services.lms.description')}
                </p>
              </div>
            </div>
          </div>

        </div>

      </section>




              {/* <experienceTimeline /> */}



      {/* <!-- /Steps Section --> */}

      {/* <!-- Call To Action Section --> */}
      <section id="call-to-action" className="call-to-action section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="advertise-1 d-flex flex-column flex-lg-row gap-4 align-items-center position-relative">

            {/* <!-- Left Content --> */}
            <div className="content-left flex-grow-1" data-aos="fade-right" data-aos-delay="200">
              <span className="badge text-uppercase mb-2">{t('cta.badge')}</span>
              <h2>{t('cta.title')}</h2>
              <p className="my-4">{t('cta.description')}</p>

              <div className="features d-flex flex-wrap gap-3 mb-4">
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>{t('cta.feature1')}</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>{t('cta.feature2')}</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>{t('cta.feature3')}</span>
                </div>
              </div>

              <div className="cta-buttons d-flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="btn btn-primary"
                  onClick={() => trackButtonClick('CTA - Solicitar demostración', 'Call to Action')}
                >
                  {t('cta.primaryButton')}
                </a>
                <a
                  href="#services"
                  className="btn btn-outline"
                  onClick={() => trackButtonClick('CTA - Ver casos de éxito', 'Call to Action')}
                >
                  {t('cta.secondaryButton')}
                </a>
              </div>
            </div>

            {/* <!-- Right Content --> */}
            <div className="content-right position-relative" data-aos="fade-left" data-aos-delay="300">
              <img src="assets/img/misc/misc-1.webp" alt="Plataforma de eLearning"
                className="img-fluid rounded-4" />
              <div className="floating-card">
                <div className="card-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <div className="card-content">
                  <span className="stats-number">95%</span>
                  <span className="stats-text">{t('cta.statsText')}</span>
                </div>
              </div>
            </div>

            {/* <!-- Decorative Elements --> */}
            <div className="decoration">
              <div className="circle-1"></div>
              <div className="circle-2"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /Faq Section --> */}
      <section id="contact" className="contact section">

        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('contact.title')}</h2>
          <div><span>{t('contact.subtitle')}</span> <span className="description-title">{t('contact.subtitleHighlight')}</span></div>
        </div>
        {/* <!-- End Section Title --> */}


        <div className="container" data-aos="fade-up" data-aos-delay="100">

          {/* <!-- Contact Info Boxes --> */}
          <div className="row gy-4 mb-5">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-info-box">
                <div className="icon-box">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="info-content">
                  <h4>{t('contact.addressTitle')}</h4>
                  <p>{t('contact.address')}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="contact-info-box">
                <div className="icon-box">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="info-content">
                  <h4>{t('contact.emailTitle')}</h4>
                  <p>
                    <a
                      href="mailto:maurizioroca@hotmail.com"
                      onClick={() => trackContactClick('Email', 'maurizioroca@hotmail.com')}
                    >
                      maurizioroca@hotmail.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+573103339208"
                      onClick={() => trackContactClick('Phone', '+573103339208')}
                    >
                      {t('contact.phone')}
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://linkedin.com/in/mauricio-robayo"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackContactClick('LinkedIn', 'mauricio-robayo')}
                    >
                      LinkedIn: {t('contact.linkedin')}
                    </a>
                  </p>
                  <p>{t('contact.contactPerson')}</p>
                </div>
              </div>
            </div>
{/* 
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="contact-info-box">
                <div className="icon-box">
                  <i className="bi bi-headset"></i>
                </div>
                <div className="info-content">
                  <h4>{t('contact.scheduleTitle')}</h4>
                  <p>{t('contact.weekdays')}</p>
                  <p>{t('contact.saturday')}</p>
                </div>
              </div>
            </div> */}
          </div>

        </div>

        {/* <!-- Google Maps (Full Width) --> */}
        <div className="map-section" data-aos="fade-up" data-aos-delay="200">
          {/* <!-- <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
              width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe> --> */}
        </div>

        {/* <!-- Contact Form Section (Overlapping) --> */}
        <div className="container form-container-overlap">
          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-10">
              <div className="contact-form-wrapper">
                <h2 className="text-center mb-4">{t('contact.formTitle')}</h2>

                <form
                  action="https://formspree.io/f/mblovblv"
                  method="POST"
                  className="php-email-form"
                  onSubmit={() => trackFormSubmission('Contact Form', 'main_contact')}
                >
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="input-with-icon">
                          <i className="bi bi-person"></i>
                          <input type="text" className="form-control" name="name" placeholder={t('contact.form.namePlaceholder')} required />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="input-with-icon">
                          <i className="bi bi-envelope"></i>
                          <input type="email" className="form-control" name="email" placeholder={t('contact.form.emailPlaceholder')}
                            required />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="input-with-icon">
                          <i className="bi bi-text-left"></i>
                          <input type="text" className="form-control" name="subject" placeholder={t('contact.form.subjectPlaceholder')} required />
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <div className="input-with-icon">
                          <i className="bi bi-chat-dots message-icon"></i>
                          <textarea className="form-control" name="message" placeholder={t('contact.form.messagePlaceholder')}
                            style={{ height: '180px' }} required></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="loading">{t('contact.form.loading')}</div>
                      <div className="error-message"></div>
                      <div className="sent-message">{t('contact.form.successMessage')}</div>
                    </div>

                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-primary btn-submit">{t('contact.form.submitButton')}</button>
                    </div>
                  </div>
                </form>


              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Development Only - Clarity Test Component */}
      {process.env.NODE_ENV === 'development' && (
        <section className="container my-5">
          <ClarityTestComponent />
        </section>
      )}

      {/* Rest of sections... */}
    </main>
  );
};

export default HomePage;

