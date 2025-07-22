import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const MinimalistFooter = () => {
  const { getLocalizedPath } = useLanguage();
  return (
    <footer id="footer" className="footer minimalist-footer">
      <div className="container">
        <div className="row gy-3 align-items-center">
          <div className="col-lg-4 col-md-6">
            <Link to={getLocalizedPath('/')} className="logo d-flex align-items-center">
              <span className="sitename">
                <img src="/assets/img/edunest-dark.svg" alt="Edunest" width="120" />
              </span>
            </Link>
          </div>
          
          <div className="col-lg-4 col-md-6 text-center">
            <div className="footer-links">
              <Link to={getLocalizedPath('/')} className="me-3">Home</Link>
              <Link to={getLocalizedPath('/resources')} className="me-3">Recursos</Link>
              <Link to={getLocalizedPath('/courses')} className="me-3">Courses</Link>
              <a href="#contact">Contacto</a>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-12 text-end">
            <div className="social-links d-flex justify-content-end">
              <a href="https://www.linkedin.com/company/l%C3%BAmina-interactiva/" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="copyright text-center mt-3 pt-3" style={{borderTop: '1px solid #eee'}}>
          <p className="mb-0">
            © <span>Copyright</span> <strong className="px-1 sitename">Lúmina Interactiva - Edunest.co</strong> 
            <span>All Rights Reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MinimalistFooter;

