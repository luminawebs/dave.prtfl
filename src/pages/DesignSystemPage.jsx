import React, { useEffect } from 'react';
import { trackPageView } from '../utils/analytics';
import { trackButtonClick } from '../utils/unifiedAnalytics';
import { Link } from 'react-router-dom';

const DesignSystemPage = () => {

  useEffect(() => {
    trackPageView('Design System');
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main" style={{ padding: '80px 0', minHeight: '100vh', backgroundColor: 'var(--background-color)' }}>

      {/* Design System Hero Header */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" data-aos="fade-up">
          <div className="text-center mb-5">
            <h1 style={{ fontWeight: 800, fontSize: '3rem', letterSpacing: '-1px', marginBottom: '1rem' }}>
              Design <span style={{ color: 'var(--accent-color)', textShadow: '0 0 20px rgba(25, 249, 105, 0.4)' }}>System</span>
            </h1>
            <p className="lead" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--default-color)' }}>
              A comprehensive guide to the visual language and components used across the platform. Professional, sophisticated, and glowing.
            </p>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="section py-5">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="section-title mb-4">
            <h2>Colors</h2>
            <p>Core tokens and gradients</p>
          </div>

          <div className="row g-4">
            {/* Color Swatch Component */}
            {[
              { name: 'Background', variable: '--background-color', hex: '#031119' },
              { name: 'Surface', variable: '--surface-color', hex: '#1b262c' },
              { name: 'Accent', variable: '--accent-color', hex: '#19F969', shadow: '0 0 20px rgba(25, 249, 105, 0.3)' },
              { name: 'Heading', variable: '--heading-color', hex: '#e0e9f2' },
              { name: 'Default Text', variable: '--default-color', hex: 'rgba(255, 255, 255, 0.8)' },
              { name: 'Contrast', variable: '--contrast-color', hex: '#ffffff' },
              { name: 'Important CTA', variable: '--cta-color', hex: '#FA1985', shadow: '0 0 20px rgba(250, 25, 133, 0.4)' },
            ].map((color, idx) => (
              <div key={idx} className="col-lg-2 col-md-4 col-sm-6">
                <div
                  style={{
                    backgroundColor: `var(${color.variable})`,
                    height: '120px',
                    borderRadius: '16px',
                    boxShadow: color.shadow || '0 4px 15px rgba(0,0,0,0.1)',
                    marginBottom: '1rem',
                    border: '1px solid rgba(255,255,255,0.05)'
                  }}
                ></div>
                <h5 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>{color.name}</h5>
                <p style={{ fontSize: '0.8rem', color: 'var(--default-color)', opacity: 0.7 }}>{color.variable}<br />{color.hex}</p>
              </div>
            ))}
          </div>

          {/* Gradients */}
          <div className="row g-4 mt-2">
            <div className="col-md-6">
              <h5 className="mb-3">Brand Gradient</h5>
              <div
                style={{
                  background: 'linear-gradient(135deg, var(--accent-color), rgba(25, 249, 105, 0.2))',
                  height: '100px',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(25, 249, 105, 0.15)'
                }}
              ></div>
            </div>
            <div className="col-md-6">
              <h5 className="mb-3">Surface Gradient</h5>
              <div
                style={{
                  background: 'linear-gradient(135deg, var(--surface-color) 0%, rgba(27, 38, 44, 0.5) 100%)',
                  height: '100px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="section py-5" style={{ backgroundColor: 'var(--surface-color)' }}>
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <div className="section-title mb-4">
            <h2>Typography</h2>
            <p>Heading and Body Font Stack</p>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div style={{ padding: '2rem', background: 'var(--background-color)', borderRadius: '16px', border: '1px solid rgba(25, 249, 105, 0.1)' }}>
                <h1 className="mb-3">Heading 1</h1>
                <h2 className="mb-3">Heading 2</h2>
                <h3 className="mb-3">Heading 3</h3>
                <h4 className="mb-3">Heading 4</h4>
                <h5 className="mb-3">Heading 5</h5>
                <h6 className="mb-3">Heading 6</h6>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <div style={{ padding: '1rem' }}>
                <p className="lead" style={{ marginBottom: '1.5rem', color: 'var(--heading-color)' }}>
                  Lead Paragraph: This is a slightly larger, descriptive text typically used in hero sections or article summaries.
                </p>
                <p>
                  Body Text: This is standard body text. It uses the default font color heavily emphasizing readability. Our custom font stack uses Roboto. The text shouldn't be fully white to reduce eye strain, hence the use of rgba(255,255,255,0.8).
                </p>
                <p>
                  <a href="#typography">This is an inline link</a>, styled with our accent color.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI Components Section */}
      <section className="section py-5">
        <div className="container" data-aos="fade-up" data-aos-delay="300">
          <div className="section-title mb-4">
            <h2>Components</h2>
            <p>Buttons, Badges, and Glow Effects</p>
          </div>

          <div className="row g-5">
            {/* Buttons */}
            <div className="col-md-6">
              <div style={{ padding: '2rem', background: 'var(--surface-color)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 className="mb-4">Buttons</h4>
                <div className="d-flex flex-wrap gap-4 align-items-center mb-4">
                  <Link to="#" className="btn btn-cta" onClick={(e) => { e.preventDefault(); trackButtonClick('Important CTA', 'Design System'); }}>Important Action</Link>
                  <button className="btn btn-primary" onClick={() => trackButtonClick('Primary Button', 'Design System')}>Primary Button</button>
                  <button className="btn btn-outline" onClick={() => trackButtonClick('Outline Button', 'Design System')}>Outline Button</button>
                </div>

                <h4 className="mb-4 mt-5">Neon Glow Specific Button</h4>
                <div className="d-flex flex-wrap gap-4 align-items-center">
                  <button
                    className="btn"
                    style={{
                      backgroundColor: 'transparent',
                      border: '2px solid var(--accent-color)',
                      color: 'var(--accent-color)',
                      padding: '12px 28px',
                      borderRadius: '50px',
                      fontWeight: 600,
                      boxShadow: '0 0 15px rgba(25, 249, 105, 0.4), inset 0 0 15px rgba(25, 249, 105, 0.2)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = 'var(--accent-color)';
                      e.target.style.color = 'var(--background-color)';
                      e.target.style.boxShadow = '0 0 25px rgba(25, 249, 105, 0.8)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = 'var(--accent-color)';
                      e.target.style.boxShadow = '0 0 15px rgba(25, 249, 105, 0.4), inset 0 0 15px rgba(25, 249, 105, 0.2)';
                    }}
                  >
                    Glow Button
                  </button>
                </div>
              </div>
            </div>

            {/* Badges / Tags */}
            <div className="col-md-6">
              <div style={{ padding: '2rem', background: 'var(--surface-color)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', height: '100%' }}>
                <h4 className="mb-4">Neon Tags</h4>
                <div className="d-flex flex-wrap gap-3">
                  <span style={{
                    padding: '8px 16px',
                    background: '#1A1C2E',
                    color: 'var(--accent-color)',
                    border: '1px solid rgba(25, 249, 105, 0.4)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    letterSpacing: '0.5px'
                  }}>React</span>
                  <span style={{
                    padding: '8px 16px',
                    background: '#1A1C2E',
                    color: 'var(--accent-color)',
                    border: '1px solid rgba(25, 249, 105, 0.4)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    letterSpacing: '0.5px'
                  }}>TailwindCSS</span>
                  <span style={{
                    padding: '8px 16px',
                    background: '#1A1C2E',
                    color: 'var(--accent-color)',
                    border: '1px solid rgba(25, 249, 105, 0.4)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    letterSpacing: '0.5px'
                  }}>Next.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Glassmorphism Cards Section */}
      <section className="section py-5">
        <div className="container" data-aos="fade-up" data-aos-delay="400">
          <div className="section-title mb-5">
            <h2>Glow & Glassmorphism</h2>
            <p>Premium UI Elements Details</p>
          </div>

          <div className="row g-4">
            {/* Card 1: Standard Glass */}
            <div className="col-md-4">
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(27, 38, 44, 0.8) 0%, rgba(3, 17, 25, 0.9) 100%)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '2.5rem',
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(25, 249, 105, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <i className="bi bi-gem" style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}></i>
                </div>
                <h3 className="h4 mb-3 text-white">Glass Card</h3>
                <p style={{ color: 'var(--default-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  A sophisticated glassmorphism effect using subtle transparency, background blurs, and delicate white borders to give depth.
                </p>
              </div>
            </div>

            {/* Card 2: Neon Accent Border */}
            <div className="col-md-4">
              <div
                style={{
                  background: 'var(--surface-color)',
                  borderRadius: '24px',
                  padding: '1px',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {/* Gradient Border Background */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, var(--accent-color) 0%, transparent 100%)',
                  opacity: 0.6
                }}></div>

                {/* Content Container */}
                <div style={{
                  background: 'var(--background-color)',
                  borderRadius: '23px',
                  padding: '2.5rem',
                  height: '100%',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--accent-color), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <i className="bi bi-lightning-charge-fill" style={{ fontSize: '1.5rem', color: 'var(--background-color)' }}></i>
                  </div>
                  <h3 className="h4 mb-3 text-white">Gradient Stroke</h3>
                  <p style={{ color: 'var(--default-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Utilizes a gradient background that's clipped by an inner container to create a stunning glowing border effect.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Deep Glow */}
            <div className="col-md-4">
              <div
                style={{
                  background: 'var(--surface-color)',
                  borderRadius: '24px',
                  border: '1px solid rgba(25, 249, 105, 0.2)',
                  padding: '2.5rem',
                  height: '100%',
                  boxShadow: '0 0 30px rgba(25, 249, 105, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 0 50px rgba(25, 249, 105, 0.2), inset 0 0 20px rgba(25, 249, 105, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(25, 249, 105, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(25, 249, 105, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(25, 249, 105, 0.2)';
                }}
              >
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(25, 249, 105, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 0 15px rgba(25, 249, 105, 0.5)' }}>
                  <i className="bi bi-star-fill" style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}></i>
                </div>
                <h3 className="h4 mb-3 text-white">Neon Aura</h3>
                <p style={{ color: 'var(--default-color)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  A deeper dive into the neon aesthetics, heavily relying on box-shadows spread capabilities to emit an aura of light.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DesignSystemPage;
