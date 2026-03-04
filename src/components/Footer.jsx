import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer" style={{ padding: '20px 0', background: 'transparent', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '15px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {/* Copyright */}
          <div className="d-flex align-items-center">
            <span style={{ color: 'var(--default-color)', fontSize: '14px', margin: 0 }}>
              © {new Date().getFullYear()} <strong>David Castañeda</strong>
            </span>
          </div>

          {/* Social Links & Contact */}
          <div className="d-flex align-items-center gap-4">
            <a href="mailto:luminawebs@gmail.com" style={{ color: 'var(--default-color)', fontSize: '15px', textDecoration: 'none', transition: '0.3s' }} onMouseOver={e => { e.currentTarget.style.color = 'var(--accent-color)'; e.currentTarget.style.textShadow = '0 0 8px rgba(25, 249, 105, 0.4)'; }} onMouseOut={e => { e.currentTarget.style.color = 'var(--default-color)'; e.currentTarget.style.textShadow = 'none'; }}>
              <i className="bi bi-envelope me-2"></i> luminawebs@gmail.com
            </a>
            <a href="https://www.linkedin.com/company/l%C3%BAmina-interactiva/" target="_blank" rel="noreferrer" style={{ color: 'var(--default-color)', fontSize: '18px', transition: '0.3s' }} onMouseOver={e => { e.currentTarget.style.color = 'var(--accent-color)'; e.currentTarget.style.textShadow = '0 0 8px rgba(25, 249, 105, 0.4)'; }} onMouseOut={e => { e.currentTarget.style.color = 'var(--default-color)'; e.currentTarget.style.textShadow = 'none'; }}>
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
