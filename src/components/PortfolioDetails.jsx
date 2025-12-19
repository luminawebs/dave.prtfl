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
  const courseButtons = [
    {
      key: 'bcs-soporte-operativo',
      image: '/assets/portfolio/courses/bcs-soporte-operativo.jpg',
      href: '/assets/portfolio/articulate/BCS/BCS-Soporte-Operativo - Storyline output/story_html5.html',
      label: 'BCS Soporte Operativo'
    },
    {
      key: 'covinoc',
      image: '/assets/portfolio/courses/covinoc.jpg',
      href: '/assets/portfolio/articulate/covinoc/story_html5.html',
      label: 'Covinoc Curso'
    },
    {
      key: 'covinoc2',
      image: '/assets/portfolio/courses/covinoc2.jpg',
      href: '/assets/portfolio/articulate/covinoc/story_html5.html',
      label: 'Covinoc Curso'
    },
    {
      key: 'unisanitas',
      image: '/assets/portfolio/courses/unisanitas.jpg',
      href: '/assets/portfolio/articulate/unisanitas-MCBF/story_html5.html',
      label: 'Unisanitas MCBF'
    },
    {
      key: 'sanitas',
      image: '/assets/portfolio/courses/sanitas.jpg',
      href: '/assets/portfolio/html5/unisanitas-html5/index.html',
      label: 'Unisanitas HTML5'
    },
    {
      key: 'caninos-felinos',
      image: '/assets/portfolio/courses/caninos-felinos.jpg',
      href: '/assets/portfolio/articulate/lasalle-mascotas/02 exportado/NEFE_RED3_OVA - Storyline output/story_html5.html',
      label: 'La Salle Mascotas'
    },
    {
      key: 'fng',
      image: '/assets/portfolio/courses/fng.jpg',
      href: '/assets/portfolio/html5/fondonacionalgarantias-html5/index.html',
      label: 'Fondo Nacional de Garantías'
    },
    {
      key: 'emprender',
      image: '/assets/portfolio/courses/emprender.jpg',
      href: '/assets/portfolio/html5/emprendimiento-html5-actividad/index.html',
      label: 'Emprendimiento Actividad'
    },
    {
      key: 'politecnico',
      image: '/assets/portfolio/courses/politecnico.jpg',
      href: '/assets/portfolio/html5/escom-html5/index.html',
      label: 'ESCOM HTML5'
    },
    {
      key: 'contrasenas',
      image: '/assets/portfolio/courses/contrasenas.jpg',
      href: '/assets/portfolio/html5/escom-html5/index.html',
      label: 'Seguridad Contraseñas'
    },
    {
      key: 'ciberseguridad',
      image: '/assets/portfolio/courses/ciberseguridad.jpg',
      href: '/assets/portfolio/html5/escom-html5/index.html',
      label: 'Ciberseguridad'
    },
    {
      key: 'pdf-transmi',
      image: '/assets/portfolio/courses/pdf-transmi.jpg',
      href: '/assets/portfolio/pdf/pdf-transmilenio.pdf',
      label: 'PDF Transmilenio'
    },
    {
      key: 'pdf-covinoc',
      image: '/assets/portfolio/courses/pdf-covinoc.jpg',
      href: '/assets/portfolio/pdf/pdf-generalidades-compensaciones-laborales.pdf',
      label: 'PDF Compensaciones'
    },
    {
      key: 'vid-covinoc',
      image: '/assets/portfolio/courses/vid-covinoc.jpg',
      href: '/assets/portfolio/video/COVINOC-VIDEO.mp4',
      label: 'Video Covinoc'
    },
    {
      key: 'vid-sanitas',
      image: '/assets/portfolio/courses/vid-sanitas.jpg',
      href: '/assets/portfolio/html5/unisanitas-html5/index.html',
      label: 'Unisanitas HTML5'
    }
  ];

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
                        <img src="/assets/img/portfolio/material-receipt/01-process/old-flow.png" className="img-fluid" alt="Material Receipts old workflow" />
                      </div>
                      <figcaption className="img-foot text-end small">Their old workflow (a summary)</figcaption>
                    </figure>
                    <figure className="col-lg-12" style={{ marginBottom: '20px' }}>
                      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', height: '100%', alignContent: 'center' }}>
                        <img src="/assets/img/portfolio/material-receipt/01-process/actions-by-user.png" className="img-fluid" alt="Actions by user" />
                      </div>
                      <figcaption className="img-foot text-end small">Actions MR flow by user</figcaption>
                    </figure>
                    <figure className="col-lg-12" style={{ marginBottom: '20px' }}>
                      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', height: '100%', alignContent: 'center' }}>
                        <img src="/assets/img/portfolio/material-receipt/01-process/users-access.png" className="img-fluid" alt="Users access map" />
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
                              <img className="img-fluid rounded" src="/assets/img/portfolio/material-receipt/01-process/new-flow.png" style={{ cursor: 'zoom-in' }} alt="Improved workflow" />
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
                            <img className="img-fluid rounded" src="/assets/img/portfolio/material-receipt/02-finished/breadcrumbs.png" style={{ cursor: 'zoom-in' }} alt="Breadcrumbs UI" />
                            <figcaption className="img-foot text-end small">Clearer role-based UI paths (e.g., hyperlinked breadcrumbs for Wells).</figcaption>
                          </div>
                          <div>
                            <img className="img-fluid rounded" src="/assets/img/portfolio/material-receipt/02-finished/mr-old-flow.png" style={{ cursor: 'zoom-in' }} alt="Old user flow" />
                            <figcaption className="img-foot text-end small">Before user flow</figcaption>
                          </div>
                          <div>
                            <img className="img-fluid rounded" src="/assets/img/portfolio/material-receipt/02-finished/mr-new-flow.png" style={{ cursor: 'zoom-in' }} alt="New user flow" />
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
                            <img className="img-fluid rounded" src="/assets/img/portfolio/material-receipt/02-finished/finance.jpg" style={{ cursor: 'zoom-in' }} alt="Finance validation panel" />
                            <figcaption className="img-foot text-end small">Finance: MR validation panel with fast search options.</figcaption>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <img className="img-fluid rounded" src="/assets/img/portfolio/material-receipt/02-finished/mr-pdf.jpg" style={{ cursor: 'zoom-in' }} alt="MR PDF generation" />
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
                            <img className="img-fluid rounded" src="/assets/img/portfolio/material-receipt/02-finished/etapometro.png" style={{ cursor: 'zoom-in' }} alt="Gantt calendar" />
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
                            <img className="img-fluid rounded" src="/assets/img/portfolio/material-receipt/02-finished/end-img.png" style={{ cursor: 'zoom-in' }} alt="Final overview" />
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
                      <React.Fragment key={index}>
                        <div className="col-lg-12 col-md-6" style={{ margin: '0px' }}>
                          <div style={{ backgroundColor: '#f8f9fa', padding: '0px', borderRadius: '10px', height: '100%', margin: '0 auto' }}>
                            <img src={image} className="img-fluid" alt={`Project ${index + 1}`} />
                          </div>
                        </div>
                        {index === 0 && project.iframeHtml && (
                          <div className="col-12">
                            <div className="row g-3">
                              <div className="col-12" dangerouslySetInnerHTML={{ __html: project.iframeHtml }} />
                              {Array.isArray(project.additionalHtml) && project.additionalHtml.length > 0 && (
                                project.additionalHtml.map((html, i) => (
                                  <div key={`add-${i}`} className="col-12" dangerouslySetInnerHTML={{ __html: html }} />
                                ))
                              )}
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Additional Images Gallery */}
              {project.thumbnailImages && project.thumbnailImages.length > 0 && (
                <div className="row mb-5">
                  <div className="col-12">
                    <h3 className="mb-4">Design Process & Wireframes</h3>
                    <div className="row g-3">
                      {project.thumbnailImages.map((image, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                          <figure>
                            <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '10px', height: '100%' }}>
                              <img src={image} className="img-fluid" alt={`Design Process ${index + 1}`} />
                            </div>
                          </figure>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Project Description as formatted content */}
              {project.description && (
                <div className="row mb-5">
                  <div className="col-12">
                    <div className="project-description">
                      <div style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                        {project.description}
                      </div>
                    </div>
                  </div>
                </div>
              )}
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

          {project.template === "avatars3d" && (
            <div>
              <div className="row mb-5">
                <div className="col-12">
                  <h2 className="mb-3">{t('personajes3d.title')}</h2>
                  <p>{t('personajes3d.leadText')}</p>
                </div>
                <div className="col-12">
                  <div className="ratio ratio-16x9" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                    <iframe
                      src="https://iframe.mediadelivery.net/embed/354319/33fc09af-d689-4669-8c79-82816f38f0a7?autoplay=false&loop=false&muted=false&preload=true&responsive=true"
                      loading="lazy"
                      style={{ border: '0' }}
                      allow="accelerometer;gyroscope;encrypted-media;picture-in-picture;"
                      allowFullScreen
                      title={t('personajes3d.videoTitle')}
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-12">
                  <h3 className="mb-4">{t('personajes3d.benefits.measurable.title')}</h3>
                </div>
                <div className="col-md-6">
                  <div className="benefit-card">
                    <div className="benefit-icon"><i className="bi bi-book"></i></div>
                    <h4>{t('personajes3d.benefits.retention.title')}</h4>
                    <p>{t('personajes3d.benefits.retention.description')}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="benefit-card">
                    <div className="benefit-icon"><i className="bi bi-cash-coin"></i></div>
                    <h4>{t('personajes3d.benefits.affordable.title')}</h4>
                    <p>{t('personajes3d.benefits.affordable.description')}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="benefit-card">
                    <div className="benefit-icon"><i className="bi bi-lightning-charge"></i></div>
                    <h4>{t('personajes3d.benefits.agile.title')}</h4>
                    <p>{t('personajes3d.benefits.agile.description')}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="benefit-card">
                    <div className="benefit-icon"><i className="bi bi-bar-chart-line"></i></div>
                    <h4>{t('personajes3d.benefits.measurable.title')}</h4>
                    <p>{t('personajes3d.benefits.measurable.description')}</p>
                  </div>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-lg-8">
                  <div className="project-description">
                    <h3 className="mb-3">{t('personajes3d.features.title')}</h3>
                    <ul className="feature-list">
                      <li><i className="bi bi-check2-circle"></i> {t('personajes3d.features.characters.title')}</li>
                      <li><i className="bi bi-check2-circle"></i> {t('personajes3d.features.voiceover.title')}</li>
                      <li><i className="bi bi-check2-circle"></i> {t('personajes3d.features.render.title')}</li>
                      <li><i className="bi bi-check2-circle"></i> {t('personajes3d.features.delivery.title')}</li>
                      <li><i className="bi bi-check2-circle"></i> {t('personajes3d.features.production.title')}</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="service-sidebar">
                    <div className="action-card">
                      <h3>{t('personajes3d.cta.title')}</h3>
                      <p>{t('personajes3d.cta.description')}</p>
                      <a href={projectData.liveProjectUrl} className="btn">
                        <span>{t('personajes3d.cta.button')}</span>
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                    {/* <div className="contact-info">
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
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-12 section-title">
                  <h2>{t('personajes3d.pricing.title')}</h2>
                  <div><span>{t('personajes3d.pricing.subtitle')}</span> <span className="description-title">{t('personajes3d.pricing.subtitleHighlight')}</span> 3D</div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="pricing-card">
                    <div className="plan-header">
                      <div className="plan-icon"><i className="bi bi-person-video3"></i></div>
                      <h3>{t('personajes3d.pricing.basic.title')}</h3>
                    </div>
                    <p>{t('personajes3d.pricing.basic.description')}</p>
                    <div className="price-display">
                      <div className="price-value">{t('personajes3d.pricing.basic.price')}</div>
                      <div className="price-period">{t('personajes3d.pricing.basic.period')}</div>
                    </div>
                    <ul className="feature-list">
                      {t('personajes3d.pricing.basic.features').map((f, i) => (
                        <li key={`b-${i}`}><i className="bi bi-check2-circle"></i> {f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="pricing-card popular">
                    <div className="plan-header">
                      <div className="plan-icon"><i className="bi bi-person-lines-fill"></i></div>
                      <h3>{t('personajes3d.pricing.standard.title')}</h3>
                      <span className="popular-badge">{t('personajes3d.pricing.standard.popular')}</span>
                    </div>
                    <p>{t('personajes3d.pricing.standard.description')}</p>
                    <div className="price-display">
                      <div className="price-value">{t('personajes3d.pricing.standard.price')}</div>
                      <div className="price-period">{t('personajes3d.pricing.standard.period')}</div>
                    </div>
                    <ul className="feature-list">
                      {t('personajes3d.pricing.standard.features').map((f, i) => (
                        <li key={`s-${i}`}><i className="bi bi-check2-circle"></i> {f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="pricing-card">
                    <div className="plan-header">
                      <div className="plan-icon"><i className="bi bi-person-video2"></i></div>
                      <h3>{t('personajes3d.pricing.advanced.title')}</h3>
                    </div>
                    <p>{t('personajes3d.pricing.advanced.description')}</p>
                    <div className="price-display">
                      <div className="price-value">{t('personajes3d.pricing.advanced.price')}</div>
                      <div className="price-period">{t('personajes3d.pricing.advanced.period')}</div>
                    </div>
                    <ul className="feature-list">
                      {t('personajes3d.pricing.advanced.features').map((f, i) => (
                        <li key={`a-${i}`}><i className="bi bi-check2-circle"></i> {f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="pricing-card">
                    <div className="plan-header">
                      <div className="plan-icon"><i className="bi bi-person-video"></i></div>
                      <h3>{t('personajes3d.pricing.premium.title')}</h3>
                    </div>
                    <p>{t('personajes3d.pricing.premium.description')}</p>
                    <div className="price-display">
                      <div className="price-value">{t('personajes3d.pricing.premium.price')}</div>
                      <div className="price-period">{t('personajes3d.pricing.premium.period')}</div>
                    </div>
                    <ul className="feature-list">
                      {t('personajes3d.pricing.premium.features').map((f, i) => (
                        <li key={`p-${i}`}><i className="bi bi-check2-circle"></i> {f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="cta-buttons">
                <a href={projectData.liveProjectUrl} className="btn-view-project">View Live Project</a>
                <a href={projectData.nextProjectUrl} className="btn-next-project">Next Project <i className="bi bi-arrow-right"></i></a>
              </div>

              <style jsx>{`
                .main-heading { margin-bottom: 1rem; }
                .visual-content { position: relative; }
                .benefit-card {
                  background: var(--surface-color);
                  border: 1px solid rgba(255, 255, 255, 0.08);
                  border-radius: 12px;
                  padding: 1rem;
                  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
                  transition: transform 0.2s ease, box-shadow 0.2s ease;
                  height: 100%;
                }
                .benefit-card:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(0,0,0,0.12); }
                .benefit-icon { color: var(--accent-color); font-size: 1.5rem; margin-bottom: 0.5rem; }

                .service-sidebar .action-card {
                  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
                  border: 1px solid rgba(255,255,255,0.12);
                  border-radius: 12px;
                  padding: 1rem;
                }
                .service-sidebar .btn { display: inline-flex; align-items: center; gap: 0.5rem; }

                .pricing-card {
                  background: var(--background-color);
                  border: 1px solid rgba(255, 255, 255, 0.1);
                  border-radius: 12px;
                  padding: 1rem;
                  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
                  height: 100%;
                }
                .pricing-card.popular { border: 2px solid var(--accent-color); }
                .plan-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem; }
                .plan-icon { color: var(--accent-color); font-size: 1.5rem; }
                .popular-badge { background: var(--accent-color); color: #000; font-weight: 600; padding: 0.125rem 0.5rem; border-radius: 999px; font-size: 0.75rem; margin-left: auto; }
                .price-display { display: flex; align-items: baseline; gap: 0.375rem; margin: 0.5rem 0; }
                .price-value { font-size: 1.5rem; font-weight: 700; }
                .price-period { color: var(--default-color); opacity: 0.8; }

                .feature-list { list-style: none; padding-left: 0; margin: 0; }
                .feature-list li { display: flex; align-items: center; gap: 0.5rem; padding: 0.25rem 0; }

                .cta-buttons { display: flex; gap: 0.75rem; margin-top: 1rem; }
                .btn-view-project, .btn-next-project {
                  display: inline-flex;
                  align-items: center;
                  gap: 0.5rem;
                  padding: 0.5rem 0.875rem;
                  border-radius: 10px;
                  border: 1px solid rgba(255,255,255,0.12);
                  background: var(--surface-color);
                }
                .btn-next-project { background: linear-gradient(90deg, var(--accent-color), var(--accent-color)); color: #000; font-weight: 600; }
              `}</style>
            </div>
          )}

          {project.template === "courses" && (
            <div>
              <div className="row mb-5">
                <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
                  <div className="about-image position-relative">
                    <img src="/assets/img/courses.png" className="img-fluid rounded-4 shadow-sm" alt="Courses development overview" loading="lazy" />
                    <div className="experience-badge">
                      <span className="years">10+</span>
                      <span className="text">{t('about.yearsExperience')}</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-left" data-aos-delay="300">
                  <div className="about-content">
                    <h2>{t('about.mainTitle')}</h2>
                    <p className="lead-text">{t('about.leadText')}</p>
                    <p className="description">{t('about.description')}</p>
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
                    <a href={projectData.liveProjectUrl} className="btn btn-primary mt-4" onClick={() => trackButtonClick('About Courses CTA', 'Portfolio Courses')}>
                      {t('about.ctaButton')}
                    </a>
                  </div>
                </div>
              </div>

              <div className="container" data-aos="fade-up" data-aos-delay="150">
                
                <h2>{t('portfolioCourses.title')}</h2>
                
                <div className="row g-4">
                  {courseButtons.map((btn) => (
                    <div className="col-6 col-md-4 col-lg-3" key={btn.key}>
                      <a
                        href={btn.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="course-card d-block"
                        onClick={() => trackButtonClick(`Course Button - ${btn.key}`, 'Portfolio Courses')}
                      >
                        <img src={btn.image} alt={btn.label} className="img-fluid rounded-4" loading="lazy" />
                        <span className="course-icon"><i className="bi bi-box-arrow-up-right"></i></span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <style jsx>{`
                .course-card { position: relative; border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; overflow: hidden; }
                .course-card img { width: 100%; height: auto; display: block; }
                .course-card .course-icon { position: absolute; right: 10px; bottom: 10px; background: rgba(0,0,0,0.6); color: #fff; border-radius: 8px; padding: 6px; }
                .course-card:hover { transform: translateY(-2px); transition: transform 0.2s ease; }
              `}</style>


              <section className="steps section">
                <div className="container section-title" data-aos="fade-up">
                  <h2>{t('steps.title')}</h2>
                  <div><span>{t('steps.subtitle')}</span> <span className="description-title">{t('steps.subtitleHighlight')}</span></div>
                </div>
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                  <div className="steps-wrapper">
                    <div className="step-item" data-aos="fade-right" data-aos-delay="200">
                      <div className="step-content">
                        <div className="step-icon"><i className="bi bi-mortarboard"></i></div>
                        <div className="step-info">
                          <span className="step-number">{t('steps.step1.number')}</span>
                          <h3>{t('steps.step1.title')}</h3>
                          <p>{t('steps.step1.description')}</p>
                        </div>
                      </div>
                    </div>
                    <div className="step-item" data-aos="fade-left" data-aos-delay="300">
                      <div className="step-content">
                        <div className="step-icon"><i className="bi bi-kanban"></i></div>
                        <div className="step-info">
                          <span className="step-number">{t('steps.step2.number')}</span>
                          <h3>{t('steps.step2.title')}</h3>
                          <p>{t('steps.step2.description')}</p>
                        </div>
                      </div>
                    </div>
                    <div className="step-item" data-aos="fade-right" data-aos-delay="400">
                      <div className="step-content">
                        <div className="step-icon"><i className="bi bi-code-slash"></i></div>
                        <div className="step-info">
                          <span className="step-number">{t('steps.step3.number')}</span>
                          <h3>{t('steps.step3.title')}</h3>
                          <p>{t('steps.step3.description')}</p>
                        </div>
                      </div>
                    </div>
                    <div className="step-item" data-aos="fade-left" data-aos-delay="500">
                      <div className="step-content">
                        <div className="step-icon"><i className="bi bi-graph-up-arrow"></i></div>
                        <div className="step-info">
                          <span className="step-number">{t('steps.step4.number')}</span>
                          <h3>{t('steps.step4.title')}</h3>
                          <p>{t('steps.step4.description')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

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
