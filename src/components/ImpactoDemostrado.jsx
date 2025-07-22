import React, { useState } from 'react';
import { trackSliderInteraction } from '../utils/analytics';

const ImpactoDemostrado = () => {
  return (
    <div>
     <section id="about" className="about section">
     
     
     
     
               <div className="container">
     
     
     
                 <div className="testimonial-section mt-5 pt-5" data-aos="fade-up" data-aos-delay="100">
                   <div className="row">
                     <div className="col-lg-4" data-aos="fade-right" data-aos-delay="200">
                       <div className="testimonial-intro">
                         <h3>Impacto Demostrado</h3>
                         <p>Descubre cómo nuestras soluciones han transformado la educación en instituciones como la tuya.</p>
                         <div className="swiper-nav-buttons mt-4">
                           <button
                             className="slider-prev"
                             onClick={() => trackSliderInteraction('previous')}
                           >
                             <i className="bi bi-arrow-left"></i>
                           </button>
                           <button
                             className="slider-next"
                             onClick={() => trackSliderInteraction('next')}
                           >
                             <i className="bi bi-arrow-right"></i>
                           </button>
                         </div>
                       </div>
                     </div>
     
                     <div className="col-lg-8" data-aos="fade-left" data-aos-delay="300">
                       <div className="testimonial-slider swiper init-swiper">
                         <script
                           type="application/json"
                           className="swiper-config"
                           dangerouslySetInnerHTML={{
                             __html: JSON.stringify({
                               loop: true,
                               speed: 800,
                               autoplay: {
                                 delay: 5000,
                               },
                               slidesPerView: 1,
                               spaceBetween: 30,
                               navigation: {
                                 nextEl: ".slider-next",
                                 prevEl: ".slider-prev",
                               },
                               breakpoints: {
                                 768: {
                                   slidesPerView: 1,
                                 },
                               },
                             }),
                           }}
                         ></script>
     
                         <div className="swiper-wrapper">
     
     
                           <div className="swiper-slide">
                             <div className="testimonial-item">
                               <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '30px' }}>
     
                                 <img src="assets/img/Logo_del_Politecnico_Grancolombiano.svg" alt="" width="200px" />
                                 <h3>Sistema Integral de Inducción para el Politécnico Grancolombiano</h3>
                               </div>
                               <p><strong>Desafío:</strong> Implementar un curso masivo de inducción con seguimiento en tiempo
                                 real del progreso de miles de estudiantes.</p>
     
                               <p><strong>Solución Innovadora:</strong></p>
                               <ul className="case-study-features" style={{ listStyle: "none" }}>
                                 <li><i className="bi bi-check-circle"></i> Plataforma personalizada con integración directa a
                                   contenido Articulate 360</li>
                                 <li><i className="bi bi-check-circle"></i> Avatar virtual 3D que guía el aprendizaje durante todo
                                   el curso</li>
                                 <li><i className="bi bi-check-circle"></i> Sistema de seguimiento automatizado con:</li>
                                 <ul>
                                   <li>Visualización de progreso por porcentaje</li>
                                   <li>Descarga de reportes para administradores</li>
                                 </ul>
                                 <li><i className="bi bi-check-circle"></i> Actividades interactivas para mayor engagement</li>
                               </ul>
     
                               <p><strong>Resultados Clave:</strong></p>
                               <div className="results-grid">
                                 <div className="result-item">
                                   <span className="result-number">95%</span>
                                   <span className="result-label">Satisfacción estudiantil</span>
                                 </div>
                                 <div className="result-item">
                                   <span className="result-number">100%</span>
                                   <span className="result-label">Cobertura de inducción</span>
                                 </div>
                                 <div className="result-item">
                                   <span className="result-number">2x</span>
                                   <span className="result-label">Más rápido que métodos tradicionales</span>
                                 </div>
                               </div>
                             </div>
                           </div>
     
     
     
     
     
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
     
               </div>
     
             </section>
    </div>
  );
};

export default ImpactoDemostrado;

