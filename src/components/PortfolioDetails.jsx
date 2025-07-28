import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/portfolioData';
import { useTranslation } from '../hooks/useTranslation';
import { trackButtonClick } from '../utils/analytics';

// PortfolioDetails now renders as a full page (new window / route) instead of an overlay modal
const PortfolioDetails = () => {
  const { slug } = useParams();
  const resolvedData = getProjectBySlug(slug);

  // Fallback placeholder if data not found
  const defaultData = {
    title: "Innovative Financial Dashboard App",
    badge: "UX/UI Design",
    date: "September 2024",
    client: "DigitalCraft Solutions",
    website: "projectwebsite.example.com",
    websiteUrl: "#",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.",
    mainImages: [
      "assets/img/portfolio/portfolio-5.webp",
      "assets/img/portfolio/portfolio-7.webp",
      "assets/img/portfolio/portfolio-8.webp"
    ],
    thumbnailImages: [
      "assets/img/portfolio/portfolio-4.webp",
      "assets/img/portfolio/portfolio-6.webp",
      "assets/img/portfolio/portfolio-11.webp",
      "assets/img/portfolio/portfolio-12.webp"
    ],
    techStack: ["Angular", "Express.js", "PostgreSQL", "GraphQL", "Firebase"],
    accordion: [
      {
        id: "overview",
        title: "Project Overview",
        icon: "bi-clipboard-data",
        content: "Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        expanded: true
      },
      {
        id: "challenge",
        title: "The Challenge",
        icon: "bi-exclamation-diamond",
        content: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.",
        expanded: false
      },
      {
        id: "solution",
        title: "The Solution",
        icon: "bi-award",
        content: "Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus.",
        expanded: false
      }
    ],
    features: [
      "Real-time Data Visualization",
      "User Role Management",
      "Secure Authentication",
      "Customizable Dashboards",
      "Data Export Options",
      "Multi-device Support"
    ],
    liveProjectUrl: "#",
    nextProjectUrl: "#"
  };

const project = resolvedData || defaultData;
  // keep backward-compat alias so existing code that references projectData still works
  const projectData = project;
  const { t } = useTranslation();
  const [lightboxImage, setLightboxImage] = useState(null);

  // Initialize Swiper when component mounts
  useEffect(() => {
    // Add Bootstrap 'rounded' class to all images inside this modal for consistent border radius
    const modalEl = document.querySelector('.portfolio-details-page');
    if (modalEl) {
      modalEl.querySelectorAll('img').forEach(img => img.classList.add('rounded'));
    }
    // Delegate click to open any image in a lightbox (works even for images added later)
    const handleImgClick = (e) => {
      const target = e.target;
      if (target && target.tagName === 'IMG') {
        setLightboxImage(target.src);
      }
    };
    if (modalEl) {
      modalEl.style.cursor = 'default';
      modalEl.querySelectorAll('img').forEach(img => (img.style.cursor = 'zoom-in'));
      modalEl.addEventListener('click', handleImgClick);
    }

    // Dynamically initialize Swiper if needed
    if (window.Swiper) {
      const swiper = new window.Swiper('.portfolio-details-slider', {
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 6000
        },
        effect: 'creative',
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [0, 0, -400]
          },
          next: {
            translate: ['100%', 0, 0]
          }
        },
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });

      return () => {
        if (swiper) swiper.destroy();
        // Clean up delegated listener
        if (modalEl) modalEl.removeEventListener('click', handleImgClick);
      };
    }
  }, []);

  const handleFeatureClick = (feature) => {
    trackButtonClick(`Portfolio Feature: ${feature}`, 'Portfolio Details');
  };

  const handleAccordionClick = (accordionTitle) => {
    trackButtonClick(`Portfolio Accordion: ${accordionTitle}`, 'Portfolio Details');
  };

  return (
    <div className="portfolio-details-page" style={{ marginTop: '60px' }}>
      <section className="portfolio-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            {/* Single Column Layout */}
            <div className="col-12">
              <div className="portfolio-details-content">
                {/* Project Meta - First */}
                <div className="project-meta" data-aos="fade-up">
                  <div className="badge-wrapper">
                    <span className="project-badge">{projectData.badge}</span>
                  </div>
                  <div className="date-client">
                    <div className="meta-item">
                      <i className="bi bi-calendar-check"></i>
                      <span>{projectData.date}</span>
                    </div>
                    <div className="meta-item">
                      <i className="bi bi-buildings"></i>
                      <span>{projectData.client}</span>
                    </div>
                  </div>
                </div>

                {/* Project Title */}
                <h1 className="project-title" data-aos="fade-up" data-aos-delay="100">{projectData.title}</h1>

                {/* Tech Stack */}
                <div className="tech-stack-badges" data-aos="fade-up" data-aos-delay="350">
                  {projectData.techStack.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                {/* Project Accordion */}
                <div className="project-overview" data-aos="fade-up" data-aos-delay="400">
                  <div className="accordion project-accordion" id="portfolio-details-projectAccordion">
                    {projectData.accordion.map((item, index) => (
                      <div key={item.id} className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button ${!item.expanded ? 'collapsed' : ''}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#portfolio-details-collapse-${index + 1}`}
                            aria-expanded={item.expanded}
                            aria-controls={`portfolio-details-collapse-${index + 1}`}
                            onClick={() => handleAccordionClick(item.title)}
                          >
                            <i className={`bi ${item.icon} me-2`}></i> {item.title}
                          </button>
                        </h2>
                        <div
                          id={`portfolio-details-collapse-${index + 1}`}
                          className={`accordion-collapse collapse ${item.expanded ? 'show' : ''}`}
                          data-bs-parent="#portfolio-details-projectAccordion"
                        >
                          <div className="accordion-body">
                            <p>{item.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container real-content">
          {/* Dynamic content based on project template */}
          {project.template === "detailed-case-study" && (
            <div>
              {/* Video Section for Material Receipts project */}
              <div className="row mb-5">
                <div className="col-12 ratio ratio-16x9">
                  <iframe
                    src="https://iframe.mediadelivery.net/embed/354319/fa7b0fe7-d5bb-447d-84ff-dd3c3387afaf?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                    allowFullScreen
                    title="Project video"
                    style={{ borderRadius: '10px', width: '100%', height: '100%' }}
                  ></iframe>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <section className="mb-5">
                    <h3><i className="bi bi-clipboard-data me-2"></i>1. Project Overview</h3>
                    <p className="lead">Goals:</p>
                    <p>Streamline MR workflows across Field Engineers → Providers → Finance while ensuring audit trails from Finance Team and compliance for internal Company teams.</p>
                    <p>Finance needed better tools to validate MRs (approved/rejected) before payment.</p>
                    <p className="lead">Role:</p>
                    <p>UX Validator/Analyst (identified gaps via stakeholder notes and heuristic evaluation).</p>
                  </section>

                  {/* Methodology */}
                  <section className="mb-5">
                    <h3><i className="bi bi-diagram-3 me-2"></i>2. Methodology</h3>
                    <p className="lead">Benchmarking:</p>
                    <p>5 competitor analyses informed patterns (e.g., status tracking).</p>

                    <p className="lead">Stakeholder Notes:</p>
                    <ul>
                      <li>Parsed conversations with Stakeholders: Business (Finance) & Product Owner</li>
                      <li>Flagged ambiguities and validated requirements</li>
                      <li>Mapped actions per user type</li>
                      <li>Highlighted friction in provider/finance handoffs</li>
                    </ul>

                    <p className="lead"> Collaboration: </p>
                    <p>Bridged gaps between devs and Product Owner to fit time requirements, technology capabilities, best methodology, solve all questions that could have remained.</p>
                 
                   <h3 style={{ marginTop: '120px' }}><i className="bi bi-search me-2"></i>Heuristic Review:</h3>
                          <ul>
                            <li>Navigation issues (breadcrumbs)</li>
                            <li>Consistency (language)</li>
                            <li>Feedback loops (notifications)</li>
                            <li>New Material Receipts hierarchy requirements</li>
                          </ul>
                  </section>
                </div>

                <div className="col-lg-6">
                  <section className="mb-5">
                    <figure className="col-lg-12" style={{ marginBottom: '20px' }}>
                      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', height: '100%', alignContent: 'center' }}>
                        <img src="/assets/img/portfolio/material-receipt/01-process/old-flow.png" className="img-fluid" />
                      </div>
                      <figcaption className="img-foot text-end small">Their old workflow (a summary)</figcaption>
                    </figure>
                    <figure className="col-lg-12" style={{ marginBottom: '20px' }}>
                      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', height: '100%', alignContent: 'center' }}>
                        <img src="/assets/img/portfolio/material-receipt/01-process/actions-by-user.png" className="img-fluid" />
                      </div>
                      <figcaption className="img-foot text-end small">Actions MR flow by user</figcaption>
                    </figure>
                    <figure className="col-lg-12" style={{ marginBottom: '20px' }}>
                      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', height: '100%', alignContent: 'center' }}>
                        <img src="/assets/img/portfolio/material-receipt/01-process/users-access.png" className="img-fluid" />
                      </div>
                      <figcaption className="img-foot text-end small">Possible actions by user</figcaption>
                    </figure>
                  </section>
                </div>
              </div>

              {/* Section 3: Findings & Key Improvements Proposed */}
              <div className="row">
                <div className="col-lg-12">
                  <section className="mb-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <h3><i className="bi bi-search me-2"></i>3. Findings & Key Improvements Proposed</h3>
                          <p className="lead">Language:</p>
                          <p>Mixed Spanish/English terms caused confusion (e.g., "Proveedor" vs. "Provider").</p>
                          <p className="lead">Navigation:</p>
                          <ul>
                            <li>Missing "Go back" buttons</li>
                            <li>No breadcrumbs to Well selection screens</li>
                            <li>Redesigned status indicators</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-6">
                          <div style={{ backgroundColor: '#fff', padding: '0px', borderRadius: '10px', height: '100%', alignContent: 'center' }}>
                            <div className="ratio ratio-1x1">
                              <iframe 
                                src="https://iframe.mediadelivery.net/embed/354319/fe1d0cfb-0e9d-449b-8c03-35fcf11ba91a?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
                                loading="lazy"
                                style={{ border: '0px' }}
                                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                                allowFullScreen
                                title="Video player"
                              ></iframe>
                            </div>
                          </div>
                          <figcaption className="img-foot text-end small">Heuristic Review</figcaption>
                        </div>
                        <div className="col-lg-6">
                          <figure style={{ height: '100%' }}>
                            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', height: '100%', alignContent: 'center' }}>
                              <img className="img-fluid rounded" src="/assets/img/portfolio/material-receipt/01-process/new-flow.png" style={{ cursor: 'zoom-in' }} />
                            </div>
                            <figcaption className="img-foot text-end small">Findings & Key Improvements Proposed (Map MR lifecycle (creation → approval → closure) with notification touchpoints.)</figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: The Solution */}
                  <section className="mb-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-4">
                          <div style={{ marginBottom: '40px' }}>
                            <h3><i className="bi bi-lightbulb me-2"></i>4. The Solution</h3>
                            <p className="lead">UI/UX Improvements:</p>
                            <ul>
                              <li>Role-Specific Dashboard</li>
                              <li>Hyperlinked breadcrumbs for Wells</li>
                              <li>Quick MR PDF generation</li>
                              <li>MR validation panel with search</li>
                              <li>Confirmation Alerts (email team)</li>
                            </ul>
                            <p className="lead">Backend Logic:</p>
                            <ul>
                              <li>Auto-remove Providers post-payment</li>
                              <li>Dual-signature enforcement in PDF MRs</li>
                            </ul>
                          </div>
                          <div>
                            <h3><i className="bi bi-star me-2"></i>Why This Matters</h3>
                            <ul>
                              <li>Holistic View: Ties UI improvements to user roles</li>
                              <li>Business Impact: Reduces workflow bottlenecks</li>
                              <li>Maintains brand consistency</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div>
                            <img className="img-fluid rounded" src="/assets/img/portfolio/material-receipt/02-finished/breadcrumbs.png" style={{ cursor: 'zoom-in' }} />
                            <figcaption className="img-foot text-end small">Clearer role-based UI paths (e.g., hyperlinked breadcrumbs for Wells).</figcaption>
                          </div>
                          <div>
                            <img className="img-fluid rounded" src="/assets/img/portfolio/material-receipt/02-finished/mr-old-flow.png" style={{ cursor: 'zoom-in' }} />
                            <figcaption className="img-foot text-end small">Before user flow</figcaption>
                          </div>
                          <div>
                            <img className="img-fluid rounded" src="/assets/img/portfolio/material-receipt/02-finished/mr-new-flow.png" style={{ cursor: 'zoom-in' }} />
                            <figcaption className="img-foot text-end small">After user flow</figcaption>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Additional Images Section */}
                  <section className="mb-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-6">
                          <div>
                            <img className="img-fluid rounded" src="/assets/img/portfolio/material-receipt/02-finished/finance.jpg" style={{ cursor: 'zoom-in' }} />
                            <figcaption className="img-foot text-end small">Finance: MR validation panel with fast search options.</figcaption>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <img className="img-fluid rounded" src="/assets/img/portfolio/material-receipt/02-finished/mr-pdf.jpg" style={{ cursor: 'zoom-in' }} />
                            <figcaption className="img-foot text-end small">Quick MR PDF generation with pre-filled forms.</figcaption>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 5: Outcomes */}
                  <section className="mb-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-4">
                          <h3><i className="bi bi-search me-2"></i>5. Outcomes</h3>
                          <ul>
                            <li>Clearer navigation, reduced user confusion on MR status.</li>
                            <li>Approval logic and admin bug fixes (blocked on stakeholder input).</li>
                            <li>Found most important painpoints that could be solved</li>
                            <li>Clear understanding of time constraints via "Etapometro" (Stagemeter)</li>
                          </ul>
                        </div>
                        <div className="col-lg-8">
                          <div>
                            <img className="img-fluid rounded" src="/assets/img/portfolio/material-receipt/02-finished/etapometro.png" style={{ cursor: 'zoom-in' }} />
                            <figcaption className="img-foot text-end small">Gantt calendar for time constraints</figcaption>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Final Image Section */}
                  <section className="mb-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div>
                            <img className="img-fluid rounded" src="/assets/img/portfolio/material-receipt/02-finished/end-img.png" style={{ cursor: 'zoom-in' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              {/* Key Features */}
              <div className="project-features" data-aos="fade-up" data-aos-delay="450">
                <h3><i className="bi bi-stars"></i> Key Features</h3>
                <div className="row g-3">
                  <div className="col-md-6">
                    <ul className="feature-list">
                      {projectData.features.slice(0, Math.ceil(projectData.features.length / 2)).map((feature, index) => (
                        <li key={index} onClick={() => handleFeatureClick(feature)}>
                          <i className="bi bi-check2-circle"></i> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="feature-list">
                      {projectData.features.slice(Math.ceil(projectData.features.length / 2)).map((feature, index) => (
                        <li key={index} onClick={() => handleFeatureClick(feature)}>
                          <i className="bi bi-check2-circle"></i> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="cta-buttons" data-aos="fade-up" data-aos-delay="500">
                <a
                  href={projectData.liveProjectUrl}
                  className="btn-view-project"
                  onClick={() => trackButtonClick('View Live Project', 'Portfolio Details')}
                >
                  View Live Project
                </a>
                <a
                  href={projectData.nextProjectUrl}
                  className="btn-next-project"
                  onClick={() => trackButtonClick('Next Project', 'Portfolio Details')}
                >
                  Next Project <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          )}

          {/* Image Gallery Template */}
          {project.template === "image-gallery" && (
            <div>
              {/* Main Images Gallery */}
              <div className="row mb-5">
                <div className="col-12">
                  <h2 className="mb-4">Project Gallery</h2>
                  <div className="row g-3">
                    {project.mainImages.map((image, index) => (
                      <div key={index} className="col-lg-12 col-md-6" style={{ margin: '0px' }}>
                          <div style={{ backgroundColor: '#f8f9fa', padding: '0px', borderRadius: '10px', height: '100%', margin: '0 auto' }}>
                            <img src={image} className="img-fluid" alt={`Project Image ${index + 1}`} />
                          </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Images Gallery */}
              <div className="row mb-5">
                <div className="col-12">
                  <h3 className="mb-4">Design Process & Wireframes</h3>
                  <div className="row g-3">
                    {project.thumbnailImages.map((image, index) => (
                      <div key={index} className="col-lg-4 col-md-6">
                        <figure>
                          <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '10px', height: '100%' }}>
                            <img src={image} className="img-fluid" alt={`Design Process Image ${index + 1}`} />
                          </div>
                        </figure>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Description as formatted content */}
              <div className="row mb-5">
                <div className="col-12">
                  <div className="project-description">
                    <div style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                      {project.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Standard Template - Uses accordion and basic image layout */}
          {(project.template === "standard" || !project.template) && (
            <div>
              {/* Main Images Gallery */}
              <div className="row mb-5">
                <div className="col-12">
                  <h2 className="mb-4">Project Overview</h2>
                  <div className="row g-3">
                    {project.mainImages.map((image, index) => (
                      <div key={index} className="col-lg-4 col-md-6">
                        <figure>
                          <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '10px', height: '100%' }}>
                            <img src={image} className="img-fluid" alt={`Project Image ${index + 1}`} />
                          </div>
                        </figure>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="row mb-5">
                <div className="col-12">
                  <div className="project-description">
                    <h3 className="mb-3">About This Project</h3>
                    <p style={{ lineHeight: '1.6' }}>{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Additional Images */}
              {project.thumbnailImages && project.thumbnailImages.length > 0 && (
                <div className="row mb-5">
                  <div className="col-12">
                    <h3 className="mb-4">Additional Views</h3>
                    <div className="row g-3">
                      {project.thumbnailImages.map((image, index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                          <figure>
                            <div style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '10px', height: '100%' }}>
                              <img src={image} className="img-fluid" alt={`Additional View ${index + 1}`} />
                            </div>
                          </figure>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div className="project-features" data-aos="fade-up" data-aos-delay="450">
                <h3><i className="bi bi-stars"></i> Key Features</h3>
                <div className="row g-3">
                  <div className="col-md-6">
                    <ul className="feature-list">
                      {projectData.features.slice(0, Math.ceil(projectData.features.length / 2)).map((feature, index) => (
                        <li key={index} onClick={() => handleFeatureClick(feature)}>
                          <i className="bi bi-check2-circle"></i> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="feature-list">
                      {projectData.features.slice(Math.ceil(projectData.features.length / 2)).map((feature, index) => (
                        <li key={index} onClick={() => handleFeatureClick(feature)}>
                          <i className="bi bi-check2-circle"></i> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="cta-buttons" data-aos="fade-up" data-aos-delay="500">
                <a
                  href={projectData.liveProjectUrl}
                  className="btn-view-project"
                  onClick={() => trackButtonClick('View Live Project', 'Portfolio Details')}
                >
                  View Live Project
                </a>
                <a
                  href={projectData.nextProjectUrl}
                  className="btn-next-project"
                  onClick={() => trackButtonClick('Next Project', 'Portfolio Details')}
                >
                  Next Project <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage &&
        ReactDOM.createPortal(
          <div
            className="lightbox-overlay"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.8)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1050,
              cursor: 'zoom-out',
            }}
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="lightbox-content position-relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="btn-close position-absolute top-0 end-0 m-3 bg-white p-2 rounded-circle"
                aria-label="Close"
                onClick={() => setLightboxImage(null)}
              ></button>
              <img
                src={lightboxImage}
                alt="Zoomed"
                className="img-fluid rounded shadow"
                style={{ maxHeight: '85vh', maxWidth: '90vw' }}
              />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default PortfolioDetails;
