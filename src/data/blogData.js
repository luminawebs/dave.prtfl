export const blogPosts = [{
  id: 'ux-cultura-ciudadana-1',
    title: 'Qué Puede Aprender el UX Research de la Cultura Ciudadana en Bogotá',
      date: '2025-12-01',
        excerpt:
  'Conectando las metodologías de UX Research con las intervenciones de Cultura Ciudadana en Bogotá.',
    slug: 'ux-research-cultura-ciudadana-qa',
      content: `
Entre 1995 y 1997, el programa de Cultura Ciudadana en Bogotá se convirtió en un laboratorio urbano de cambio comportamental. Aunque surgió en un contexto social y no digital, sus métodos tienen sorprendentes paralelos con las metodologías de UX Research:

1. ¿Cómo ayuda la investigación cuantitativa a entender el problema?

Igual que en UX, el programa usó métricas para diagnosticar y medir impacto. El Boletín de Violencia y Delincuencia permitió seguir patrones y evaluar resultados, como la reducción en homicidios y accidentes.  
Lección UX: Sin datos no hay mejora; las métricas guían decisiones informadas.

2. ¿Por qué es fundamental observar el comportamiento real (investigación cualitativa)?

Intervenciones como los mimos en los cruces y las tarjetas ciudadanas permitieron observar comportamientos inconscientes y obtener feedback inmediato.  
Lección UX: La observación contextual revela el “por qué” detrás de las acciones del usuario.

3. ¿Se pueden “probar” normas sociales igual que probamos prototipos?

Sí. Los Semilleros de Convivencia y la Carta de Civilidad funcionaron como prototipos sociales: se iteraron con ciudadanos, autoridades e infractores antes de implementarse.  
Lección UX: Antes de lanzar cualquier solución, prueba, co-diseña e itera con usuarios reales.

4. ¿Cuál es el rol de la comunicación en el cambio comportamental?

La narrativa unificadora de “cultura ciudadana” hizo comprensibles las intervenciones y facilitó su adopción.  
Lección UX: Un insight solo influye si se comunica con claridad y propósito.

En conjunto, Cultura Ciudadana demuestra que las mejores experiencias —sociales o digitales— se construyen desde la investigación integral y el entendimiento profundo del comportamiento humano.
    `
},
// {
//   id: 'lorem-2',
//     title: 'Consectetur Adipiscing Elit',
//       date: '2025-12-03',
//         excerpt:
//   'Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed.',
//     slug: 'consectetur-adipiscing-elit',
//       content:
//   'Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.\n\nFusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.'
// },
// {
//   id: 'lorem-3',
//     title: 'Integer Nec Odio Praesent',
//       date: '2025-12-05',
//         excerpt:
//   'Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.',
//     slug: 'integer-nec-odio-praesent',
//       content:
//   'Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.\n\nQuisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.'
// }
];

export const getAllPosts = () => blogPosts;
export const getPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug) || null;
