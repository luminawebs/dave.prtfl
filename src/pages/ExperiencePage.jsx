import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import ExperienceTimeline from '../components/experience';

const ExperiencePage = () => {
  const location = useLocation();
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
  }, [location.hash]);

  return (
    <main className="main">
      {/* Experience Hero Section */}
      <section id="experience-hero" className="hero section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="hero-title" data-aos="fade-up">
                {t('experience.heroTitle') || 'Professional Experience'}
              </h1>
              <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="100">
                {t('experience.heroSubtitle') || 'A comprehensive timeline of my professional journey, achievements, and the technologies I\'ve mastered along the way.'}
              </p>
            </div>
          </div>
        </div>
        <a href="#experience" className="scroll-down-arrow" aria-label="Scroll down">
          <i className="bi bi-chevron-down"></i>
        </a>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="experience section">
        <div className="container section-title" data-aos="fade-up">
          <h2>{t('experience.title')}</h2>
          <div>
            <span>{t('experience.subtitle')}</span>{' '}
            <span className="description-title">{t('experience.subtitleHighlight')}</span>
          </div>
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
          <ExperienceTimeline />

          {/* Call to Action */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <a href="#contact" className="btn btn-primary btn-lg">
                <i className="bi bi-person-lines-fill me-2"></i>
                {t('experience.cta') || 'Let\'s discuss your next project'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExperiencePage;
