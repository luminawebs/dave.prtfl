import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';


const Personajes3DPage = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('tab1');

  // Handle tab clicks
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

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



    <div className="personajes3d-page">

      <div className="page-title dark-background aos-init aos-animate" data-aos="fade">
        <div className="container position-relative">
          <h1>{t('personajes3d.title')}</h1>
          <p>{t('personajes3d.subtitle')}</p>
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

      {/* <section id="hero" className=" section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 content-col" data-aos="fade-up">
              <div className="content">
                <div className="agency-name">
                  <h5>Experiencias inmersivas con personajes tridimensionales</h5>
                </div>

                <div className="main-heading">
                  <h1>Avatars 3D</h1>
                </div>

                <div className="divider"></div>

                <div className="description">
                  <p>Descubre estrategias innovadoras para la educación digital. Transformamos contenidos en experiencias
                    interactivas que cautivan a los estudiantes. Nuestro equipo especializado combina tecnología
                    pedagógica y diseño impactante para crear cursos que destacan en el competitivo mundo del aprendizaje
                    en línea.</p>
                </div>

                <div className="cta-button">
                  <a href="#services" className="btn">
                    <span>VER SERVICIOS</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-12" data-aos="zoom-out">
              <div className="visual-content">
                <div className="fluid-shape">
                  <div style={{ position: 'relative', paddingTop: '56.25%' }}><iframe
                    src="https://iframe.mediadelivery.net/embed/354319/33fc09af-d689-4669-8c79-82816f38f0a7?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
                    loading="lazy" style={{
                      border: '0',
                      position: 'absolute',
                      top: '0',
                      height: '100%',
                      width: '100%'
                    }}
                    allow="accelerometer;gyroscope;encrypted-media;picture-in-picture;"
                    allowFullScreen={true}
                    title={t('personajes3d.videoTitle')}></iframe></div>
                </div>

                <div className="stats-card">
                  <div className="stats-number">
                    <h2>100+</h2>
                  </div>
                  <div className="stats-label">
                    <p>Cursos Implementados</p>
                  </div>
                  <div className="stats-arrow">
                    <a href="#portafolio"><i className="bi bi-arrow-up-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
     



      <section id="service-details" className="service-details section">

        <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

          <div className="row gy-5">

            <div className="col-lg-8 order-lg-1 order-2">


    <div style={{ position: 'relative', paddingTop: '56.25%', marginBottom: '30px' }}><iframe
                    src="https://iframe.mediadelivery.net/embed/354319/33fc09af-d689-4669-8c79-82816f38f0a7?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
                    loading="lazy" style={{
                      border: '0',
                      position: 'absolute',
                      top: '0',
                      height: '100%',
                      width: '100%'
                    }}
                    allow="accelerometer;gyroscope;encrypted-media;picture-in-picture;"
                    allowFullScreen={true}
                    title={t('personajes3d.videoTitle')}></iframe></div>


              <div className="service-main-content">
                <div className="service-header aos-init aos-animate" data-aos="fade-up">
                  <h1>{t('personajes3d.mainHeading')}</h1>
                  <div className="service-meta">
                    <span><i className="bi bi-award"></i> {t('personajes3d.meta.affordable')}</span>
                    <span><i className="bi bi-clock"></i> {t('personajes3d.meta.delivery')}</span>
                    <span><i className="bi bi-star-fill"></i> {t('personajes3d.meta.retention')}</span>
                  </div>
                  <p className="lead">
                    {t('personajes3d.leadText')}
                  </p>
                </div>

                <div className="service-tabs aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                  <div className="tab-container">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button 
                          className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
                          onClick={() => setActiveTab('tab1')}
                          type="button"
                          role="tab"
                        >
                          <i className="bi bi-info-circle"></i> {t('personajes3d.tabs.whyThreeD')}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button 
                          className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
                          onClick={() => setActiveTab('tab2')}
                          type="button"
                          role="tab"
                        >
                          <i className="bi bi-diagram-3"></i> {t('personajes3d.tabs.stepByStep')}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button 
                          className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
                          onClick={() => setActiveTab('tab3')}
                          type="button"
                          role="tab"
                        >
                          <i className="bi bi-graph-up-arrow"></i> {t('personajes3d.tabs.benefits')}
                        </button>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div className={`tab-pane ${activeTab === 'tab1' ? 'show active' : ''}`} role="tabpanel">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="content-block">
                              <h3>{t('personajes3d.whyThreeD.title')}</h3>
                              <p>{t('personajes3d.whyThreeD.stat1')}</p>
                              <p>{t('personajes3d.whyThreeD.stat2')}</p>
                              <p>{t('personajes3d.whyThreeD.stat3')}</p>
                              <p>{t('personajes3d.whyThreeD.stat4')}</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <img src="/assets/img/services/3d_assistants.png" alt={t('personajes3d.whyThreeD.imageAlt')} className="img-fluid rounded" />
                          </div>
                        </div>
                      </div>

                      <div className={`tab-pane ${activeTab === 'tab2' ? 'show active' : ''}`} role="tabpanel">
                        <div className="process-timeline">
                          <div className="timeline-item">
                            <div className="timeline-marker">{t('personajes3d.stepByStep.step1.number')}</div>
                            <div className="timeline-content">
                              <h4>{t('personajes3d.stepByStep.step1.title')}</h4>
                              <p>{t('personajes3d.stepByStep.step1.description')}</p>
                            </div>
                          </div>
                          <div className="timeline-item">
                            <div className="timeline-marker">{t('personajes3d.stepByStep.step2.number')}</div>
                            <div className="timeline-content">
                              <h4>{t('personajes3d.stepByStep.step2.title')}</h4>
                              <p>{t('personajes3d.stepByStep.step2.description')}</p>
                            </div>
                          </div>
                          <div className="timeline-item">
                            <div className="timeline-marker">{t('personajes3d.stepByStep.step3.number')}</div>
                            <div className="timeline-content">
                              <h4>{t('personajes3d.stepByStep.step3.title')}</h4>
                              <p>{t('personajes3d.stepByStep.step3.description')}</p>
                            </div>
                          </div>
                          <div className="timeline-item">
                            <div className="timeline-marker">{t('personajes3d.stepByStep.step4.number')}</div>
                            <div className="timeline-content">
                              <h4>{t('personajes3d.stepByStep.step4.title')}</h4>
                              <p>{t('personajes3d.stepByStep.step4.description')}</p>
                            </div>
                          </div>
                          <div className="timeline-item">
                            <div className="timeline-marker">{t('personajes3d.stepByStep.step5.number')}</div>
                            <div className="timeline-content">
                              <h4>{t('personajes3d.stepByStep.step5.title')}</h4>
                              <p>{t('personajes3d.stepByStep.step5.description')}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={`tab-pane ${activeTab === 'tab3' ? 'show active' : ''}`} role="tabpanel">
                        <div className="row g-4">
                          <div className="col-md-6">
                            <div className="benefit-card">
                              <div className="benefit-icon">
                                <i className="bi bi-eye"></i>
                              </div>
                              <h4>{t('personajes3d.benefits.retention.title')}</h4>
                              <p>{t('personajes3d.benefits.retention.description')}</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="benefit-card">
                              <div className="benefit-icon">
                                <i className="bi bi-cash-coin"></i>
                              </div>
                              <h4>{t('personajes3d.benefits.affordable.title')}</h4>
                              <p>{t('personajes3d.benefits.affordable.description')}</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="benefit-card">
                              <div className="benefit-icon">
                                <i className="bi bi-lightning-charge"></i>
                              </div>
                              <h4>{t('personajes3d.benefits.agile.title')}</h4>
                              <p>{t('personajes3d.benefits.agile.description')}</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="benefit-card">
                              <div className="benefit-icon">
                                <i className="bi bi-bar-chart-line"></i>
                              </div>
                              <h4>{t('personajes3d.benefits.measurable.title')}</h4>
                              <p>{t('personajes3d.benefits.measurable.description')}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-gallery aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                  <h3>{t('personajes3d.gallery.title')}</h3>
                  <div className="service-details-slider swiper init-swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="portfolio-item">
                          <div style={{ position: "relative", paddingTop: "56.25%" }}>
                            <iframe
                              src="https://iframe.mediadelivery.net/embed/183081/1323c7e2-7340-4126-9268-63bd3a247164?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
                              loading="lazy"
                              style={{
                                border: 0,
                                position: "absolute",
                                top: 0,
                                height: "100%",
                                width: "100%",
                              }}
                              allow="accelerometer; gyroscope; encrypted-media; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>



                          <div className="portfolio-info">
                            <h5>{t('personajes3d.gallery.demo1.title')}</h5>
                            <p>{t('personajes3d.gallery.demo1.description')}</p>
                          </div>
                        </div>
                      </div>
                      {/* <div className="swiper-slide">
                        <div className="portfolio-item">
                          <img src="assets/img/services/services-10.webp" alt="Demo 2" className="img-fluid" loading="lazy" />
                          <div className="portfolio-info">
                            <h5>Personaje 3D Interactivo</h5>
                            <p>Guías dinámicas para plataformas LMS</p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="portfolio-item">
                          <img src="assets/img/services/services-2.webp" alt="Demo 3" className="img-fluid" loading="lazy" />
                          <div className="portfolio-info">
                            <h5>Campaña Corporativa</h5>
                            <p>Mensaje institucional con animación facial</p>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="swiper-pagination"></div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-lg-4 order-lg-2 order-1">
              <div className="service-sidebar aos-init aos-animate" data-aos="fade-left">

                <div className="action-card aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                  <h3>{t('personajes3d.cta.title')}</h3>
                  <p>{t('personajes3d.cta.description')}</p>

                  <a
                    href="https://wa.me/573103339208?text=Hola,%20quiero%20saber%20más%20sobre%20los%20asistentes%203D"
                    className="btn-primary"
                    target="_blank"
                    rel="noopener noreferrer">
                    {t('personajes3d.cta.button')}
                  </a>

                  <span className="guarantee"><i className="bi bi-shield-check"></i> {t('personajes3d.cta.guarantee')}</span>
                </div>

                <div className="service-features-list aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                  <h4>{t('personajes3d.features.title')}</h4>
                  <ul>
                    <li>
                      <i className="bi bi-person-bounding-box"></i>
                      <div>
                        <h5>{t('personajes3d.features.characters.title')}</h5>
                        <p>{t('personajes3d.features.characters.description')}</p>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-mic-fill"></i>
                      <div>
                        <h5>{t('personajes3d.features.voiceover.title')}</h5>
                        <p>{t('personajes3d.features.voiceover.description')}</p>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-film"></i>
                      <div>
                        <h5>{t('personajes3d.features.render.title')}</h5>
                        <p>{t('personajes3d.features.render.description')}</p>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-tv"></i>
                      <div>
                        <h5>{t('personajes3d.features.delivery.title')}</h5>
                        <p>{t('personajes3d.features.delivery.description')}</p>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-clock-history"></i>
                      <div>
                        <h5>{t('personajes3d.features.production.title')}</h5>
                        <p>{t('personajes3d.features.production.description')}</p>
                      </div>
                    </li>
                  </ul>
                </div>



                <div className="contact-info aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                  <h4>{t('personajes3d.contactInfo.title')}</h4>
                  <div className="contact-method">
                    <i className="bi bi-telephone-fill"></i>
                    <div>
                      <span>{t('personajes3d.contactInfo.phone.label')}</span>
                      <p>{t('personajes3d.contactInfo.phone.number')}</p>
                    </div>
                  </div>
                  <div className="contact-method">
                    <i className="bi bi-envelope-fill"></i>
                    <div>
                      <span>{t('personajes3d.contactInfo.email.label')}</span>
                      <p>{t('personajes3d.contactInfo.email.address')}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>




          </div>
        </div>

      </section>



      <section id="pricing" className="pricing section">
        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('personajes3d.pricing.title')}</h2>
          <div><span>{t('personajes3d.pricing.subtitle')}</span> <span className="description-title">{t('personajes3d.pricing.subtitleHighlight')}</span> 3D </div>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* <!-- Basic Plan --> */}
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="pricing-card">
                <div className="plan-header">
                  <div className="plan-icon">
                    <i className="bi bi-person-video3"></i>
                  </div>
                  <h3>{t('personajes3d.pricing.basic.title')}</h3>
                  <p>{t('personajes3d.pricing.basic.description')}</p>
                </div>
                <div className="plan-pricing">
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">{t('personajes3d.pricing.basic.price')}</span>
                    <span className="period">{t('personajes3d.pricing.basic.period')}</span>
                  </div>
                  <div className="price-total">{t('personajes3d.pricing.basic.total')}</div>
                </div>
                <div className="plan-features">
                  <ul>
                    {t('personajes3d.pricing.basic.features').map((feature, index) => (
                      <li key={index}><i className="bi bi-check-circle-fill"></i> {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="plan-cta">
                  <a href="#contact" className="btn-plan">{t('personajes3d.pricing.basic.button')}</a>
                </div>
              </div>
            </div>
            {/* <!-- End Basic Plan --> */}

            {/* <!-- Standard Plan --> */}
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="250">
              <div className="pricing-card popular">
                <div className="popular-tag">{t('personajes3d.pricing.standard.popular')}</div>
                <div className="plan-header">
                  <div className="plan-icon">
                    <i className="bi bi-people"></i>
                  </div>
                  <h3>{t('personajes3d.pricing.standard.title')}</h3>
                  <p>{t('personajes3d.pricing.standard.description')}</p>
                </div>
                <div className="plan-pricing">
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">{t('personajes3d.pricing.standard.price')}</span>
                    <span className="period">{t('personajes3d.pricing.standard.period')}</span>
                  </div>
                  <div className="price-total">{t('personajes3d.pricing.standard.total')}</div>
                </div>
                <div className="plan-features">
                  <ul>
                    {t('personajes3d.pricing.standard.features').map((feature, index) => (
                      <li key={index}><i className="bi bi-check-circle-fill"></i> {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="plan-cta">
                  <a href="#contact" className="btn-plan">{t('personajes3d.pricing.standard.button')}</a>
                </div>
              </div>
            </div>
            {/* <!-- End Standard Plan --> */}

            {/* <!-- Advanced Plan --> */}
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="pricing-card">
                <div className="plan-header">
                  <div className="plan-icon">
                    <i className="bi bi-stars"></i>
                  </div>
                  <h3>{t('personajes3d.pricing.advanced.title')}</h3>
                  <p>{t('personajes3d.pricing.advanced.description')}</p>
                </div>
                <div className="plan-pricing">
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">{t('personajes3d.pricing.advanced.price')}</span>
                    <span className="period">{t('personajes3d.pricing.advanced.period')}</span>
                  </div>
                  <div className="price-total">{t('personajes3d.pricing.advanced.total')}</div>
                </div>
                <div className="plan-features">
                  <ul>
                    {t('personajes3d.pricing.advanced.features').map((feature, index) => (
                      <li key={index}><i className="bi bi-check-circle-fill"></i> {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="plan-cta">
                  <a href="#contact" className="btn-plan">{t('personajes3d.pricing.advanced.button')}</a>
                </div>
              </div>
            </div>
            {/* <!-- End Advanced Plan --> */}

            {/* <!-- Premium Plan --> */}
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="350">
              <div className="pricing-card">
                <div className="plan-header">
                  <div className="plan-icon">
                    <i className="bi bi-award"></i>
                  </div>
                  <h3>{t('personajes3d.pricing.premium.title')}</h3>
                  <p>{t('personajes3d.pricing.premium.description')}</p>
                </div>
                <div className="plan-pricing">
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">{t('personajes3d.pricing.premium.price')}</span>
                    <span className="period">{t('personajes3d.pricing.premium.period')}</span>
                  </div>
                  <div className="price-total">{t('personajes3d.pricing.premium.total')}</div>
                </div>
                <div className="plan-features">
                
                  <ul>
                    {t('personajes3d.pricing.premium.features').map((feature, index) => (
                      <li key={index}><i className="bi bi-check-circle-fill"></i> {feature}</li>
                    ))}
                  </ul>

                </div>
                <div className="plan-cta">
                  <a href="#contact" className="btn-plan">{t('personajes3d.pricing.premium.button')}</a>
                </div>
              </div>
            </div>
            {/* <!-- End Premium Plan --> */}
          </div>

          {/* <!-- Terms & Conditions --> */}
          <div className="terms-conditions mt-5 pt-4" data-aos="fade-up">
            <h4>Términos y Condiciones</h4>
            <ul>
              <li><strong>Plazos:</strong> 10 días por minuto en versión Básica</li>
              <li><strong>Revisiones:</strong> 2 revisiones por minuto incluidas (adicionales $200.000 c/u)</li>
              <li><strong>Pago:</strong> Cuenta corriente 21004202069 - Lúmina Interactiva SAS</li>
              <li><strong>Derechos:</strong> El cliente tiene derechos completos sobre los videos finales</li>
              <li>Precios sujetos a cambios según complejidad del proyecto</li>
            </ul>
            <div className="text-center mt-4">
              <a href="#contact" className="btn btn-outline-primary">¿Preguntas? Contáctanos</a>
            </div>
          </div>
        </div>
      </section>
    </div>









  );
};

export default Personajes3DPage;

