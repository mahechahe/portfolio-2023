import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  logoCocap,
  sfcoLogo,
  toolesLogo,
  nextJsLogo,
  sequelizeLogo,
  expressLogo,
  nodejsJavas,
  sql,
  dashboard,
  netflix,
  giffy,
  booking,
  youtube,
  cryptoverse
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'Full Stack Developer',
    icon: mobile
  },
  {
    title: 'Frontend Developer',
    icon: backend
  }
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },

  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Next JS',
    icon: nextJsLogo
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'Sequelize',
    icon: sequelizeLogo
  },
  {
    name: 'Express',
    icon: expressLogo
  },
  {
    name: 'SQL',
    icon: sql
  }
]

const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'COcapitalizaciones',
    icon: logoCocap,
    iconBg: '#ff6e0d',
    date: 'Jun 2022 - Oct 2022',
    points: [
      'My role in the project was as a Fullstack developer with technologies like React, Redux and Typescript on the front-end and nodeJs, mongoDb and ExpressJs on the backend.',
      'Identify and resolve performance issues in React and Node environments.',
      ' Integrate code changes, test code changes, and document code changes',
      'Practice agile development methodologies and work with today network technologies.'
    ]
  },
  {
    title: 'Frontend Developer',
    company_name: 'Software & Consulting Group',
    icon: sfcoLogo,
    iconBg: '#fff',
    date: 'Nov 2022 - Mar 2023',
    points: [
      'My role in the project is focused on creating solutions at the level of daily use, creating interfaces, creating business logic and solving specific problems required by the client.',
      'Create and design with the development team authentication systems and environmental procedures. ',
      'My greatest achievement was creating a product which different entities can use through an API to make settlements in their procedures',
      'I work with agile development methodology and with the following technologies: ReactJS, Redux, Javascript, MUI, Html, Css, Tailwind'
    ]
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Tooles',
    icon: toolesLogo,
    iconBg: '#fff',
    date: 'Mar 2023 - Actually',
    points: [
      'I work with technologies on the frontend such as React, Javascript, Material UI and Tailwind',
      'I work with technologies in the backend with technologies from NodeJS, Express, Sequialize, SQL Databases and AWS environments. ',
      'Web platform that offers to carry out environmental procedures online, automation of settlement processes in AWS environments.'
    ]
  }
]

const testimonials = [
  {
    testimonial:
        'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
]

const projects = [
  {
    name: 'Dashboard app',
    description:
        'Application with multiple actions and components so you can interact.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: dashboard,
    source_code_link: 'https://movies-tb.vercel.app/'
  },
  {
    name: 'Netflix clone',
    description:
        'Netflix clone with firebase authentication.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'restapi',
        color: 'green-text-gradient'
      },
      {
        name: 'scss',
        color: 'pink-text-gradient'
      }
    ],
    image: netflix,
    source_code_link: 'https://netflix-copy-two.vercel.app/'
  },
  {
    name: 'Giffy',
    description:
        'Search your favorite gifs and discover the latest trends. a fully optimized website and deployed in Vercel.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'javascript',
        color: 'green-text-gradient'
      },
      {
        name: 'html',
        color: 'pink-text-gradient'
      },
      {
        name: 'css',
        color: 'blue-text-gradient'
      }
    ],
    image: giffy,
    source_code_link: 'https://github.com/mahechahe/giffy-react'
  },
  {
    name: 'Booking App',
    description:
        'Booking App web application, you can see hotels, apartments and rooms available in any city. Fullstack web application using the MERN Stack. If you register you can add hotels and rooms. The Admin Booking App is: Admin App.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'javascript',
        color: 'green-text-gradient'
      },
      {
        name: 'html',
        color: 'pink-text-gradient'
      },
      {
        name: 'nodejs',
        color: 'blue-text-gradient'
      },
      {
        name: 'expressjs',
        color: 'green-text-gradient'
      }
    ],
    image: booking,
    source_code_link: 'https://github.com/mahechahe/booking-app'
  },
  {
    name: 'Youtube clone',
    description:
        'Youtube clone using React and its consuming its API in FAST API. React and Using React-hooks.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'javascript',
        color: 'green-text-gradient'
      },
      {
        name: 'html',
        color: 'pink-text-gradient'
      },
      {
        name: 'nodejs',
        color: 'blue-text-gradient'
      }
    ],
    image: youtube,
    source_code_link: 'https://rad-bavarois-95e2c2.netlify.app/'
  },

  {
    name: 'Cryptoverse',
    description:
        'The latest cryptocurrency news. FAST API Cryptocurrencies, Using React and MUI.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'javascript',
        color: 'green-text-gradient'
      },
      {
        name: 'html',
        color: 'pink-text-gradient'
      },
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      }
    ],
    image: cryptoverse,
    source_code_link: 'https://crypto-api-gray.vercel.app/'
  }
]

export { services, technologies, experiences, testimonials, projects }
