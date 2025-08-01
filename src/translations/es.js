export const es = {
  // Navigation
  nav: {
    home: 'Home',
    about: 'Nosotros',
    solutions: 'Soluciones',
    contact: 'Contacto',
    avatars3d: 'Avatars 3D',
    courses: 'Cursos',
    plans: 'Planes',
    lmsSaas: 'LMS SaaS',
    resources: 'Recursos',
    portfolio: 'Portafolio',
    experience: 'Experiencia'
  },

  // Header
  header: {
    contact: 'Contacto'
  },

  // Hero Section
  hero: {
    agency: 'LÚMINA INTERACTIVA',
    mainHeading: 'SOLUCIONES ELEARNING',
    description: 'Transformamos contenidos en experiencias interactivas que cautivan a los estudiantes. Crea cursos que destaquen en el competitivo mundo del aprendizaje en línea.',
    ctaButton: 'VER SERVICIOS',
    statsLabel: 'Cursos Implementados',
    carousel: {
      slides: [
        {
          mainHeading: "Cursos en Articulate & HTML5 e AI",
          description: "Diseñamos contenido pedagógico con avatares 3D y plataformas ágiles que revolucionan la educación digital.",
          highlight: "revolucionan",
          mediaType: "image",
          mediaSrc: "/assets/img/courses.png",
          mediaAlt: "Avatares 3D revolucionarios",
          mediaTitle: "Tecnología que Revoluciona",
          cta: {
            text: "Ver Cursos",
            url: "/es/courses",
            icon: "bi-book"
          }
        },
        {
          mainHeading: "iNTEGRACIÓN LMS",
          description: "Conectamos tus cursos con Moodle, Blackboard, Canvas y otros sistemas. Reportes de progreso automáticos y certificación SCORM/xAPI.",
          highlight: "automáticos",
          mediaType: "image",
          mediaSrc: "/assets/img/lms.png",
          mediaAlt: "Integración LMS",
          mediaTitle: "Integración Perfecta",
          cta: {
            text: "Ver Integraciones",
            url: "/es/lmspricing",
            icon: "bi-link-45deg"
          }
        },
        {
          mainHeading: "3D AVATARS",
          description: "Avatares virtuales económicos que guían a los estudiantes, explican conceptos complejos y hacen el aprendizaje más cercano y memorable.",
          highlight: "memorable",
          mediaType: "video",
          mediaSrc: "https://iframe.mediadelivery.net/embed/354319/33fc09af-d689-4669-8c79-82816f38f0a7?autoplay=true&loop=false&muted=false&preload=true&responsive=true",
          mediaAlt: "Video ejemplo de experiencias interactivas",
          mediaTitle: "Experiencias Interactivas 3D",
          cta: {
            text: "Ver Demo",
            url: "/es/personajes3d",
            icon: "bi-play-circle"
          }
        }
      ],
      controls: {
        prevLabel: "Slide anterior",
        nextLabel: "Siguiente slide",
        indicatorLabel: "Ir a slide"
      }
    }
  },

  // About Section
  about: {
    title: 'Nosotros',
    subtitle: 'Conoce más',
    subtitleHighlight: 'sobre nuestra experiencia',
    yearsExperience: '+5 Años en Educación Digital',
    mainTitle: 'UI/UX Developer Learning Experience Designer',
    leadText: 'Con un Master en Innovación y más de 5 años de experiencia en UI/UX, me especializo en diseñar soluciones de eLearning que transforman la educación digital.',
    description: 'Como profesional SCRUM Master I (PSM I) con especialización en Gestión Estratégica de Diseño, combino metodologías de Design Thinking con tecnologías avanzadas para crear experiencias de aprendizaje centradas en el usuario.',
    professionalExperience: {
      title: 'Experiencia Profesional',
      roles: [
        {
          company: 'Lúmina Interactiva',
          position: 'Learning Experience Designer (LxD)',
          period: 'Mar 2025 - Presente',
          location: 'Bogotá, Colombia',
          description: 'Diseño y desarrollo de plataformas de aprendizaje intuitivas y centradas en el usuario. Integración y coordinación de tecnologías educativas avanzadas.'
        },
        {
          company: 'Capgemini',
          position: 'UI/UX Developer',
          period: 'Jul 2023 - Mar 2025',
          location: 'Bogotá, Colombia',
          description: 'Liderazgo en iniciativas de diseño UX/UI como parte del equipo de SLB (Schlumberger). Implementación de soluciones digitales centradas en el usuario.'
        },
        {
          company: 'Dominio Estudio de Diseño',
          position: 'Web Development  26 UI Design Instructor',
          period: 'Oct 2022 - Jul 2023',
          location: 'Bogotá, Colombia',
          description: 'Capacitación en desarrollo web y diseño de interfaces. Uso de HTML, CSS y JavaScript en proyectos educativos.'
        },
        {
          company: 'Sii Group',
          position: 'UI/UX Designer',
          period: 'Mar 2022 - Jul 2023',
          location: 'Bogotá, Colombia',
          description: 'Desarrollo de experiencias de usuario y diseño de interfaces intuitivas para OnepayApp.'
        },
        {
          company: 'Universidad EAN',
          position: 'Multimedia Coordinator',
          period: 'Oct 2016 - Oct 2019',
          location: 'Bogotá, Colombia',
          description: 'Coordinación de proyectos multimedia, diseño de interfaces y gestión de plataformas de aprendizaje virtual.'
        }
      ]
    },
    skills: {
      title: 'Especialidades Técnicas',
      list: [
        'CSS Flexbox, LESS',
        'Design Thinking, Prototyping',
        'HTML5, JavaScript, Angular, React',
        'UX Research, User Testing',
        'SCORM, xAPI Integration',
        'Articulate Storyline, Rise'
      ]
    },
    sectors: {
      title: 'Sectores de Experiencia',
      list: [
        'Banca y Servicios Financieros',
        'Energía (Oil & Gas)',
        'Educación Superior',
        'E-learning y EdTech'
      ]
    },
    education: {
      title: 'Formación Académica',
      masters: 'Magister en Innovación - Universidad EAN',
      specialization: 'Especialización en Gestión Estratégica del Diseño',
      degree: 'Profesional en Diseño Gráfico - Fundación Universitaria del Área Andina',
      certifications: [
        'Master Digital Product Design: UX Research UI Design',
        'Professional SCRUM Master I (PSM I)',
        'UX User Testing',
        'Quickstart AngularJS'
      ]
    },
    integralSupport: 'Metodología Ágil',
    integralSupportDesc: 'Aplicamos metodologías SCRUM y Design Thinking para entregar proyectos en tiempo récord con calidad profesional.',
    pedagogicalTech: 'Enfoque User-Centric',
    pedagogicalTechDesc: 'Diseñamos experiencias centradas en el usuario, utilizando research, testing y prototyping para maximizar el engagement.',
    ctaButton: 'Ver Portafolio'
  },

  // Professional Experience Section
  experience: {
    title: 'Experiencia Profesional',
    subtitle: 'Mi trayectoria',
    subtitleHighlight: 'profesional',
    description: 'Más de 5 años construyendo soluciones digitales innovadoras en sectores clave como educación, banca y energía.',
    roles: [
      {
        company: 'Lúmina Interactiva',
        position: 'Learning Experience Designer (LxD)',
        period: 'Marzo 2025 - Presente',
        duration: '5 meses',
        location: 'Bogotá, Capital District, Colombia',
        description: 'Diseño y desarrollo de experiencias de aprendizaje intuitivas y centradas en el usuario, integrando tecnologías educativas avanzadas.',
        achievements: [
          'Coordinación de proyectos de innovación educativa',
          'Integración de tecnologías LXD avanzadas',
          'Desarrollo de plataformas de aprendizaje personalizadas'
        ],
        technologies: ['Design Thinking', 'LXD', 'User Research', 'Prototyping']
      },
      {
        company: 'Capgemini',
        position: 'UI/UX Developer',
        period: 'Julio 2023 - Marzo 2025',
        duration: '1 año 9 meses',
        location: 'Bogotá, D.C., Capital District, Colombia',
        description: 'Liderazgo de iniciativas de diseño UX/UI como parte del equipo de SLB (Schlumberger). Entrega de experiencias digitales centradas en el usuario para diversas aplicaciones web y móviles.',
        achievements: [
          'Colaboración con equipos multifuncionales en proyectos UX/UI',
          'Ejecución de design sprints para wireframes y prototipos de alta fidelidad',
          'Mejora de UX a través de testing iterativo y feedback de usuarios',
          'Implementación de soluciones UI basadas en research y best practices'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Angular', 'UX Research']
      },
      {
        company: 'Dominio Estudio de Diseño',
        position: 'Web Development & UI Design Instructor',
        period: 'Octubre 2022 - Julio 2023',
        duration: '10 meses',
        location: 'Bogotá, Capital District, Colombia',
        description: 'Instructor profesional en desarrollo web y diseño de interfaces como parte del proyecto "Desarrollo de Aplicación de Software y Creación de Cursos de Capacitación para Desarrolladores Web".',
        achievements: [
          'Módulos de Introducción a Programación & Control de Versiones (GIT) - 15 horas',
          'Control de Versiones Avanzado (GIT) - 15 horas',
          'HTML & CSS3 (CSS Grid y Flexbox) - 30 horas',
          'Diseño de Interfaces Accesibles - 16 horas',
          'Preprocesadores CSS (SASS, Less, PostCSS) - 30 horas',
          'Frameworks de Plantillas (Bootstrap) - 15 horas'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'GIT', 'Bootstrap', 'SASS', 'LESS']
      },
      {
        company: 'Sii Group',
        position: 'UI/UX Designer',
        period: 'Marzo 2022 - Julio 2023',
        duration: '1 año 5 meses',
        location: 'Bogotá, Distrito Capital, Colombia',
        description: 'Aseguré que cada paso propuesto que experimentará un usuario en su interacción con el producto terminado se ajuste a las necesidades de estos usuarios, acompañando la visión general creada por la estructura propuesta de la app Onepay del equipo de Transbank Chile.',
        achievements: [
          'Diseño de experiencias de usuario centradas en el cliente',
          'Colaboración directa con Transbank Chile',
          'Optimización de flujos de usuario para OnepayApp'
        ],
        technologies: ['UI Design', 'UX Research', 'Prototyping', 'User Testing']
      },
      {
        company: 'BRM S.A.',
        position: 'Creative Technologist',
        period: 'Enero 2022 - Marzo 2022',
        duration: '3 meses',
        location: 'Bogotá, Distrito Capital, Colombia',
        description: 'Desarrollo de soluciones de tecnología de la información para proyectos de innovación digital en Procolombia. Colaboración con departamentos de producción y marketing.',
        achievements: [
          'Diseño de prototipos de software',
          'Mejora de experiencias digitales de usuario',
          'Participación en proyectos de Procolombia y sus productos digitales'
        ],
        technologies: ['Digital Innovation', 'Prototyping', 'UX Design']
      },
      {
        company: 'Universidad La Gran Colombia',
        position: 'Profesional Asociado - Vicerrectoría de Innovación y Emprendimiento',
        period: 'Octubre 2021 - Enero 2022',
        duration: '4 meses',
        location: 'Bogotá, Distrito Capital, Colombia',
        description: 'Coordinación y creación de proyectos de Innovación, UX y UI relacionados con educación. Creación de Entornos Virtuales de Aprendizaje y contenido para cursos de Emprendimiento e Innovación.',
        achievements: [
          'Metodología basada en diseño centrado en el usuario',
          'Implementación de design thinking',
          'Metodologías de ejecución de proyectos educativos'
        ],
        technologies: ['Design Thinking', 'UX/UI', 'E-learning', 'Innovation']
      },
      {
        company: 'Universidad EAN',
        position: 'Coordinador Multimedia & Web Designer',
        period: 'Octubre 2016 - Octubre 2019',
        duration: '3 años 1 mes',
        location: 'Bogotá',
        description: 'Coordinación y dirección de proyectos multimedia, desarrollo web con HTML5, CSS3, LESS, JavaScript, jQuery, Bootstrap. Creación de recursos interactivos y coordinación de equipos de e-learning.',
        achievements: [
          'Gestión de plataforma Blackboard',
          'Nominación universitaria en el campo de innovación',
          'Mejora de procesos operativos internos en virtualidad',
          'Creación de módulos de enseñanza virtual (e-learning)'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'LESS', 'Blackboard']
      }
    ],
    stats: {
      experience: '5+',
      experienceLabel: 'Años de Experiencia',
      projects: '100+',
      projectsLabel: 'Proyectos Completados',
      sectors: '4',
      sectorsLabel: 'Sectores de Industria',
      certifications: '10+',
      certificationsLabel: 'Certificaciones'
    },
    heroTitle: 'Experiencia Profesional',
    heroSubtitle: 'Un recorrido completo por mi trayectoria profesional, logros y las tecnologías que he dominado a lo largo del camino.',
    achievements: 'Logros Principales',
    technologies: 'Tecnologías y Herramientas',
    cta: 'Hablemos de tu próximo proyecto'
  },

  // Services Section
  services: {
    title: 'Soluciones',
    subtitle: 'Descubre nuestras',
    subtitleHighlight: 'herramientas educativas',
    mainHeading: 'Transformación educativa',
    mainHeadingHighlight: 'con tecnología innovadora',
    summary: 'Combinamos diseño pedagógico, herramientas interactivas (como personajes 3D y plataformas ágiles) y contenido multimedia para crear experiencias de aprendizaje que cautivan a los estudiantes y simplifican la gestión académica.',
    viewAllSolutions: 'Ver todas las soluciones',
    articulate: {
      title: 'Cursos en',
      titleHighlight: 'Articulate 360',
      description: 'Contenido interactivo y responsive diseñado pedagógicamente con Storyline y Rise. Incluye evaluaciones, simulaciones y compatibilidad SCORM para tu LMS.'
    },
    html5: {
      title: 'Contenido',
      titleHighlight: 'HTML5',
      description: 'Módulos multimedia con animaciones, gamificación y actividades interactivas compatibles con cualquier dispositivo móvil o computadora.'
    },
    avatars3d: {
      title: 'Avatars 3D',
      description: 'Avatares virtuales económicos que guían a los estudiantes, explican conceptos complejos y hacen el aprendizaje más cercano y memorable.'
    },
    platform: {
      title: 'Plataforma',
      titleHighlight: 'Express',
      description: 'Sistema para crear cursos universitarios en semanas, no meses. Sube tus PDFs, videos y contenido existente - nosotros lo convertimos en un curso profesional.'
    },
    video: {
      title: 'Producción',
      titleHighlight: 'de Video',
      description: 'Videos educativos profesionales con animaciones, capturas de pantalla y locuciones. Ideal para explicar procesos complejos de manera visual.'
    },
    lms: {
      title: 'Integración',
      titleHighlight: 'LMS',
      description: 'Conectamos tus cursos con Moodle, Blackboard, Canvas y otros sistemas. Reportes de progreso automáticos y certificación SCORM/xAPI.'
    }
  },

  // Steps Section
  steps: {
    title: 'Proceso',
    subtitle: 'Nuestro método',
    subtitleHighlight: 'de trabajo',
    step1: {
      number: 'Paso 01',
      title: 'Diagnóstico Educativo',
      description: 'Analizamos tus objetivos de aprendizaje, público objetivo y contenido existente para recomendar la mejor combinación de herramientas (Articulate, HTML5, 3D o plataforma express).'
    },
    step2: {
      number: 'Paso 02',
      title: 'Diseño Instruccional',
      description: 'Creamos la estructura pedagógica: guiones para tus videos, flujos de interacción, actividades evaluativas y la personalización de tu personaje 3D si aplica.'
    },
    step3: {
      number: 'Paso 03',
      title: 'Producción Ágil',
      description: 'Desarrollamos tu curso en 2-4 semanas: grabamos videos, programamos interacciones HTML5, configuramos la plataforma y te entregamos avances semanales para revisión.'
    },
    step4: {
      number: 'Paso 04',
      title: 'Implementación con Métricas',
      description: 'Publicamos tu curso en tu LMS o nuestra plataforma, con reportes automáticos de progreso estudiantil y soporte continuo para actualizaciones.'
    }
  },

  // Call to Action Section
  cta: {
    badge: '5+ Años de Experiencia',
    title: 'Transforma tu educación digital con experiencia comprobada',
    description: 'Con más de 5 años en UI/UX y experiencia en sectores clave como banca, energía y educación, diseño soluciones de eLearning que realmente funcionan. Magister en Innovación y certificado SCRUM Master I.',
    feature1: 'Master en Innovación (Universidad EAN)',
    feature2: 'Professional SCRUM Master I (PSM I)',
    feature3: 'Experiencia en Capgemini, EAN University',
    primaryButton: 'Colaboremos',
    secondaryButton: 'Ver experiencia',
    statsText: 'Proyectos exitosos entregados'
  },

  // Contact Section
  contact: {
    title: 'Contacto',
    subtitle: 'Vamos a',
    subtitleHighlight: 'Conectarnos',
    addressTitle: 'Nuestra dirección',
    address: 'Bogotá D.C., Colombia',
    emailTitle: 'Email',
    contactPerson: 'David Castañeda - UI/UX Developer | LXD | Master in Innovation',
    phone: '+57 310 333 9208',
    linkedin: 'www.linkedin.com/in/mauricio-robayo',
    scheduleTitle: 'Horario',
    weekdays: 'Lunes-Viernes: 9 AM - 6 PM',
    saturday: 'Sábado: 9 AM - 12 PM',
    formTitle: 'Ponte en Contacto',
    form: {
      namePlaceholder: 'Nombre',
      emailPlaceholder: 'Correo electrónico',
      subjectPlaceholder: 'Asunto',
      messagePlaceholder: 'Escribe tu mensaje...',
      loading: 'Cargando',
      successMessage: 'Tu mensaje ha sido enviado. ¡Gracias!',
      submitButton: 'ENVIAR MENSAJE'
    }
  },

  // FAQ Section
  faq: {
    title: '¿Preguntas frecuentes?',
    description: 'Encuentra respuestas sobre nuestros servicios de personajes 3D, desarrollo de cursos y plataforma educativa.',
    questions: {
      q1: {
        question: '¿Qué incluye el servicio de personajes 3D?',
        answer: 'Nuestros paquetes incluyen: diseño del personaje, animaciones básicas (gestos y movimientos), integración con tu contenido educativo, y formatos listos para usar en tu plataforma (MP4, FBX o OBJ). Los paquetes premium incluyen más animaciones y personalización avanzada.'
      },
      q2: {
        question: '¿Cuánto tiempo toma desarrollar un curso completo?',
        answer: 'Con nuestra plataforma express: 2-4 semanas para cursos estándar. Los tiempos varían según: cantidad de contenido, integraciones requeridas con LMS, y complejidad de las interacciones. Ofrecemos entregas parciales semanales para tu revisión.'
      },
      q3: {
        question: '¿Pueden integrar el contenido con nuestro LMS existente?',
        answer: 'Sí, trabajamos con Moodle, Blackboard, Canvas y otros sistemas. Nuestros contenidos son compatibles con estándares SCORM y xAPI. Solo necesitamos acceso de desarrollador a tu LMS para configurar la integración.'
      },
      q4: {
        question: '¿Qué pasa si necesito cambios después de la entrega?',
        answer: 'Cada paquete incluye revisiones (2 por minuto en el plan básico). Revisiones adicionales tienen un costo de $200.000 COP c/u. Para proyectos grandes recomendamos el plan premium que incluye 100 revisiones.'
      },
      q5: {
        question: '¿Cómo funciona el pago y qué garantías ofrecen?',
        answer: 'Requerimos el 50% para iniciar y 50% al finalizar. Trabajamos con contratos que especifican plazos, entregables y derechos de autor (que serán 100% tuyos al finalizar el pago). Facturamos por Lúmina Interactiva SAS (NIT 900713256-1).'
      },
      q6: {
        question: '¿Qué experiencia académica respalda los servicios?',
        answer: 'Contamos con un Magister en Innovación de la Universidad EAN, especialización en Gestión Estratégica de Diseño, y certificaciones en UX Research, SCRUM Master I (PSM I), y Articulate. Además, tenemos publicaciones académicas sobre Design Thinking aplicado al mejoramiento de la calidad del sueño en tiempos post-pandémicos.'
      },
      q7: {
        question: '¿En qué sectores tienen experiencia comprobada?',
        answer: 'Hemos trabajado en proyectos para el sector bancario (con experiencia en Capgemini para SLB), energía (Oil & Gas), educación superior (Universidad EAN, Universidad La Gran Colombia), y e-learning. Más de 5 años creando soluciones UI/UX centradas en el usuario.'
      }
    }
  },

  // Personajes 3D Page
  personajes3d: {
    title: 'Avatars 3D',
    subtitle: 'Experiencias inmersivas con personajes tridimensionales',
    mainHeading: 'Animación 3D que Cautiva a tu Audiencia',
    leadText: 'Impresiona a tus usuarios con personajes 3D animados que elevan la calidad de tus contenidos educativos y corporativos sin gastar una fortuna.',
    videoTitle: 'Video ejemplo de 3D personajes',
    
    description: {
      text: 'Descubre estrategias innovadoras para la educación digital. Transformamos contenidos en experiencias interactivas que cautivan a los estudiantes. Nuestro equipo especializado combina tecnología pedagógica y diseño impactante para crear cursos que destacan en el competitivo mundo del aprendizaje en línea.'
    },
    
    meta: {
      affordable: 'Solución Asequible',
      delivery: 'Entrega en 3-4 Semanas',
      retention: 'Alta Retención de Audiencia'
    },
    
    tabs: {
      whyThreeD: '¿Por Qué 3D?',
      stepByStep: 'Paso a Paso',
      benefits: 'Beneficios'
    },
    
    whyThreeD: {
      title: 'Impacto del Contenido Animado',
      stat1: '📈 Los videos con personajes animados 3D tienen un 30% más de retención que los formatos tradicionales (2D o live-action).',
      stat2: '💬 El 70% de los marketers considera el 3D la herramienta más efectiva para engagement, según HubSpot.',
      stat3: '🛒 Las campañas con animación 3D aumentan las tasas de conversión un 40% en e-commerce.',
      stat4: '🧠 El 90% de los consumidores recuerda mejor una marca con contenido audiovisual animado frente a solo texto.',
      imageAlt: 'Ventajas del contenido animado'
    },
    
    stepByStep: {
      step1: {
        number: '01',
        title: 'Elección del Personaje',
        description: 'Selecciona entre una galería de personajes 3D prediseñados o solicita uno personalizado según tu marca.'
      },
      step2: {
        number: '02',
        title: 'Desarrollo de Guión',
        description: 'Te ayudamos a redactar un guión claro y didáctico para maximizar la conexión con la audiencia.'
      },
      step3: {
        number: '03',
        title: 'Grabación de Voz',
        description: 'Locución profesional grabada en estudio o de forma remota con tu voz preferida.'
      },
      step4: {
        number: '04',
        title: 'Animación y Render',
        description: 'Animamos tu personaje con movimiento facial, corporal y expresión emocional. Luego lo renderizamos con calidad HD.'
      },
      step5: {
        number: '05',
        title: 'Motion Graphics + Entrega',
        description: 'Agregamos transiciones, música y subtítulos. Entregamos en múltiples formatos para plataformas, LMS o redes.'
      }
    },
    
    benefits: {
      retention: {
        title: 'Mayor Retención',
        description: 'Tu audiencia recuerda más y se compromete mejor con personajes animados realistas.'
      },
      affordable: {
        title: 'Accesible para Todos',
        description: 'Producción profesional sin presupuestos excesivos. Ideal para empresas educativas y comerciales.'
      },
      agile: {
        title: 'Producción Ágil',
        description: 'Todo el proceso en solo 3 a 4 semanas. Con avances iterativos y entregas rápidas.'
      },
      measurable: {
        title: 'Resultados Medibles',
        description: 'Mejora en conversiones, leads y recordación de marca garantizados con estadísticas reales.'
      }
    },
    
    gallery: {
      title: 'Ejemplos de Animación 3D',
      demo1: {
        title: 'Asistente Avatar Virtual Educativo',
        description: 'Transforma PDFs en contenido animado'
      }
    },
    
    cta: {
      title: '¿Listo para Impresionar con 3D?',
      description: 'Solicita una animación personalizada para tu curso, empresa o presentación. Producción rápida, profesional y accesible.',
      button: 'Solicita Cotización',
      guarantee: '100 % Entrega Garantizada'
    },
    
    features: {
      title: '¿Qué Incluye?',
      characters: {
        title: 'Personajes 3D',
        description: 'Prediseñados o personalizados con branding institucional'
      },
      voiceover: {
        title: 'Guión + Locución',
        description: 'Apoyo en redacción y voz profesional'
      },
      render: {
        title: 'Render + Motion',
        description: 'Animación + edición con subtítulos y música'
      },
      delivery: {
        title: 'Entrega Multiformato',
        description: 'Video final listo para LMS, YouTube o eventos'
      },
      production: {
        title: 'Producción Rápida',
        description: 'Entrega en 3 a 4 semanas'
      }
    },
    
    contactInfo: {
      title: '¿Tienes Preguntas?',
      phone: {
        label: 'Llámanos',
        number: '+57 310 333 9208'
      },
      email: {
        label: 'Escríbenos',
        address: 'luminawebs@gmail.com'
      }
    },
    
    pricing: {
      title: 'Paquetes',
      subtitle: 'Nuestros',
      subtitleHighlight: 'Planes',
      basic: {
        title: 'Básico',
        description: 'Para proyectos pequeños',
        price: '3.2M',
        period: '/min',
        total: 'Total: $3.200.000',
        features: [
          '1 minuto incluido',
          '1 personaje 3D',
          'Edición básica en Blender',
          'Audio + musicalización',
          'Formato MP4',
          '2 revisiones'
        ],
        button: 'Contratar'
      },
      standard: {
        title: 'Estándar',
        description: 'Para cursos medianos',
        price: '1.3M',
        period: '/min',
        total: 'Total: $26.000.000',
        popular: 'Más Popular',
        features: [
          '20 minutos incluidos',
          '2 personajes 3D',
          'Edición básica en Blender',
          'Audio + musicalización',
          'Formato MP4',
          '20 revisiones'
        ],
        button: 'Contratar'
      },
      advanced: {
        title: 'Avanzado',
        description: 'Para proyectos complejos',
        price: '1.15M',
        period: '/min',
        total: 'Total: $57.500.000',
        features: [
          '50 minutos incluidos',
          '3 personajes 3D',
          'Edición media en Blender',
          'Audio + musicalización',
          'Formato MP4',
          '50 revisiones'
        ],
        button: 'Contratar'
      },
      premium: {
        title: 'Premium',
        description: 'Para instituciones educativas',
        price: '1M',
        period: '/min',
        total: 'Total: $100.000.000',
        features: [
          '100 minutos incluidos',
          '3 personajes 3D',
          'Edición avanzada en Blender',
          'Audio + musicalización',
          'Formatos múltiples (MP4, FBX, OBJ)',
          '100 revisiones'
        ],
        button: 'Contratar'
      }
    },
    
    terms: {
      title: 'Términos y Condiciones',
      items: [
        'Plazos: 10 días por minuto en versión Básica',
        'Revisiones: 2 revisiones por minuto incluidas (adicionales $200.000 c/u)',
        'Pago: Cuenta corriente 21004202069 - Lúmina Interactiva SAS',
        'Derechos: El cliente tiene derechos completos sobre los videos finales',
        'Precios sujetos a cambios según complejidad del proyecto'
      ],
      ctaButton: '¿Preguntas? Contáctanos'
    }
  },

  // Common
  common: {
    loading: 'Cargando...',
    error: 'Error',
    success: 'Éxito',
    submit: 'Enviar',
    cancel: 'Cancelar',
    close: 'Cerrar',
    save: 'Guardar',
    edit: 'Editar',
    delete: 'Eliminar',
    confirm: 'Confirmar',
    back: 'Volver',
    next: 'Siguiente',
    previous: 'Anterior',
    more: 'Ver más',
    less: 'Ver menos'
  }
};

