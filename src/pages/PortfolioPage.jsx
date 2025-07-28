import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { trackButtonClick } from '../utils/analytics';
import { portfolioData, createSlug } from '../data/portfolioData';

const PortfolioPage = () => {
  const [filter, setFilter] = useState('*');
  const { lang } = useParams();

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    const project = portfolioData[projectId];
    if (project) {
      const slug = createSlug(project.title);
      // Navigate within SPA to portfolio details section using slug with language prefix
      navigate(`/${lang}/portfolio/${slug}`);
      trackButtonClick(`Portfolio Details - ${project.title}`, 'Portfolio');
    }
  };

  return (
    <>
      {/* Local styles for clickable portfolio entries */}
      <style>{`
        .portfolio-entry {
          cursor: pointer;
          transition: box-shadow 0.25s ease; /* smooth accent border */
        }
        .portfolio-entry:hover {
          box-shadow: inset 0 0 0 4px var(--accent-color, #ff6f61);
        }

        /* overlay styles */
        .portfolio-entry .entry-image { position: relative; overflow: hidden; }
        .portfolio-entry .overlay-content,
        .portfolio-entry .entry-overlay { /* support both markup variations */
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: rgba(0,0,0,0.6);
          color: #fff;
          padding: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .portfolio-entry:hover .overlay-content,
        .portfolio-entry:hover .entry-overlay {
          opacity: 1;
        }
        .overlay-content .entry-meta { font-size: 0.875rem; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 0.5rem; }
        .overlay-content .entry-title { font-size: 1.125rem; }
      `}</style>
      <section id="portfolio" className="portfolio section">


        <div className="page-title dark-background aos-init aos-animate" data-aos="fade">
          <div className="container position-relative">
            <h1>Portfolio</h1>
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="current">Portfolio</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Section Title */}
        {/* <div className="container section-title aos-init aos-animate" data-aos="fade-up">
          <h2>Portfolio</h2>
          <div><span>Check Our</span> <span className="description-title">Portfolio</span></div>
        </div> */}
        {/* End Section Title */}

        <div className="container-fluid aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

            <ul className="portfolio-filters isotope-filters aos-init aos-animate mt-4" data-aos="fade-up" data-aos-delay="200">
              <li data-filter="*" className={filter === '*' ? 'filter-active' : ''} onClick={() => handleFilterChange('*')}>
                <i className="bi bi-grid-3x3"></i> All Projects
              </li>
              <li data-filter=".filter-ui" className={filter === '.filter-ui' ? 'filter-active' : ''} onClick={() => handleFilterChange('.filter-ui')}>
                <i className="bi bi-phone"></i> UI/UX
              </li>
              <li data-filter=".filter-development" className={filter === '.filter-development' ? 'filter-active' : ''} onClick={() => handleFilterChange('.filter-development')}>
                <i className="bi bi-code-slash"></i> Development
              </li>
              <li data-filter=".filter-photography" className={filter === '.filter-photography' ? 'filter-active' : ''} onClick={() => handleFilterChange('.filter-photography')}>
                <i className="bi bi-camera"></i> Photography
              </li>
              <li data-filter=".filter-marketing" className={filter === '.filter-marketing' ? 'filter-active' : ''} onClick={() => handleFilterChange('.filter-marketing')}>
                <i className="bi bi-graph-up"></i> Marketing
              </li>
            </ul>

            <div className="row g-4 isotope-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">

              <div className={`col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-ui ${filter === '*' || filter === '.filter-ui' ? 'd-block' : 'd-none'}`}>
                <article className="portfolio-entry" onClick={() => handleProjectClick(1)}>
                  <figure className="entry-image">
                    <img src="/assets/img/portfolio/material-receipt/02-finished/end-img.png" className="img-fluid" alt="" loading="lazy" />
                    <div className="overlay-content">
                      <div className="entry-meta">UI/UX Design</div>
                      <h3 className="entry-title">A UX Overhaul for Material Receipts</h3>
                      <div className="entry-links">
                        {/* <a href="assets/img/portfolio/material-receipt/02-finished/end-img.png" className="glightbox" data-gallery="portfolio-gallery-ui" data-glightbox="title: Mobile Banking App; description: Praesent commodo cursus magna, vel scelerisque nisl consectetur.">
                          <i className="bi bi-arrows-angle-expand"></i>
                        </a> */}
                        <button
                          onClick={() => handleProjectClick(1)}
                          style={{ background: 'none', border: 'none', padding: 0, color: 'inherit' }}
                        >
                          <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </figure>
                </article>
              </div>



              <div className={`col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-ui ${filter === '*' || filter === '.filter-ui' ? 'd-block' : 'd-none'}`}>
                <article className="portfolio-entry" onClick={() => handleProjectClick(2)}>
                  <figure className="entry-image">
                    <img src="/assets/img/portfolio/together/61c5f6151173877.Y3JvcCw0MjkwLDMzNTUsNDM1LDA-500.png" className="img-fluid" alt="" loading="lazy" />
                    <div className="overlay-content">
                      <div className="entry-meta">UI/UX Design</div>
                      <h3 className="entry-title">A solution to improve Sleep quality on Colombian Women</h3>
                      <div className="entry-links">
                        {/* <a href="assets/img/portfolio/material-receipt/02-finished/end-img.png" className="glightbox" data-gallery="portfolio-gallery-ui" data-glightbox="title: Mobile Banking App; description: Praesent commodo cursus magna, vel scelerisque nisl consectetur.">
                          <i className="bi bi-arrows-angle-expand"></i>
                        </a> */}
                        <button
                          onClick={() => handleProjectClick(2)}
                          style={{ background: 'none', border: 'none', padding: 0, color: 'inherit' }}
                        >
                          <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </figure>
                </article>
              </div>




              <div className={`col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-ui ${filter === '*' || filter === '.filter-ui' ? 'd-block' : 'd-none'}`}>
                <article className="portfolio-entry" onClick={() => handleProjectClick(3)}>
                  <figure className="entry-image">
                    <img src="/assets/img/portfolio/material-receipt/02-finished/end-img.png" className="img-fluid" alt="" loading="lazy" />
                    <div className="overlay-content">
                      <div className="entry-meta">UI/UX Design</div>
                      <h3 className="entry-title">A UX Overhaul for Material Receipts</h3>
                      <div className="entry-links">
                        {/* <a href="assets/img/portfolio/material-receipt/02-finished/end-img.png" className="glightbox" data-gallery="portfolio-gallery-ui" data-glightbox="title: Mobile Banking App; description: Praesent commodo cursus magna, vel scelerisque nisl consectetur.">
                          <i className="bi bi-arrows-angle-expand"></i>
                        </a> */}
                        <button
                          onClick={() => handleProjectClick(1)}
                          style={{ background: 'none', border: 'none', padding: 0, color: 'inherit' }}
                        >
                          <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </figure>
                </article>
              </div>





              {/* End Portfolio Item */}

              {/* <div className={`col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-development ${filter === '*' || filter === '.filter-development' ? 'd-block' : 'd-none'}`}>
                <article className="portfolio-entry" onClick={() => handleProjectClick(2)}>
                  <figure className="entry-image">
                    <img src="assets/img/portfolio/portfolio-10.webp" className="img-fluid" alt="" loading="lazy" />
                    <div className="overlay-content">
                      <div className="entry-meta">Development</div>
                      <h3 className="entry-title">E-Learning Platform</h3>
                      <div className="entry-links">
                        <a href="assets/img/portfolio/portfolio-10.webp" className="glightbox" data-gallery="portfolio-gallery-development" data-glightbox="title: E-Learning Platform; description: Nulla vitae elit libero, a pharetra augue mollis interdum.">
                          <i className="bi bi-arrows-angle-expand"></i>
                        </a>
                        <button
                          onClick={() => handleProjectClick(3)}
                          style={{ background: 'none', border: 'none', padding: 0, color: 'inherit' }}
                        >
                          <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </figure>
                </article>
              </div> */}
              {/* End Portfolio Item */}

              {/* <div className={`col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-photography ${filter === '*' || filter === '.filter-photography' ? 'd-block' : 'd-none'}`}>
                <article className="portfolio-entry" onClick={() => handleProjectClick(3)}>
                  <figure className="entry-image">
                    <img src="assets/img/portfolio/portfolio-7.webp" className="img-fluid" alt="" loading="lazy" />
                    <div className="entry-overlay">
                      <div className="overlay-content">
                        <div className="entry-meta">Photography</div>
                        <h3 className="entry-title">Urban Architecture</h3>
                        <a href="assets/img/portfolio/portfolio-7.webp" className="glightbox" data-gallery="portfolio-gallery-photography" data-glightbox="title: Urban Architecture; description: Sed ut perspiciatis unde omnis iste natus error sit voluptatem.">
                          <i className="bi bi-arrows-angle-expand"></i>
                        </a>
                        <button onClick={() => handleProjectClick(3)} style={{ background: 'none', border: 'none', padding: 0, color: 'inherit' }}>
                          <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </figure>
                </article>
              </div> */}
              {/* End Portfolio Item */}

              {/* <div className={`col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-marketing ${filter === '*' || filter === '.filter-marketing' ? 'd-block' : 'd-none'}`}>
                <article className="portfolio-entry" onClick={() => handleProjectClick(6)}>
                  <figure className="entry-image">
                    <img src="assets/img/portfolio/portfolio-4.webp" className="img-fluid" alt="" loading="lazy" />
                    <div className="entry-overlay">
                      <div className="overlay-content">
                        <div className="entry-meta">Marketing</div>
                        <h3 className="entry-title">Social Media Campaign</h3>
                        <a href="assets/img/portfolio/portfolio-4.webp" className="glightbox" data-gallery="portfolio-gallery-marketing" data-glightbox="title: Social Media Campaign; description: Quis autem vel eum iure reprehenderit qui in ea voluptate.">
                          <i className="bi bi-arrows-angle-expand"></i>
                        </a>
                        <button onClick={() => handleProjectClick(6)} style={{ background: 'none', border: 'none', padding: 0, color: 'inherit' }}>
                          <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </figure>
                </article>
              </div> */}
              {/* End Portfolio Item */}

              {/* <div className={`col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-ui ${filter === '*' || filter === '.filter-ui' ? 'd-block' : 'd-none'}`}>
                <article className="portfolio-entry" onClick={() => handleProjectClick(3)}>
                  <figure className="entry-image">
                    <img src="assets/img/portfolio/portfolio-2.webp" className="img-fluid" alt="" loading="lazy" />
                    <div className="entry-overlay">
                      <div className="overlay-content">
                        <div className="entry-meta">UI/UX Design</div>
                        <h3 className="entry-title">Smart Home Interface</h3>
                        <a href="assets/img/portfolio/portfolio-2.webp" className="glightbox" data-gallery="portfolio-gallery-ui" data-glightbox="title: Smart Home Interface; description: At vero eos et accusamus et iusto odio dignissimos ducimus.">
                          <i className="bi bi-arrows-angle-expand"></i>
                        </a>
                        <button
                          onClick={() => handleProjectClick(3)}
                          style={{ background: 'none', border: 'none', padding: 0, color: 'inherit' }}
                        >
                          <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </figure>
                </article>
              </div> */}
              {/* End Portfolio Item */}

              {/* <div className={`col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-development ${filter === '*' || filter === '.filter-development' ? 'd-block' : 'd-none'}`}>
                <article className="portfolio-entry" onClick={() => handleProjectClick(4)}>
                  <figure className="entry-image">
                    <img src="assets/img/portfolio/portfolio-11.webp" className="img-fluid" alt="" loading="lazy" />
                    <div className="entry-overlay">
                      <div className="overlay-content">
                        <div className="entry-meta">Development</div>
                        <h3 className="entry-title">Cloud Management System</h3>
                        <a href="assets/img/portfolio/portfolio-11.webp" className="glightbox" data-gallery="portfolio-gallery-development" data-glightbox="title: Cloud Management System; description: Temporibus autem quibusdam et aut officiis debitis.">
                          <i className="bi bi-arrows-angle-expand"></i>
                        </a>
                        <button onClick={() => handleProjectClick(4)} style={{ background: 'none', border: 'none', padding: 0, color: 'inherit' }}>
                          <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </figure>
                </article>
              </div> */}
              {/* End Portfolio Item */}

              {/* <div className={`col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-photography ${filter === '*' || filter === '.filter-photography' ? 'd-block' : 'd-none'}`}>
                <article className="portfolio-entry" onClick={() => handleProjectClick(5)}>
                  <figure className="entry-image">
                    <img src="assets/img/portfolio/portfolio-8.webp" className="img-fluid" alt="" loading="lazy" />
                    <div className="entry-overlay">
                      <div className="overlay-content">
                        <div className="entry-meta">Photography</div>
                        <h3 className="entry-title">Nature Collection</h3>
                        <a href="assets/img/portfolio/portfolio-8.webp" className="glightbox" data-gallery="portfolio-gallery-photography" data-glightbox="title: Nature Collection; description: Integer posuere erat a ante venenatis dapibus posuere velit aliquet.">
                          <i className="bi bi-arrows-angle-expand"></i>
                        </a>
                        <button onClick={() => handleProjectClick(5)} style={{ background: 'none', border: 'none', padding: 0, color: 'inherit' }}>
                          <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </figure>
                </article>
              </div> */}
              {/* End Portfolio Item */}
              {/* 
              <div className={`col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-marketing ${filter === '*' || filter === '.filter-marketing' ? 'd-block' : 'd-none'}`}>
                <article className="portfolio-entry" onClick={() => handleProjectClick(7)}>
                  <figure className="entry-image">
                    <img src="assets/img/portfolio/portfolio-5.webp" className="img-fluid" alt="" loading="lazy" />
                    <div className="entry-overlay">
                      <div className="overlay-content">
                        <div className="entry-meta">Marketing</div>
                        <h3 className="entry-title">Brand Strategy</h3>
                        <a href="assets/img/portfolio/portfolio-5.webp" className="glightbox" data-gallery="portfolio-gallery-marketing" data-glightbox="title: Brand Strategy; description: Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.">
                          <i className="bi bi-arrows-angle-expand"></i>
                        </a>
                        <button onClick={() => handleProjectClick(7)} style={{ background: 'none', border: 'none', padding: 0, color: 'inherit' }}>
                          <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </figure>
                </article>
              </div> */}
              {/* End Portfolio Item */}

            </div>
            {/* End Portfolio Container */}

          </div>

        </div>


      </section>
    </>
  );
};

export default PortfolioPage;
