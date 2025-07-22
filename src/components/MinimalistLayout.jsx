import React, { useEffect } from 'react';
import MinimalistMenu from './MinimalistMenu';
import MinimalistFooter from './MinimalistFooter';
import { trackButtonClick } from '../utils/analytics';

const MinimalistLayout = ({ children, title }) => {
  useEffect(() => {
    // Set document title if provided
    if (title) {
      document.title = `${title} - Edunest.co`;
    }
  }, [title]);

  return (
    <div className="App minimalist-layout">
      <header id="header" className="header d-flex align-items-center fixed-top minimalist-header">
        {/* <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
            <h1 className="sitename">
              <img src="/assets/img/edunest-dark.svg" alt="Edunest" width="180" style={{ marginTop: "4px" }} />
            </h1>
          </a>

          <MinimalistMenu />

          <a
            className="btn-getstarted"
            href="#contact"
            onClick={() => trackButtonClick('Header Contact Button', 'Minimalist Navigation')}
          >
            Contacto
          </a>
        </div> */}
      </header>

      <main className="minimalist-main">
        {children}
      </main>

      {/* <MinimalistFooter /> */}

      {/* Scroll Top */}
      <a
        href="#header"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
        onClick={() => trackButtonClick('Scroll to Top', 'Minimalist Navigation')}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default MinimalistLayout;

