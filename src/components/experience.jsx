import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { trackMenuClick } from '../utils/analytics';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExperienceTimeline = () => {
  const { t } = useTranslation();
  
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);
  
  // Handle timeline item click tracking
  const handleTimelineItemClick = (role, index) => {
    trackMenuClick(`timeline-item-${index}`, {
      position: role.position,
      company: role.company,
      section: 'experience'
    });
  };

  return (
    <div className="experience-timeline">
            {t('experience.roles').map((role, index) => (
              <div 
                key={index} 
                className="timeline-item" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
                onClick={() => handleTimelineItemClick(role, index)}
              >
                
                <div className="timeline-card">
                  <div className="card-header">
                    <div className="company-info">
                      <div className="row align-items-center">
                        <div className="col-lg-8">
                          <h3 className="position-title">{role.position}</h3>
                        </div>
                        <div className="col-lg-4 text-end">
                          <span className="period">{role.period}</span>
                        </div>
                      </div>
                    </div>
                    <div className="period-info">
                      <h4 className="company-name">
                        <i className="fas fa-building me-2"></i>
                        {role.company}
                      </h4>
                      <div className="meta-info">
                        <span className="duration">
                          <i className="far fa-clock me-1"></i>
                          {role.duration}
                        </span>
                        {role.location && (
                          <span className="location">
                            <i className="fas fa-map-marker-alt me-1"></i>
                            {role.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="card-body">
                    <p className="role-description">{role.description}</p>

                    {role.achievements && (
                      <div className="achievements">
                        <h5>
                          <i className="fas fa-trophy me-2"></i>
                          {t('experience.achievements') || 'Key Achievements'}:
                        </h5>
                        <ul>
                          {role.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {role.technologies && (
                      <div className="technologies">
                        <h6>
                          <i className="fas fa-cog me-2"></i>
                          {t('experience.technologies') || 'Technologies & Tools'}:
                        </h6>
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
          </div>
  );
};

export default ExperienceTimeline;




