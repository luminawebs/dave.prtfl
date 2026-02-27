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
              className="btn btn-cta"
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
        <a href="#case-studies" className="scroll-down-arrow" aria-label="Scroll down">
          <i className="bi bi-chevron-down"></i>
        </a>
      </section>

      <section id="trusted" className="section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('home.trusted.title')}</h2>
          <div>{t('home.trusted.subtitle')}</div>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="d-flex flex-wrap gap-3 align-items-center">
            <span style={{ padding: '8px 16px', background: '#1A1C2E', color: 'var(--accent-color)', border: '1px solid rgba(25, 249, 105, 0.4)', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.5px' }}>Capgemini</span>
            <span style={{ padding: '8px 16px', background: '#1A1C2E', color: 'var(--accent-color)', border: '1px solid rgba(25, 249, 105, 0.4)', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.5px' }}>EAN University</span>
            <span style={{ padding: '8px 16px', background: '#1A1C2E', color: 'var(--accent-color)', border: '1px solid rgba(25, 249, 105, 0.4)', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.5px' }}>Sector Público</span>
            <span style={{ padding: '8px 16px', background: '#1A1C2E', color: 'var(--accent-color)', border: '1px solid rgba(25, 249, 105, 0.4)', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.5px' }}>EdTech</span>
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
              <div className="service-card h-100" style={{ background: 'var(--surface-color)', border: '1px solid rgba(25, 249, 105, 0.2)', boxShadow: '0 0 20px rgba(25, 249, 105, 0.05)', borderRadius: '24px', padding: '2.5rem', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(25, 249, 105, 0.15)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(25, 249, 105, 0.05)'; }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(25, 249, 105, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}><i className="bi bi-palette" style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}></i></div>
                <h3 style={{ color: 'var(--heading-color)', fontSize: '1.5rem', marginBottom: '1rem' }}>{t('home.what.uiux.title')}</h3>
                <ul className="list-unstyled mt-3" style={{ color: 'var(--default-color)' }}>
                  {t('home.what.uiux.items').map((i, idx) => (<li key={`uiux-${idx}`} className="mb-2"><i className="bi bi-check-circle-fill me-2" style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}></i> {i}</li>))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card h-100" style={{ background: 'var(--surface-color)', border: '1px solid rgba(25, 249, 105, 0.2)', boxShadow: '0 0 20px rgba(25, 249, 105, 0.05)', borderRadius: '24px', padding: '2.5rem', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(25, 249, 105, 0.15)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(25, 249, 105, 0.05)'; }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(25, 249, 105, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}><i className="bi bi-code-slash" style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}></i></div>
                <h3 style={{ color: 'var(--heading-color)', fontSize: '1.5rem', marginBottom: '1rem' }}>{t('home.what.frontend.title')}</h3>
                <ul className="list-unstyled mt-3" style={{ color: 'var(--default-color)' }}>
                  {t('home.what.frontend.items').map((i, idx) => (<li key={`fe-${idx}`} className="mb-2"><i className="bi bi-check-circle-fill me-2" style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}></i> {i}</li>))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card h-100" style={{ background: 'var(--surface-color)', border: '1px solid rgba(25, 249, 105, 0.2)', boxShadow: '0 0 20px rgba(25, 249, 105, 0.05)', borderRadius: '24px', padding: '2.5rem', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(25, 249, 105, 0.15)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(25, 249, 105, 0.05)'; }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'rgba(25, 249, 105, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}><i className="bi bi-book" style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}></i></div>
                <h3 style={{ color: 'var(--heading-color)', fontSize: '1.5rem', marginBottom: '1rem' }}>{t('home.what.lxd.title')}</h3>
                <ul className="list-unstyled mt-3" style={{ color: 'var(--default-color)' }}>
                  {t('home.what.lxd.items').map((i, idx) => (<li key={`lxd-${idx}`} className="mb-2"><i className="bi bi-check-circle-fill me-2" style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}></i> {i}</li>))}
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
              <div className="card h-100" style={{ background: 'linear-gradient(135deg, rgba(27, 38, 44, 0.8) 0%, rgba(3, 17, 25, 0.9) 100%)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '1rem', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div className="card-body">
                  <h3 className="card-title" style={{ color: 'var(--heading-color)', fontSize: '1.25rem' }}>{t('home.case.cards.0.title')}</h3>
                  <p className="card-text" style={{ color: 'var(--default-color)', fontSize: '0.95rem' }}>{t('home.case.cards.0.text')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100" style={{ background: 'linear-gradient(135deg, rgba(27, 38, 44, 0.8) 0%, rgba(3, 17, 25, 0.9) 100%)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '1rem', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div className="card-body">
                  <h3 className="card-title" style={{ color: 'var(--heading-color)', fontSize: '1.25rem' }}>{t('home.case.cards.1.title')}</h3>
                  <p className="card-text" style={{ color: 'var(--default-color)', fontSize: '0.95rem' }}>{t('home.case.cards.1.text')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100" style={{ background: 'linear-gradient(135deg, rgba(27, 38, 44, 0.8) 0%, rgba(3, 17, 25, 0.9) 100%)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '1rem', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div className="card-body">
                  <h3 className="card-title" style={{ color: 'var(--heading-color)', fontSize: '1.25rem' }}>{t('home.case.cards.2.title')}</h3>
                  <p className="card-text" style={{ color: 'var(--default-color)', fontSize: '0.95rem' }}>{t('home.case.cards.2.text')}</p>
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

      <section id="design-system-preview" className="section" style={{ backgroundColor: 'var(--surface-color)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(25, 249, 105, 0.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-50%', right: '-20%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(25, 249, 105, 0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>

        <div className="container section-title" data-aos="fade-up">
          <h2>Design System</h2>
          <p>Explore the visual foundation</p>
        </div>
        <div className="container text-center" data-aos="fade-up" data-aos-delay="100">
          <p className="lead mb-4" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--default-color)' }}>
            A comprehensive guide showcasing this page core tokens, typography, glowing glassmorphism components, and neon accents. Use if you need a reusable design system.
          </p>
          <Link
            to={getLocalizedPath('/design-system')}
            className="btn btn-primary"
            style={{
              boxShadow: '0 0 20px rgba(25, 249, 105, 0.3)',
              padding: '14px 32px',
              fontSize: '1.1rem'
            }}
            onClick={() => trackButtonClick('View Design System', 'Design System Preview')}
          >
            Explore Design System <i className="bi bi-arrow-right ms-2"></i>
          </Link>
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
              <div className="card h-100" style={{ background: 'var(--surface-color)', borderRadius: '24px', padding: '1px', position: 'relative', overflow: 'hidden', transition: 'transform 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--accent-color) 0%, transparent 100%)', opacity: 0.6 }}></div>
                <div className="card-body" style={{ background: 'var(--background-color)', borderRadius: '23px', padding: '1.5rem', height: '100%', position: 'relative', zIndex: 1 }}>
                  <h3 className="card-title" style={{ color: 'var(--heading-color)', fontSize: '1.25rem' }}>{t('home.process.steps.0.title')}</h3>
                  <p className="card-text" style={{ color: 'var(--default-color)', fontSize: '0.95rem' }}>{t('home.process.steps.0.text')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100" style={{ background: 'var(--surface-color)', borderRadius: '24px', padding: '1px', position: 'relative', overflow: 'hidden', transition: 'transform 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--accent-color) 0%, transparent 100%)', opacity: 0.6 }}></div>
                <div className="card-body" style={{ background: 'var(--background-color)', borderRadius: '23px', padding: '1.5rem', height: '100%', position: 'relative', zIndex: 1 }}>
                  <h3 className="card-title" style={{ color: 'var(--heading-color)', fontSize: '1.25rem' }}>{t('home.process.steps.1.title')}</h3>
                  <p className="card-text" style={{ color: 'var(--default-color)', fontSize: '0.95rem' }}>{t('home.process.steps.1.text')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100" style={{ background: 'var(--surface-color)', borderRadius: '24px', padding: '1px', position: 'relative', overflow: 'hidden', transition: 'transform 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--accent-color) 0%, transparent 100%)', opacity: 0.6 }}></div>
                <div className="card-body" style={{ background: 'var(--background-color)', borderRadius: '23px', padding: '1.5rem', height: '100%', position: 'relative', zIndex: 1 }}>
                  <h3 className="card-title" style={{ color: 'var(--heading-color)', fontSize: '1.25rem' }}>{t('home.process.steps.2.title')}</h3>
                  <p className="card-text" style={{ color: 'var(--default-color)', fontSize: '0.95rem' }}>{t('home.process.steps.2.text')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100" style={{ background: 'var(--surface-color)', borderRadius: '24px', padding: '1px', position: 'relative', overflow: 'hidden', transition: 'transform 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--accent-color) 0%, transparent 100%)', opacity: 0.6 }}></div>
                <div className="card-body" style={{ background: 'var(--background-color)', borderRadius: '23px', padding: '1.5rem', height: '100%', position: 'relative', zIndex: 1 }}>
                  <h3 className="card-title" style={{ color: 'var(--heading-color)', fontSize: '1.25rem' }}>{t('home.process.steps.3.title')}</h3>
                  <p className="card-text" style={{ color: 'var(--default-color)', fontSize: '0.95rem' }}>{t('home.process.steps.3.text')}</p>
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
                <span style={{ padding: '6px 14px', background: '#1A1C2E', color: 'var(--accent-color)', border: '1px solid rgba(25, 249, 105, 0.4)', borderRadius: '20px', fontSize: '0.85rem' }}>Figma</span>
                <span style={{ padding: '6px 14px', background: '#1A1C2E', color: 'var(--accent-color)', border: '1px solid rgba(25, 249, 105, 0.4)', borderRadius: '20px', fontSize: '0.85rem' }}>Adobe XD</span>
                <span style={{ padding: '6px 14px', background: '#1A1C2E', color: 'var(--accent-color)', border: '1px solid rgba(25, 249, 105, 0.4)', borderRadius: '20px', fontSize: '0.85rem' }}>Prototyping</span>
                <span style={{ padding: '6px 14px', background: '#1A1C2E', color: 'var(--accent-color)', border: '1px solid rgba(25, 249, 105, 0.4)', borderRadius: '20px', fontSize: '0.85rem' }}>UX Research</span>
              </div>
            </div>
            <div className="col-lg-6">
              <h4>{t('home.stack.frontend.title')}</h4>
              <div className="d-flex flex-wrap gap-2">
                <span style={{ padding: '6px 14px', background: '#1A1C2E', color: 'var(--accent-color)', border: '1px solid rgba(25, 249, 105, 0.4)', borderRadius: '20px', fontSize: '0.85rem' }}>HTML5</span>
                <span style={{ padding: '6px 14px', background: '#1A1C2E', color: 'var(--accent-color)', border: '1px solid rgba(25, 249, 105, 0.4)', borderRadius: '20px', fontSize: '0.85rem' }}>CSS3</span>
                <span style={{ padding: '6px 14px', background: '#1A1C2E', color: 'var(--accent-color)', border: '1px solid rgba(25, 249, 105, 0.4)', borderRadius: '20px', fontSize: '0.85rem' }}>JavaScript</span>
                <span style={{ padding: '6px 14px', background: '#1A1C2E', color: 'var(--accent-color)', border: '1px solid rgba(25, 249, 105, 0.4)', borderRadius: '20px', fontSize: '0.85rem' }}>React</span>
                <span style={{ padding: '6px 14px', background: '#1A1C2E', color: 'var(--accent-color)', border: '1px solid rgba(25, 249, 105, 0.4)', borderRadius: '20px', fontSize: '0.85rem' }}>Angular</span>
              </div>
            </div>
            <div className="col-lg-6">
              <h4>{t('home.stack.elearning.title')}</h4>
              <div className="d-flex flex-wrap gap-2">
                <span style={{ padding: '6px 14px', background: '#1A1C2E', color: 'var(--accent-color)', border: '1px solid rgba(25, 249, 105, 0.4)', borderRadius: '20px', fontSize: '0.85rem' }}>Storyline</span>
                <span style={{ padding: '6px 14px', background: '#1A1C2E', color: 'var(--accent-color)', border: '1px solid rgba(25, 249, 105, 0.4)', borderRadius: '20px', fontSize: '0.85rem' }}>Rise</span>
                <span style={{ padding: '6px 14px', background: '#1A1C2E', color: 'var(--accent-color)', border: '1px solid rgba(25, 249, 105, 0.4)', borderRadius: '20px', fontSize: '0.85rem' }}>SCORM</span>
                <span style={{ padding: '6px 14px', background: '#1A1C2E', color: 'var(--accent-color)', border: '1px solid rgba(25, 249, 105, 0.4)', borderRadius: '20px', fontSize: '0.85rem' }}>xAPI</span>
              </div>
            </div>
            <div className="col-lg-6">
              <h4>{t('home.stack.methods.title')}</h4>
              <div className="d-flex flex-wrap gap-2">
                <span style={{ padding: '6px 14px', background: '#1A1C2E', color: 'var(--accent-color)', border: '1px solid rgba(25, 249, 105, 0.4)', borderRadius: '20px', fontSize: '0.85rem' }}>SCRUM</span>
                <span style={{ padding: '6px 14px', background: '#1A1C2E', color: 'var(--accent-color)', border: '1px solid rgba(25, 249, 105, 0.4)', borderRadius: '20px', fontSize: '0.85rem' }}>Design Thinking</span>
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
