import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { trackButtonClick, trackContactClick } from '../utils/unifiedAnalytics';


const HomePage = () => {
  const location = useLocation();
  const { getLocalizedPath } = useLanguage();
  const { t } = useTranslation();

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
        <div className="container" data-aos="fade-up">
          <h1 className="mb-3">{t('home.hero.title')}</h1>
          <p className="lead">{t('home.hero.lead')}</p>
          <p>{t('home.hero.description')}</p>
          <div className="d-flex gap-3 mt-4">
            <Link
              to={getLocalizedPath('/contact')}
              className="btn btn-primary"
              onClick={() => trackButtonClick('Hire Me', 'Hero')}
            >
              {t('home.hero.cta.hire')}
            </Link>
            <Link
              to={getLocalizedPath('/portfolio')}
              className="btn btn-outline"
              onClick={() => trackButtonClick('View Portfolio', 'Hero')}
            >
              {t('home.hero.cta.portfolio')}
            </Link>
          </div>
        </div>
      </section>

      <section id="trusted" className="section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('home.trusted.title')}</h2>
          <div>{t('home.trusted.subtitle')}</div>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="d-flex flex-wrap gap-3 align-items-center">
            <span className="badge bg-light text-dark">Capgemini</span>
            <span className="badge bg-light text-dark">EAN University</span>
            <span className="badge bg-light text-dark">Sector Público</span>
            <span className="badge bg-light text-dark">EdTech</span>
          </div>
        </div>
      </section>

      <section id="what-i-do" className="section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('home.what.title')}</h2>
          <p>{t('home.what.lead')}</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="service-card h-100">
                <h3>{t('home.what.uiux.title')}</h3>
                <ul className="list-unstyled mt-3">
                  {t('home.what.uiux.items').map((i, idx) => (<li key={`uiux-${idx}`}>{i}</li>))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card h-100">
                <h3>{t('home.what.frontend.title')}</h3>
                <ul className="list-unstyled mt-3">
                  {t('home.what.frontend.items').map((i, idx) => (<li key={`fe-${idx}`}>{i}</li>))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card h-100">
                <h3>{t('home.what.lxd.title')}</h3>
                <ul className="list-unstyled mt-3">
                  {t('home.what.lxd.items').map((i, idx) => (<li key={`lxd-${idx}`}>{i}</li>))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Link
              to={getLocalizedPath('/portfolio')}
              className="btn btn-outline"
              onClick={() => trackButtonClick('See My Work', 'What I Do')}
            >
              {t('home.what.cta')}
            </Link>
          </div>
        </div>
      </section>

      <section id="case-studies" className="section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('home.case.title')}</h2>
          <p>{t('home.case.lead')}</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">{t('home.case.cards.0.title')}</h3>
                  <p className="card-text">{t('home.case.cards.0.text')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">{t('home.case.cards.1.title')}</h3>
                  <p className="card-text">{t('home.case.cards.1.text')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">{t('home.case.cards.2.title')}</h3>
                  <p className="card-text">{t('home.case.cards.2.text')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Link
              to={getLocalizedPath('/portfolio')}
              className="btn btn-outline"
              onClick={() => trackButtonClick('View All Case Studies', 'Case Studies')}
            >
              {t('home.case.cta')}
            </Link>
          </div>
        </div>
      </section>

      <section id="process" className="section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('home.process.title')}</h2>
          <p>{t('home.process.lead')}</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">{t('home.process.steps.0.title')}</h3>
                  <p className="card-text">{t('home.process.steps.0.text')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">{t('home.process.steps.1.title')}</h3>
                  <p className="card-text">{t('home.process.steps.1.text')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">{t('home.process.steps.2.title')}</h3>
                  <p className="card-text">{t('home.process.steps.2.text')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">{t('home.process.steps.3.title')}</h3>
                  <p className="card-text">{t('home.process.steps.3.text')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tech-stack" className="section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('home.stack.title')}</h2>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-3">
            <div className="col-lg-6">
              <h4>{t('home.stack.design.title')}</h4>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-light text-dark">Figma</span>
                <span className="badge bg-light text-dark">Adobe XD</span>
                <span className="badge bg-light text-dark">Prototyping</span>
                <span className="badge bg-light text-dark">UX Research</span>
              </div>
            </div>
            <div className="col-lg-6">
              <h4>{t('home.stack.frontend.title')}</h4>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-light text-dark">HTML5</span>
                <span className="badge bg-light text-dark">CSS3</span>
                <span className="badge bg-light text-dark">JavaScript</span>
                <span className="badge bg-light text-dark">React</span>
                <span className="badge bg-light text-dark">Angular</span>
              </div>
            </div>
            <div className="col-lg-6">
              <h4>{t('home.stack.elearning.title')}</h4>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-light text-dark">Storyline</span>
                <span className="badge bg-light text-dark">Rise</span>
                <span className="badge bg-light text-dark">SCORM</span>
                <span className="badge bg-light text-dark">xAPI</span>
              </div>
            </div>
            <div className="col-lg-6">
              <h4>{t('home.stack.methods.title')}</h4>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-light text-dark">SCRUM</span>
                <span className="badge bg-light text-dark">Design Thinking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('home.about.title')}</h2>
          <p>{t('home.about.p1')}</p>
          <p>{t('home.about.p2')}</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="d-flex gap-3">
            <a
              href="/CV.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              onClick={() => trackButtonClick('Download CV', 'About Me')}
            >
              {t('home.about.cta.cv')}
            </a>
            <Link
              to={getLocalizedPath('/contact')}
              className="btn btn-primary"
              onClick={() => trackButtonClick('Contact Me', 'About Me')}
            >
              {t('home.about.cta.contact')}
            </Link>
          </div>
        </div>
      </section>

      <section id="work-together" className="section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('home.work.title')}</h2>
          <p>{t('home.work.lead')}</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="d-flex gap-3">
            <Link
              to={getLocalizedPath('/contact')}
              className="btn btn-primary"
              onClick={() => trackButtonClick('Book a Call', 'Let’s Work Together')}
            >
              {t('home.work.cta.call')}
            </Link>
            <a
              href="mailto:maurizioroca@hotmail.com"
              className="btn btn-outline"
              onClick={() => trackContactClick('Email', 'maurizioroca@hotmail.com')}
            >
              {t('home.work.cta.message')}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

