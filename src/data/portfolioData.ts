// Portfolio items data to be used across the application
export const portfolioItems = {
  companies: [
    {
      title: '128 Bit Studios',
      jobTitle: 'Director',
      description: 'I architected and developed full-stack web applications using React, NodeJS, and MongoDB, delivering 15+ client projects from concept to production. I managed client relationships, technical requirements gathering, and led a team of 3 developers. I implemented CI/CD pipelines and AWS infrastructure, reducing deployment time by 60% and improving system reliability.',
      images: {
        light: {
          path: '/portfolio/otebs-light.png',
          position: { x: 50, y: 50, scale: 0.9 }
        },
        dark: {
          path: '/portfolio/otebs-dark.png',
          position: { x: 50, y: 50, scale: 0.9 }
        }
      },
      tags: ['JavaScript', 'NodeJS', 'React', 'MongoDB', 'AWS'],
      link: 'https://128bitstudios.co.uk',
      date: 'Aug 2017 - Present',
    },
    {
      title: 'Smart Bird Home Automations',
      jobTitle: 'Director',
      description: 'I designed and built IoT automation systems using Raspberry Pi, custom sensors, and secure APIs. I developed the mobile app interface and backend services, implementing end-to-end encryption for all device communications. I personally delivered 8 home automation projects and 3 commercial installations.',
      images: {
        light: {
          path: '/portfolio/sbha-light.png',
          position: { x: 50, y: 50, scale: 0.7 }
        },
        dark: {
          path: '/portfolio/sbha-dark.png',
          position: { x: 50, y: 50, scale: 0.7 }
        }
      },
      tags: ['Home Automation', 'Hardware', 'Networking', 'Security'],
      link: 'https://smartbird.io',
      date: 'Jul 2024 - Oct 2024',
    },
    {
      title: 'Bradios Drones',
      jobTitle: 'Director',
      description: 'Led aerial photography and videography operations, managing drone fleet and safety protocols. Conducted land surveys and health inspections, developing operational procedures for high-risk environments.',
      images: {
        light: {
          path: '/portfolio/bradiosdrones-light.png',
          position: { x: 50, y: 50, scale: 1.5 }
        },
        dark: {
          path: '/portfolio/bradiosdrones-dark.png',
          position: { x: 50, y: 50, scale: 1.5 }
        }
      },
      tags: ['Videography', 'Photography', 'Drones'],
      link: 'https://www.instagram.com/bradiosdrones',
      date: '2020 - 2021',
    },
    {
      title: 'Zesty Designs',
      jobTitle: 'Director',
      description: 'Developed custom websites and web applications for diverse client base, managing full project lifecycle from design to deployment. Built foundational skills in front-end and back-end development while balancing academic commitments.',
      images: {
        light: {
          path: '/portfolio/zesty-light.png',
          position: { x: 50, y: 50, scale: 0.7 }
        },
        dark: {
          path: '/portfolio/zesty-dark.png',
          position: { x: 50, y: 50, scale: 0.7 }
        }
      },
      tags: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
      link: null,
      date: 'Aug 2006 - Aug 2017',
    }
  ],
  jointStartups: [
    {
      title: 'Quote Away AI',
      jobTitle: 'Co-Founder & Lead Developer',
      description: 'Co-founded and led development of an AI-powered quoting platform for the travel industry. I built the application using Next.js, combining a React-based frontend with the framework\'s backend capabilities. I also developed a separate AI service worker in NodeJS that integrates with OpenAI APIs for intelligent quote generation. I implemented real-time features, user authentication, and delivered the MVP in just 1 month. The platform has since grown to 350+ users generating over 8,000 quotes.',
      images: {
        light: {
          path: '/portfolio/quoteawayai-dark.png',
          position: { x: 50, y: 50, scale: 0.7 }
        },
        dark: {
          path: '/portfolio/quoteawayai-dark.png',
          position: { x: 50, y: 50, scale: 0.7 }
        }
      },
      tags: ['React', 'NodeJS', 'AI', 'MongoDB', 'Next.js', 'AWS', 'TypeScript'],
      link: 'https://quoteawayai.com',
      date: 'Jan 2025 - Present',
    }
  ],
  soloStartups: [


  ],
  clientWork: [
    {
      title: 'Untapped',
      jobTitle: 'Technical Lead (Contractor)',
      description: 'Transformed a legacy monolithic MVC C# system into a modern microservices architecture, reducing response times by 40% and significantly improving performance and maintainability. I personally rewrote the frontend in React, implemented JWT authentication and third-party integrations, and collaborated with another developer who focused on updating the existing C# backend to work with RESTful responses.',
      images: {
        light: {
          path: '/portfolio/untapped-light.png',
          position: { x: 50, y: 50, scale: 0.6 }
        },
        dark: {
          path: '/portfolio/untapped-dark.png',
          position: { x: 50, y: 50, scale: 0.6 }
        }
      },
      tags: ['C#', 'React', 'HapiJS'],
      link: 'https://thisisuntapped.com',
      date: 'Jun 2021 - Sep 2021',
    },
    {
      title: 'Hargreaves Lansdown',
      jobTitle: 'Senior Developer (Contractor)',
      description: 'Pioneered the first microservices architecture in NodeJS for the organisation, delivering a scalable and maintainable solution. I built a database abstraction layer and API gateway, and significantly improved system performance by introducing caching to the microservices, which acted as middleware for the legacy system. I also helped train 8 COBOL developers on modern NodeJS microservice patterns to support the transition.',
      images: {
        light: {
          path: '/portfolio/hargreaveslansdown-light.png',
          position: { x: 50, y: 50, scale: 1 }
        },
        dark: {
          path: '/portfolio/hargreaveslansdown-dark.png',
          position: { x: 50, y: 50, scale: 1 }
        }
      },
      tags: ['NodeJS', 'Microservices', 'AWS', 'OracleDB', 'MySQL', 'TypeScript', 'Mentoring'],
      link: 'https://www.hl.co.uk',
      date: 'Jul 2022 - Jun 2023',
    },
    {
      title: 'Itriom',
      jobTitle: 'Technical Lead (Contractor)',
      description: 'Delivered a minimum viable product within 3 months to support shareholder presentations. I personally developed the MVP React frontend and NodeJS backend, implemented authentication, real-time features, and AWS deployment, while leading an offshore team of 3 Polish developers to ensure timely delivery.',
      images: {
        light: {
          path: '/portfolio/itriom-light.svg',
          position: { x: 50, y: 50, scale: 2.4 }
        },
        dark: {
          path: '/portfolio/itriom-dark.svg',
          position: { x: 50, y: 50, scale: 2.4 }
        }
      },
      tags: ['React', 'NodeJS', 'TypeScript', 'MongoDB', 'AWS'],
      link: 'https://itriom.com',
      date: 'Mar 2022 - May 2022',
    },
    {
      title: 'DEFRA (GovUK)',
      jobTitle: 'Senior Developer (Contractor)',
      description: 'Worked on a greenfield project to digitise wildlife licensing applications for the DDTS team. I worked with other developers to build the NodeJS and React application, handled form validation and document uploads, designed the PostgreSQL schema, and integrated with government APIs, delivering the core features within a 3-month contract.',
      images: {
        light: {
          path: '/portfolio/defra-dark.svg',
          position: { x: 50, y: 50, scale: 0.6 }
        },
        dark: {
          path: '/portfolio/defra-light.svg',
          position: { x: 50, y: 50, scale: 0.6 }
        }
      },
      tags: ['NodeJS', 'ExpressJS', 'React', 'PostgreSQL'],
      link: 'https://defra.gov.uk',
      date: 'Dec 2021 - Mar 2022',
    },
    {
      title: 'Penta Consulting',
      jobTitle: 'Team Lead & Senior Developer (Contractor)',
      description: 'I mentored 4 junior developers. I implemented code review processes and pair programming sessions, improving code quality. I personally managed the technical delivery and client communication.',
      images: {
        light: {
          path: '/portfolio/oplo-light.png',
          position: { x: 50, y: 50, scale: 0.8 }
        },
        dark: {
          path: '/portfolio/oplo-dark.png',
          position: { x: 50, y: 50, scale: 0.8 }
        }
      },
      tags: ['MySQL', 'NodeJS', 'Kafka', 'Mentoring'],
      link: 'https://oplo.com',
      date: 'Mar 2021 - Jun 2021',
    },
    {
      title: 'VMD (GovUK)',
      jobTitle: 'Senior Developer & DevOps Engineer (Contractor)',
      description: 'Digitised animal pharmaceutical marketing authorisation processes post-Brexit for the DDTS team. I developed complex form workflows using Hapi.js with Handlebars for the frontend, built MongoDB-backed data services, and integrated with government APIs. I also handled document management and DevOps delivery over this 2-year contract.',
      images: {
        light: {
          path: '/portfolio/vmd-light.png',
          position: { x: 50, y: 50, scale: 1.3 }
        },
        dark: {
          path: '/portfolio/vmd-dark.png',
          position: { x: 50, y: 50, scale: 1.3 }
        }
      },
      tags: ['NodeJS', 'React', 'AWS', 'MongoDB', 'HapiJS'],
      link: 'https://www.gov.uk/government/organisations/veterinary-medicines-directorate',
      date: 'Feb 2019 - Mar 2021',
    },
    {
      title: 'eSure',
      jobTitle: 'Senior Developer (Contractor)',
      description: 'Worked in the MTA (mid-term adjustment) team for insurance policy changes between renewals. I developed insurance calculation logic and customer portal features using NestJS (a NodeJS framework with TypeScript), integrated with Oracle databases, and delivered REST APIs within the 3-month contract.',
      images: {
        light: {
          path: '/portfolio/esure-light.png',
          position: { x: 50, y: 50, scale: 1.5 }
        },
        dark: {
          path: '/portfolio/esure-dark.png',
          position: { x: 50, y: 50, scale: 1.5 }
        }
      },
      tags: ['NodeJS', 'NestJS', 'TypeScript', 'OracleDB'],
      link: 'https://www.esure.com',
      date: 'Nov 2018 - Feb 2019',
    },
    {
      title: 'Shell',
      jobTitle: 'Senior Developer (Contractor)',
      description: 'Greenfield project in the EV market focused on delivering energy to electric vehicles during off-peak hours. I developed the mobile application using Ionic (Angular-based), implemented real-time pricing algorithms and IoT integrations, and delivered the backend and MongoDB-powered APIs to support the charging network.',
      images: {
        light: {
          path: '/portfolio/shell-light.png',
          position: { x: 50, y: 50, scale: 1.3 }
        },
        dark: {
          path: '/portfolio/shell-dark.png',
          position: { x: 50, y: 50, scale: 1.3 }
        }
      },
      tags: ['NodeJS', 'React', 'MongoDB', 'Ionic', 'Capacitor', 'Mobile Development'],
      link: 'https://www.shell.co.uk/electric-vehicle-charging.html',
      date: 'May 2018 - Nov 2018',
    },
    {
      title: 'London School of Hygiene and Tropical Medicine, U. of London',
      jobTitle: 'Senior Developer (Contractor)',
      description: 'Built a greenfield biobank data system to anonymise blood sample data and reduce statistical bias. I developed the application using PHP and Laravel with Angular for the frontend, created anonymisation algorithms, implemented statistical tools, and delivered REST APIs and MySQL infrastructure for sample tracking.',
      images: {
        light: {
          path: '/portfolio/lshtm-light.png',
          position: { x: 50, y: 50, scale: 1.5 }
        },
        dark: {
          path: '/portfolio/lshtm-dark.png',
          position: { x: 50, y: 50, scale: 1.5 }
        }
      },
      tags: ['PHP', 'Laravel', 'MySQL', 'Angular'],
      link: 'https://www.lshtm.ac.uk',
      date: 'Oct 2017 - May 2018',
    }
  ],
  jobs: [
    {
      title: 'Paytently',
      jobTitle: 'Lead Platform Engineer',
      description: 'Founding engineer for a payments company, driving both performance and infrastructure. I architected the AWS infrastructure with Terraform, implemented CI/CD pipelines that reduced deployment time by 80%, and led a team of 3 developers. I also established DORA metrics to improve team velocity.',
      images: {
        light: {
          path: '/portfolio/paytently-light.png',
          position: { x: 50, y: 50, scale: 0.8 }
        },
        dark: {
          path: '/portfolio/paytently-dark.png',
          position: { x: 50, y: 50, scale: 0.8 }
        }
      },
      tags: ['AWS', 'Terraform', 'NodeJS', 'React', 'C#', 'TypeScript'],
      link: 'https://paytently.com',
      date: 'Jun 2023 - Jul 2024',
    },
    {
      title: 'SO Technology',
      jobTitle: 'Developer',
      description: 'Full-time developer building various client platforms. I helped deliver 3 major projects including questionnaire/survey systems and property management tools. I worked with PHP and Laravel to implement complex form logic, data analysis tools, and integrated third-party APIs across 2.5 years.',
      images: {
        light: {
          path: '/portfolio/so-light.svg',
          position: { x: 50, y: 50, scale: 2 }
        },
        dark: {
          path: '/portfolio/so-dark.svg',
          position: { x: 50, y: 50, scale: 2 }
        }
      },
      tags: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Angular'],
      link: 'https://sotechnology.co.uk',
      date: 'Jan 2015 - Oct 2017',
    },
    {
      title: 'We Know Data',
      jobTitle: 'Developer',
      description: 'Developed bespoke websites and mobile apps across various industries. I delivered 4 custom client projects and maintained 8 legacy applications. My responsibilities included full-stack development using PHP, HTML, CSS, and JavaScript, and building robust MySQL databases and third-party API integrations. During my time here, I also helped develop an internal web application for Apple to manage their global PO system within their London branch.',
      images: {
        light: {
          path: '/portfolio/weknowdata-light.png',
          position: { x: 50, y: 50, scale: 0.8 }
        },
        dark: {
          path: '/portfolio/weknowdata-dark.png',
          position: { x: 50, y: 50, scale: 0.8 }
        }
      },
      tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'SQL'],
      link: 'https://weknowdata.net',
      date: 'Feb 2013 - Jan 2016',
    }
  ],
  freeApps: []
};

// Updated education data
export const educationData = [
  {
    institution: 'University of Hertfordshire',
    degree: 'BSc',
    field: 'Computer Science with an AI specialisation',
    graduationDate: '2010 - 2013',
    description: 'Bachelor of Science degree focusing on computer science fundamentals with specialization in artificial intelligence.'
  },
  {
    institution: 'West Herts College',
    degree: 'National Diploma',
    field: 'IT with Networking specialisation',
    graduationDate: '2007 - 2010',
    description: 'Achieved Distinction grade in National Diploma focusing on IT with specialization in networking technologies.'
  }
];

// Added certifications
export const certificationData = [
  {
    name: 'Cisco CCNA Discovery',
    issuer: 'Cisco',
    date: '2007 - 2010',
    description: 'Routing and switching in enterprise. Designing and supporting computer networks. Networking at Small-Medium business or ISP\'s.'
  }
];

// Updated skills data
export const skillsData = {
  languages: [
    'TypeScript', 'JavaScript', 'Python', 'Bash Scripting', 'C#', 'PHP', 'HTML', 'CSS', 'SQL'
  ],
  frameworks: [
    'React', 'React Native', 'NestJS', 'NodeJS', 'Express', 'GraphQL', 'Hapi.js', 'Capacitor', 'Laravel', 'Angular', 'Next.js', 'Ionic'
  ],
  tools: [
    'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab', 'CI/CD', 'Kafka', 'Dapr', 'RabbitMQ'
  ],
  databases: [
    'MongoDB', 'MySQL', 'PostgreSQL', 'OracleDB'
  ],
  cloud: [
    'AWS', 'Azure', 'GCP'
  ],
  testing: [
    'Jest', 'Cucumber', 'Cypress'
  ],
  other: [
    'Event-Driven Architectures', 'Microservices Architecture', 'CI/CD Orchestration', 'UX/UI Design', 'AI', 'Mobile Development', 'Mentoring', 'Home Automation', 'Hardware', 'Networking', 'Security', 'Videography', 'Photography', 'Drones'
  ],
  soft: [
    'Get it done mentality', 'Excellent people skills', 'Requirements gathering and analysis',
    'Good time management', 'Live demonstration skills', 'Quick to learn new technologies'
  ]
};

// Updated interests
export const interestsData = [
  'Home automation', 'PC Gaming', 'Cybersecurity', 'Blockchain', 'AI'
];

// Updated personal data
export const personalData = {
  name: 'Brad Bird BSc',
  title: 'Senior Software Engineer',
  location: 'London, UK',
  email: 'jobs@bradbird.co.uk',
  phone: '+44 7783 309295',
  shortSummary: 'Software engineering multi-tool. SaaS startup guru. Keen interest in cybersecurity. Blockchain enthusiast. AI lover.',
  summary: 'A highly skilled and results-driven Senior Software Engineer with over 15 years of experience delivering innovative solutions across more than 10 industries. Known for bridging the gap between structured corporate environments and dynamic startup ecosystems, bringing a versatile skill set and deep technical expertise to every project. Proficient in modernizing legacy systems, developing greenfield applications, and leading high-performing teams to deliver scalable, high-quality software that aligns with business objectives. Committed to continuous learning and adaptability to excel in fast-paced, evolving environments.'
}; 