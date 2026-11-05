import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  docker,
  nextJsLogo,
  expressLogo,
  nestjs,
  postgresql,
  aws,
  logoCocap,
  sfcoLogo,
  toolesLogo,
  jaimeTorresLogo,
  branaLogo,
  dankeLogo,
  nuvanaLogo,
  credisosLogo,
  dashboard,
  netflix,
  cryptoverse,
  nuvanaProject,
  sanjoanenseProject,
  cortolimaProject,
  defensaProject,
  credisosProject,
  luupProject,
  luisGranada,
  cristianFlorez,
  juanMoreno,
  juanJoseRosero
} from '../assets'

// Text fields are either plain strings or { en, es } objects, resolved with `tr()` from useLanguage().

export const navLinks = [
  { id: 'about', titleKey: 'navAbout' },
  { id: 'work', titleKey: 'navExperience' },
  { id: 'projects', titleKey: 'navProjects' },
  { id: 'contact', titleKey: 'navContact' }
]

const services = [
  { title: { en: 'Full Stack Developer', es: 'Desarrollador Full Stack' }, icon: web },
  { title: { en: 'Frontend Developer', es: 'Desarrollador Frontend' }, icon: creator },
  { title: { en: 'Mobile Developer', es: 'Desarrollador Móvil' }, icon: mobile },
  { title: { en: 'Backend & Cloud (AWS)', es: 'Backend y Cloud (AWS)' }, icon: backend }
]

// Keep this list at 13 or fewer: each item is its own WebGL canvas and
// browsers drop the oldest contexts (the hero computer) past ~16.
const technologies = [
  { name: 'JavaScript', icon: javascript },
  { name: 'TypeScript', icon: typescript },
  { name: 'React JS', icon: reactjs },
  { name: 'Redux Toolkit', icon: redux },
  { name: 'Next JS', icon: nextJsLogo },
  { name: 'Node JS', icon: nodejs },
  { name: 'Express', icon: expressLogo },
  { name: 'NestJS', icon: nestjs },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'PostgreSQL', icon: postgresql },
  { name: 'MongoDB', icon: mongodb },
  { name: 'AWS', icon: aws },
  { name: 'Docker', icon: docker }
]

const experiences = [
  {
    title: { en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
    company_name: 'Jaime Torres',
    icon: jaimeTorresLogo,
    iconBg: '#fff',
    date: { en: 'Aug 2026 - Present', es: 'Ago 2026 - Actualidad' },
    points: {
      en: [
        'Full stack development on a B2B platform that migrates and processes tax forms for banks, with Angular on the frontend and Spring Boot microservices on the backend.',
        'Onboarded a new bank client: configurable service-to-service authentication, external routes, SQL install scripts and the deployment package for Tomcat.',
        'Rebuilt the document converter as a background job queue with per-file tracking, automatic recovery of stuck processes and multi-node support.',
        'Added an OCR fallback (Tesseract) for unreadable barcodes, cutting the pages sent to manual indexing from 240 to 61 in a 768-page test.',
        'Redesigned the indexing and converter screens: side panel, image zoom, progress tracking and per-type summaries.'
      ],
      es: [
        'Desarrollo full stack en una plataforma B2B que migra y procesa formularios tributarios para bancos, con Angular en el frontend y microservicios en Spring Boot en el backend.',
        'Habilitación de un nuevo banco: autenticación configurable entre microservicios, rutas externas, scripts SQL de instalación y paquete de despliegue en Tomcat.',
        'Reconstrucción del conversor de documentos como cola de procesos en segundo plano, con seguimiento por archivo, liberación automática de procesos colgados y soporte multinodo.',
        'OCR (Tesseract) como respaldo cuando el código de barras no se puede leer: en una prueba de 768 páginas, las enviadas a indexación manual bajaron de 240 a 61.',
        'Rediseño de las pantallas del indexador y del conversor: panel lateral, zoom de imágenes, avance del proceso y resumen por tipo.'
      ]
    }
  },
  {
    title: { en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
    company_name: 'Brana',
    icon: branaLogo,
    iconBg: '#fff',
    date: { en: 'Feb 2026 - Present', es: 'Feb 2026 - Actualidad' },
    points: {
      en: [
        'Built and automated the calculation engine for the payroll module of an ERP focused on the Mexican market.',
        'Implemented payroll stamping (CFDI timbrado), meeting Mexican digital tax standards.',
        'Optimized financial algorithms to guarantee accuracy in statutory deductions and earnings.'
      ],
      es: [
        'Desarrollo y automatización del motor de cálculos del módulo de nómina de un ERP enfocado en el mercado mexicano.',
        'Implementación del proceso de timbrado de nómina, cumpliendo los estándares fiscales digitales.',
        'Optimización de algoritmos financieros para garantizar precisión en deducciones y percepciones legales.'
      ]
    }
  },
  {
    title: { en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
    company_name: 'Tooles Herramientas Legales',
    icon: toolesLogo,
    iconBg: '#fff',
    date: { en: 'Mar 2023 - Present', es: 'Mar 2023 - Actualidad' },
    points: {
      en: [
        'Built and maintained web platforms for environmental procedures with React, Node.js, Express and Sequelize.',
        'Led the digitization of more than 21,000 environmental records, using OCR and automated flows to migrate physical documents.',
        'Managed and optimized SQL databases integrated with AWS (EC2, S3, Lambda, SQS).',
        'Built customizable flow diagrams in React to improve the visual management of processes.',
        'Integrated external APIs and webhooks, with secure file handling in AWS S3 and access control.',
        'Currently building the Cortolima procedures platform, the Control Jurídico legal case manager and an internal ticketing tool.'
      ],
      es: [
        'Desarrollo y mantenimiento de plataformas web para trámites ambientales con React, Node.js, Express y Sequelize.',
        'Lideré la digitalización de más de 21.000 registros ambientales, con OCR y flujos automatizados para migrar documentos físicos.',
        'Administración y optimización de bases de datos SQL integradas con AWS (EC2, S3, Lambda, SQS).',
        'Diagramas de flujo personalizables en React para mejorar la gestión visual de procesos.',
        'Integración de APIs externas y webhooks, con gestión segura de archivos en AWS S3 y control de acceso.',
        'Actualmente desarrollo la plataforma de trámites de Cortolima, el gestor de procesos judiciales Control Jurídico y una herramienta interna de tickets.'
      ]
    }
  },
  {
    title: { en: 'Mobile & Full Stack Developer', es: 'Desarrollador Móvil y Full Stack' },
    company_name: 'Danke Consulting',
    icon: dankeLogo,
    iconBg: '#fff',
    date: { en: 'Jun 2024 - Jan 2026', es: 'Jun 2024 - Ene 2026' },
    points: {
      en: [
        'Built cross-platform mobile apps with React Native and Expo.',
        'Carne Mart: developed and maintained the app for inventory management and sales.',
        'BarberApp: built a mobile platform to manage appointments and services, improving the user experience.',
        'Built REST APIs with NestJS and TypeScript to power the mobile apps.'
      ],
      es: [
        'Desarrollo de aplicaciones móviles multiplataforma con React Native y Expo.',
        'Carne Mart: desarrollo y mantenimiento de la app de gestión de inventarios y ventas.',
        'BarberApp: plataforma móvil para la gestión de citas y servicios, mejorando la experiencia del usuario.',
        'Desarrollo de APIs REST con NestJS y TypeScript para las aplicaciones móviles.'
      ]
    }
  },
  {
    title: { en: 'Full Stack & Cloud Infrastructure Developer', es: 'Desarrollador Full Stack y de Infraestructura Cloud' },
    company_name: 'Nuvana',
    icon: nuvanaLogo,
    iconBg: '#fff',
    date: { en: 'Oct 2024 - May 2025', es: 'Oct 2024 - May 2025' },
    points: {
      en: [
        'Designed asynchronous flows with AWS Lambda and SQS to process events and payment webhooks (Wompi).',
        'Orchestrated containers with Docker and AWS ECS (Fargate) for high availability.',
        'Implemented high-performance search with Algolia.',
        'Worked across the web app, the REST API (Express, TypeScript, MySQL) and the Expo mobile app.'
      ],
      es: [
        'Diseño de flujos asíncronos con AWS Lambda y SQS para procesar eventos y webhooks de pago (Wompi).',
        'Orquestación de contenedores con Docker y AWS ECS (Fargate) para asegurar alta disponibilidad.',
        'Implementación de búsquedas de alto rendimiento con Algolia.',
        'Trabajo en la app web, la API REST (Express, TypeScript, MySQL) y la app móvil en Expo.'
      ]
    }
  },
  {
    title: { en: 'Frontend Developer (Freelance)', es: 'Desarrollador Frontend (Freelance)' },
    company_name: 'Credisos',
    icon: credisosLogo,
    iconBg: '#fff',
    date: { en: 'Nov 2023 - Sep 2024', es: 'Nov 2023 - Sep 2024' },
    points: {
      en: [
        'Built a loan management application with React, Redux and TypeScript on a scalable architecture.',
        'Set up CI/CD pipelines with AWS CodePipeline.',
        'Configured the AWS infrastructure (S3 and CloudFront) for hosting and content delivery, with authentication for users and administrators.'
      ],
      es: [
        'Desarrollé una aplicación de gestión de préstamos con React, Redux y TypeScript sobre una arquitectura escalable.',
        'Implementé pipelines de CI/CD con AWS CodePipeline.',
        'Configuré la infraestructura en AWS (S3 y CloudFront) para alojamiento y distribución, con autenticación para usuarios y administradores.'
      ]
    }
  },
  {
    title: { en: 'Frontend Developer', es: 'Desarrollador Frontend' },
    company_name: 'Software & Consulting Group',
    icon: sfcoLogo,
    iconBg: '#fff',
    date: { en: 'Nov 2022 - Mar 2023', es: 'Nov 2022 - Mar 2023' },
    points: {
      en: [
        'Built everyday solutions: user interfaces, business logic and specific problems requested by clients.',
        'Designed authentication systems and environmental procedures together with the development team.',
        'Built a product that lets different entities process settlements in their procedures through an API.',
        'Worked with React, Redux, JavaScript, MUI and Tailwind under agile methodologies.'
      ],
      es: [
        'Soluciones de uso diario: diseño de interfaces, lógica de negocio y resolución de problemas específicos del cliente.',
        'Diseño de sistemas de autenticación y trámites ambientales junto al equipo de desarrollo.',
        'Desarrollé un producto que permite a diferentes entidades procesar liquidaciones en sus trámites a través de una API.',
        'Trabajo con React, Redux, JavaScript, MUI y Tailwind bajo metodologías ágiles.'
      ]
    }
  },
  {
    title: { en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
    company_name: 'COcapitalizaciones',
    icon: logoCocap,
    iconBg: '#ff6e0d',
    date: { en: 'Jun 2022 - Oct 2022', es: 'Jun 2022 - Oct 2022' },
    points: {
      en: [
        'Built APIs and services integrated with frontend apps, including CRUD operations and authentication.',
        'Backend with Node.js, Express and MongoDB; frontend with React, Redux and TypeScript.',
        'Identified and fixed performance issues in React and Node environments.'
      ],
      es: [
        'Desarrollé APIs y servicios integrados con aplicaciones frontend, con operaciones CRUD y autenticación.',
        'Backend con Node.js, Express y MongoDB; frontend con React, Redux y TypeScript.',
        'Identifiqué y resolví problemas de rendimiento en entornos React y Node.'
      ]
    }
  }
]

const testimonials = [
  {
    testimonial: {
      es: 'Tuve la oportunidad de mentorear a Estiven en sus primeros pasos como desarrollador, ayudándolo a definir su ruta de aprendizaje y a construir bases sólidas como Full Stack Developer. Lo que más destaco es su disciplina y capacidad de aprendizaje: comenzó desde cero y, con constancia y enfoque, desarrolló fundamentos muy fuertes en programación, arquitectura y diseño de aplicaciones.',
      en: 'I had the opportunity to mentor Estiven in his first steps as a developer, helping him define his learning path and build solid foundations as a Full Stack Developer. What stands out most is his discipline and ability to learn: he started from scratch and, with consistency and focus, built very strong foundations in programming, architecture and application design.'
    },
    name: 'Luis Granada',
    designation: 'Software Engineer | AI & Backend',
    relation: { en: 'Mentor', es: 'Mentor' },
    image: luisGranada
  },
  {
    testimonial: {
      es: 'Recomiendo encarecidamente a Estiven Mahecha Henao como un desarrollador altamente competente y colaborativo, con excelentes habilidades y conocimientos en ReactJS. He tenido el placer de trabajar con Estiven y puedo decir con confianza que es una persona con habilidades sobresalientes en el desarrollo de software y una gran capacidad para trabajar en equipo.',
      en: 'I highly recommend Estiven Mahecha Henao as a highly competent and collaborative developer with excellent ReactJS skills and knowledge. I have had the pleasure of working with Estiven and can confidently say he has outstanding software development skills and a great ability to work in a team.'
    },
    name: 'Cristian David Florez Merlano',
    designation: 'Web & Mobile Developer',
    relation: { en: 'Teammate', es: 'Compañero de equipo' },
    image: cristianFlorez
  },
  {
    testimonial: {
      es: 'Durante el tiempo que trabajé con Estiven demostró que le gusta ser desarrollador: aceptaba los retos sin ningún problema y acudía a mí nuevamente cuando tenía dudas. Demostró que aprende rápido y se adaptó fácilmente al proyecto; era responsable y se comprometía con las tareas asignadas.',
      en: 'During the time I worked with Estiven he showed that he loves being a developer: he took on challenges without any problem and came back to me whenever he had questions. He proved to be a fast learner and adapted easily to the project; he was responsible and committed to his assigned tasks.'
    },
    name: 'Juan Moreno',
    designation: 'Senior Full Stack Developer',
    relation: { en: 'Supervisor', es: 'Supervisor' },
    image: juanMoreno
  },
  {
    testimonial: {
      es: 'Estiven es un excelente desarrollador, pero también un gran profesional. Durante el tiempo que compartí experiencia laboral con él, demostró un gran sentido de responsabilidad, proactividad y continuo aprendizaje.',
      en: 'Estiven is an excellent developer but also a great professional. During the time we worked together, he showed a strong sense of responsibility, proactivity and continuous learning.'
    },
    name: 'Juan José Rosero Calderón',
    designation: 'Sr Backend Developer | AWS Developer Associate',
    relation: { en: 'Supervisor', es: 'Supervisor' },
    image: juanJoseRosero
  }
]

const tag = (name, color) => ({ name, color })
const blue = 'blue-text-gradient'
const green = 'green-text-gradient'
const pink = 'pink-text-gradient'

const projects = [
  {
    name: 'Nuvana',
    description: {
      en: 'Platform to find and book health and professional services (doctors, psychologists, lawyers, consultants). Web app, REST API and iOS/Android app, with Algolia search and Wompi payments.',
      es: 'Plataforma para encontrar y agendar profesionales (médicos, psicólogos, abogados, consultores). App web, API REST y app iOS/Android, con búsqueda en Algolia y pagos con Wompi.'
    },
    tags: [tag('react', blue), tag('react-native', green), tag('aws', pink), tag('algolia', blue)],
    image: nuvanaProject,
    link: 'https://appnuvana.com/'
  },
  {
    name: 'AD Sanjoanense',
    description: {
      en: 'Official website of AD Sanjoanense Futebol SAD (Portugal): club history, news, squad and legal documents, managed from a headless CMS.',
      es: 'Sitio oficial del AD Sanjoanense Futebol SAD (Portugal): historia del club, noticias, plantel y documentación legal, administrado desde un CMS headless.'
    },
    tags: [tag('astro', blue), tag('strapi', green), tag('tailwind', pink), tag('stripe', blue)],
    image: sanjoanenseProject
  },
  {
    name: 'Cortolima',
    description: {
      en: 'Online environmental procedures for the Tolima environmental authority: permits for water, air, forests and waste, with case files and automated workflows on AWS.',
      es: 'Trámites ambientales en línea para la corporación autónoma del Tolima: permisos de agua, aire, bosques y residuos, con expedientes y flujos automatizados en AWS.'
    },
    tags: [tag('react', blue), tag('nodejs', green), tag('sequelize', pink), tag('aws', blue)],
    image: cortolimaProject,
    link: 'https://tramites.cortolima.gov.co/',
    company: 'Tooles'
  },
  {
    name: 'Control Jurídico',
    description: {
      en: 'Legal case management platform: case tracking, document uploads, deadlines and hearings, real-time alerts and reports.',
      es: 'Plataforma de gestión de procesos judiciales: seguimiento de procesos, carga de piezas procesales, términos y audiencias, alertas en tiempo real y reportes.'
    },
    tags: [tag('react', blue), tag('express', green), tag('socket.io', pink), tag('aws', blue)],
    image: defensaProject,
    link: 'https://defensa-judicial.tooles.co/',
    company: 'Tooles'
  },
  {
    name: 'Credisos',
    description: {
      en: 'Loan management system with customer and admin portals, automated WhatsApp notifications and payment receipt processing.',
      es: 'Sistema de gestión de créditos con portal de clientes y administradores, notificaciones automáticas por WhatsApp y procesamiento de comprobantes de pago.'
    },
    tags: [tag('react', blue), tag('typescript', green), tag('redux', pink), tag('aws', blue)],
    image: credisosProject,
    link: 'https://www.credisos.com/'
  },
  {
    name: 'Luup',
    description: {
      en: 'Logistics and event management platform: coordinates collaborators, zones, attendance, waste tracking, inventory and GPS location during events. Installable PWA.',
      es: 'Plataforma de logística y control de eventos: coordina colaboradores, zonas, asistencia, residuos, inventario y ubicación GPS durante los eventos. PWA instalable.'
    },
    tags: [tag('react', blue), tag('express', green), tag('postgresql', pink), tag('pwa', blue)],
    image: luupProject
  }
]

const personalProjects = [
  {
    name: 'Movies Dashboard',
    description: {
      en: 'Application with multiple actions and components to browse and interact with movies.',
      es: 'Aplicación con múltiples acciones y componentes para explorar e interactuar con películas.'
    },
    tags: [tag('react', blue), tag('mongodb', green), tag('tailwind', pink)],
    image: dashboard,
    link: 'https://movies-tb.vercel.app/'
  },
  {
    name: 'Netflix clone',
    description: {
      en: 'Netflix clone with Firebase authentication.',
      es: 'Clon de Netflix con autenticación en Firebase.'
    },
    tags: [tag('react', blue), tag('restapi', green), tag('scss', pink)],
    image: netflix,
    link: 'https://netflix-copy-two.vercel.app/'
  },
  {
    name: 'Cryptoverse',
    description: {
      en: 'Latest cryptocurrency news and prices, built with React and MUI.',
      es: 'Noticias y precios de criptomonedas, construido con React y MUI.'
    },
    tags: [tag('react', blue), tag('javascript', green), tag('mui', pink)],
    image: cryptoverse,
    link: 'https://crypto-api-gray.vercel.app/'
  }
]

export { services, technologies, experiences, testimonials, projects, personalProjects }
