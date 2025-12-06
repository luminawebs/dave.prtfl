import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
  
  <footer id="footer" className="footer">

          <div className="container footer-top">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-about">
                <a href="/" className="logo d-flex align-items-center">
                  <span className="sitename"><img src="assets/img/edunest-dark.svg" alt="" /></span>
                </a>
                <p>Descubre estrategias innovadoras para la educación digital. Transformamos contenidos en experiencias
                  interactivas que cautivan a los estudiantes. Combino tecnología
                  pedagógica y diseño impactante para crear cursos que destacan en el competitivo mundo del aprendizaje
                  en línea.</p>
                <div className="social-links d-flex mt-4">
                  {/* <!-- <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a> --> */}
                  <a href="https://www.linkedin.com/company/l%C3%BAmina-interactiva/" target="_blank" rel="noreferrer"><i
                    className="bi bi-linkedin"></i></a>
                </div>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Links</h4>
                <ul>
                  <li><a href="#hero" className="active">Home</a></li>
                  <li><a href="#about">Nosotros</a></li>
                  <li><a href="#services">Soluciones</a></li>
                  <li><a href="#pricing">Planes</a></li>
                  <li><a href="#contact">Contacto</a></li>
                </ul>
              </div>

              {/* <!-- <div className="col-lg-2 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#">Web Design</a></li>
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">Product Management</a></li>
                  <li><a href="#">Marketing</a></li>
                  <li><a href="#">Graphic Design</a></li>
                </ul>
              </div> --> */}

              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contacto</h4>
                <p>Bogotá</p>
                <p>Colombia</p>
                <p className="mt-4"><strong>Teléfono:</strong> <span>+57 310 3339208</span></p>
                <p><strong>Email:</strong> <span>luminawebs@gmail.com</span></p>
              </div>

            </div>
          </div>

          <div className="container copyright text-center mt-4">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">Lúmina Interactiva - Edunest.co</strong> <span>All
              Rights Reserved</span></p>
            <div className="credits">
              {/* <!-- All the links in the footer should remain intact. -->
              <!-- You can delete the links only if you've purchased the pro version. -->
              <!-- Licensing information: https://bootstrapmade.com/license/ -->
              <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
              <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> --> */}
            </div>
          </div>

        </footer>



  );
};

export default Footer;


