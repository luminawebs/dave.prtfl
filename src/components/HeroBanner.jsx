import React, { useState, useEffect } from 'react';
import { trackButtonClick } from '../utils/analytics';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

const HeroBanner = () => {
  const { t } = useTranslation();
  const { language, getLocalizedPath } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Get internationalized slide data from translations
  const slides = t('hero.carousel.slides').map((slide, index) => ({
    id: index,
    mainHeading: slide.mainHeading,
    description: slide.description,
    highlight: slide.highlight,
    mediaType: slide.mediaType,
    mediaSrc: slide.mediaSrc,
    mediaAlt: slide.mediaAlt,
    mediaTitle: slide.mediaTitle,
    cta: {
      text: slide.cta.text,
      url: getLocalizedPath(slide.cta.url.replace(/\/(es|en)/, '')), // Remove language prefix and apply current language
      icon: slide.cta.icon
    }
  }));

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 250000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (

    <div className="container-fluid">
      <div className="hero-banner">
        <div className="row align-items-center">
          {/* Navigation arrows */}
          <button
            className="carousel-control prev"
            onClick={handlePrevSlide}
            aria-label={t('hero.carousel.controls.prevLabel')}
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          {/* Content Column */}
          <div className="col-lg-6">
            <div className="content">
              {/* <div className="agency-name">
              <h5>{t('hero.agency')}</h5>
            </div> */}

              <div className="banner-carousel">
                <div className="slides-wrapper">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`slide ${index === currentSlide ? 'active' : ''} ${index < currentSlide ? 'prev' : index > currentSlide ? 'next' : ''
                        }`}
                      style={{
                        transform: `translateX(${(index - currentSlide) * 100}%)`,
                        opacity: index === currentSlide ? 1 : 0,
                      }}
                    >
                      <div className="slide-content">
                        <div className="main-heading">
                          <h1>{slide.mainHeading}</h1>
                        </div>

                        <div className="divider"></div>

                        <div className="description">
                          <p>
                            {slide.description.split(slide.highlight).map((part, i, arr) => (
                              <React.Fragment key={i}>
                                {part}
                                {i < arr.length - 1 && (
                                  <span className="highlight-text">{slide.highlight}</span>
                                )}
                              </React.Fragment>
                            ))}
                          </p>

                          <div className="cta-button">
                            <a
                              href={slide.cta.url}
                              className="btn"
                              onClick={() => trackButtonClick(`Hero CTA - ${slide.cta.text}`, 'Hero Banner')}
                            >
                              <span>{slide.cta.text}</span>
                              <i className={`bi ${slide.cta.icon}`}></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>

          {/* Media Column */}
          <div className="col-lg-6">
            <div className="media-content">
              {/* Dynamic media content synchronized with current slide */}
              <div className="media-placeholder">
                <div className="media-container">
                  {(() => {
                    const currentSlideData = slides[currentSlide];

                    switch (currentSlideData.mediaType) {
                      case 'image':
                        return (
                          <img
                            src={currentSlideData.mediaSrc}
                            alt={currentSlideData.mediaAlt}
                            className="hero-media"
                            title={currentSlideData.mediaTitle}
                          />
                        );

                      case 'video':
                        return (
                          <div className="video-embed">
                            <iframe
                              src={currentSlideData.mediaSrc}
                              loading="lazy"
                              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                              allowFullScreen={true}
                              title={currentSlideData.mediaTitle}
                            ></iframe>
                          </div>
                        );

                      case 'html5-video':
                        return (
                          <video className="hero-media" controls>
                            <source src={currentSlideData.mediaSrc} type="video/mp4" />
                            {currentSlideData.mediaAlt}
                          </video>
                        );

                      case 'placeholder':
                      default:
                        return (
                          <div className="placeholder-content">
                            <i className="bi bi-play-circle placeholder-icon"></i>
                            <p className="placeholder-text">{currentSlideData.mediaTitle || 'Espacio para imagen o video'}</p>
                          </div>
                        );
                    }
                  })()}
                </div>

                {/* Optional stats card overlay */}
                {/* <div className="stats-overlay">
                  <div className="stats-number">
                    <h3>100+</h3>
                  </div>
                  <div className="stats-label">
                    <p>{t('hero.statsLabel')}</p>
                  </div>
                  <div className="stats-arrow">
                    <a href="#portafolio"><i className="bi bi-arrow-up-right"></i></a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <button
            className="carousel-control next"
            onClick={handleNextSlide}
            aria-label={t('hero.carousel.controls.nextLabel')}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        {/* Slide indicators */}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleSlideChange(index)}
              aria-label={`${t('hero.carousel.controls.indicatorLabel')} ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
