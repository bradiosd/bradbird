import React from 'react';
import PortfolioItem from '../components/PortfolioItem';

const extractTitleAndJobTitle = (fullTitle: string): { title: string; jobTitle?: string } => {
  const match = fullTitle.match(/^(.*?) at (.*)$/);
  if (match) {
    return {
      title: match[2],
      jobTitle: match[1]
    };
  }
  return { title: fullTitle };
};

const Home: React.FC = () => {
  const portfolioItems = {
    companies: [
      {
        title: '128 Bit Studios',
        jobTitle: 'Director',
        description: 'Working as independent contractors building web based applications, software, games and mobile apps. We have a strong suite of skills being able to deliver end-to-end solutions that are scalable and reliable.',
        image: '/portfolio/otebs.png',
        tags: [],
        skills: ['Web Development', 'Mobile Apps', 'Game Development'],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Aug 2017 - Present',
        imagePosition: { x: 50, y: 50, scale: 0.9 },
      },
      {
        title: 'Smart Bird Home Automations',
        jobTitle: 'Director',
        description: 'Founded by Brad, Smart Bird Home Automations focused on providing energy-efficient smart home solutions. Despite market challenges, the venture offered valuable insights into entrepreneurship and customer engagement.',
        image: '/portfolio/sbha.png',
        tags: [],
        skills: ['CCTV/IoT Installs', 'IoT Programming', 'Home Assistant', 'NodeJS', 'ReactJS', 'Docker'],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'August 2024 – September 2024',
        imagePosition: { x: 50, y: 50, scale: 0.7 },
      },
      {
        title: 'Bradios Drones',
        jobTitle: 'Director',
        description: 'We provide professional videography and photography for clients. We also provide drone operators to survey land and perform health and safety inspections where human intervention could be time consuming or dangerous.',
        image: '/portfolio/bradiosdrones.png',
        tags: [],
        skills: ['Drone Photography', 'Videography', 'Land Surveying', 'Safety Inspections'],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: '2020 - 2021',
        imagePosition: { x: 50, y: 50, scale: 1.5 },
      },
      {
        title: 'Zesty Designs',
        jobTitle: 'Director',
        description: 'Spent my late teens and early twenties designing and building websites for clients on a freelance basis while during college and alongside my first couple of full-time jobs.',
        image: '/portfolio/zesty.png',
        tags: [],
        skills: ['Web Design', 'Web Development', 'Client Management'],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Aug 2006 - Aug 2017',
        imagePosition: { x: 50, y: 50, scale: 0.7 },
      }
    ],
    jointStartups: [
      {
        title: 'Quote Away AI',
        jobTitle: 'CTO',
        description: 'Leading the technology behind innovative AI solutions within the travel industry. Started in December and launching our MVP after 1 month of development, we now have over 350 users and those users have made over 8000 quotes.',
        image: '/portfolio/quoteawayai.png',
        tags: [],
        skills: ['AI/ML', 'Cloud Architecture', 'NodeJS', 'React', 'TypeScript', 'AWS'],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Jan 2025 - Present',
        imagePosition: { x: 50, y: 50, scale: 0.7 },
      },
      {
        title: 'YourCVVideo.com',
        jobTitle: 'Head of Platform',
        description: 'YourCVVideo.Com was established to assist Recruitment Consultants and HR Professionals to cut down on the amount of time that they spend looking at CV\'s from Jobseekers. The platform enables Recruiters to find suitable Jobseekers in a fraction of the time through video CVs.',
        image: '/portfolio/yourcvvideo.png',
        tags: [],
        skills: ['Video Processing', 'AWS', 'NodeJS', 'React', 'MongoDB', 'Micro Services'],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Apr 2019 - Present',
        imagePosition: { x: 50, y: 50, scale: 1.4 },
      }
    ],
    soloStartups: [
      {
        title: 'MotoStats',
        jobTitle: 'Director',
        description: 'A petrol-head community hub and vehicle specs database. We collate data from the most up to date sources and present it in a simple to use mobile app. We also provide community driven map data for the best driving and motorcycling routes in the country.',
        image: '/portfolio/motostats.png',
        tags: [],
        skills: ['Mobile Development', 'React Native', 'NodeJS', 'MongoDB', 'Community Management'],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: '2014 - 2016',
        imagePosition: { x: 50, y: 50, scale: 0.6 },
      },
    ],
    clientWork: [
      {
        ...extractTitleAndJobTitle('Technical Lead at Untapped'),
        description: 'Re-engineering a legacy monolithic system to work as a Rest API and frontend SPA application for a leading and global Diabetic healthcare company.',
        image: '/portfolio/untapped.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Jun 2021 - Present',
        imagePosition: { x: 50, y: 50, scale: 0.6 },
      },
      {
        ...extractTitleAndJobTitle('Senior Developer at Hargreaves Lansdown'),
        description: 'Contract position at Hargreaves Lansdown',
        image: '/portfolio/hargreaveslansdown.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Jul 2022 - Jun 2023',
        imagePosition: { x: 50, y: 50, scale: 1 },
      },
      {
        ...extractTitleAndJobTitle('Technical Lead at Itriom'),
        description: 'Leading and building the tech stack required to build a robust and effecient global web platform for UHNW (ultra high net worth) individuals.',
        image: '/portfolio/itriom.svg',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Mar 2022 - May 2022',
        imagePosition: { x: 50, y: 50, scale: 2.4 },
      },
      {
        ...extractTitleAndJobTitle('Senior Developer at DEFRA'),
        description: 'Worked on a greenfield project to digitise wildlife licensing applications for the DDTS (Digital, Data and Technology Services) team.',
        image: '/portfolio/defra.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Dec 2021 - Mar 2022',
        imagePosition: { x: 50, y: 50, scale: 0.6 },
      },
      {
        ...extractTitleAndJobTitle('Team Lead at Penta Consulting'),
        description: 'Mentoring and leading junior developers within the Fintech industry (primarily loans) through a consulting organisation.',
        image: '/portfolio/penta.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Mar 2021 - Jun 2021',
        imagePosition: { x: 50, y: 50, scale: 1.6 },
      },
      {
        ...extractTitleAndJobTitle('Senior Developer at VMD'),
        description: 'Working in the DDTS team to digitise animal pharmaceutical marketing authorisation requests in a post-brexit United Kingdom.',
        image: '/portfolio/vmd.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Feb 2019 - Mar 2021',
        imagePosition: { x: 50, y: 50, scale: 1.3 },
      },
      {
        ...extractTitleAndJobTitle('Senior Developer at esure'),
        description: 'Worked in the MTA (mid-term adjustment) team allowing customers to modify their insurance details inbetween renewals and providing mid-term quote adjustments.',
        image: '/portfolio/esure.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Nov 2018 - Feb 2019',
        imagePosition: { x: 50, y: 50, scale: 1.5 },
      },
      {
        ...extractTitleAndJobTitle('Senior Developer at Shell'),
        description: 'Greenfield project in the EV (electric vehicle) market working to provide energy to electric cars at specific times in the day taking advantage of low supplier rates.',
        image: '/portfolio/shell.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'May 2018 - Nov 2018',
        imagePosition: { x: 50, y: 50, scale: 1.3 },
      },
      {
        ...extractTitleAndJobTitle('Senior Developer at LSHTM'),
        description: 'Greenfield biobank project to analyse blood samples and anonymise the data to reduce bias on statistics analysis reports.',
        image: '/portfolio/lshtm.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Oct 2017 - May 2018',
        imagePosition: { x: 50, y: 50, scale: 1.5 },
      }
    ],
    jobs: [
      {
        title: 'Paytently',
        jobTitle: 'Head of Platform & Senior Software Engineer',
        description: 'Established a robust DevOps observability platform, incorporating PagerDuty to ensure rapid incident response with a weekly on-call rotation. Achieved an unprecedented 99.999% uptime for the payments platform, ensuring uninterrupted service and compliance with strict operational requirements.',
        image: '/portfolio/paytently.png',
        tags: [],
        skills: ['AWS', 'GitLab', 'Terraform', 'Bash Scripting', 'DAPR Event Driven Architecture', 'Docker'],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'June 2023 – July 2024',
        imagePosition: { x: 50, y: 50, scale: 0.8 },
      },
      {
        title: 'Hargreaves Lansdown',
        jobTitle: 'Senior Software Engineer Contractor',
        description: 'Pioneered the adoption of a microservices architecture in Node.js, a first for the organization\'s in-house projects. Delivered a robust abstraction layer to shield databases from direct exposure, significantly enhancing security and reducing the risk of data breaches. This initiative set a new standard for scalable and secure application design within the company.',
        image: '/portfolio/hargreaveslansdown.png',
        tags: [],
        skills: ['AWS', 'GitLab', 'Terraform', 'Express', 'NodeJS', 'Typescript', 'JavaScript', 'Docker', 'Micro Services'],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'June 2022 – June 2023',
        imagePosition: { x: 50, y: 50, scale: 1 },
      },
      {
        title: 'Itriom',
        jobTitle: 'Senior Software Engineer Contractor',
        description: 'Successfully delivered a minimum viable product within three months, enabling the client to present a fully functional solution to shareholders. This milestone demonstrated a rapid yet reliable development process, aligning technical capabilities with critical business objectives.',
        image: '/portfolio/itriom.svg',
        tags: [],
        skills: ['React', 'GraphQL', 'MongoDB', 'AWS', 'Docker', 'Cypress'],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'March 2022 – May 2022',
        imagePosition: { x: 50, y: 50, scale: 2.4 },
      },
      {
        title: 'Nature England (GovUK – Defra)',
        jobTitle: 'Senior Software Engineer Contractor',
        description: 'Contributed to the early stages of a greenfield project for wildlife licensing, focusing on building foundational systems and supporting development efforts for future scalability.',
        image: '/portfolio/defra.png',
        tags: [],
        skills: ['Micro Services', 'Azure', 'HapiJS', 'Typescript', 'NodeJS', 'Jenkins', 'Cypress'],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'March 2022 – May 2022',
        imagePosition: { x: 50, y: 50, scale: 0.6 },
      },
      {
        title: 'Untapped Ltd',
        jobTitle: 'Senior Software Engineer Contractor',
        description: 'Transformed a legacy monolithic MVC C# system into a modern, decoupled architecture, resulting in a 40% performance improvement and significantly reduced system complexity. By implementing a backend API and frontend application, the new system facilitated seamless third-party integrations and enhanced maintainability for future growth.',
        image: '/portfolio/untapped.png',
        tags: [],
        skills: ['React', 'Typescript', 'NodeJS', 'Docker', 'Cypress Testing', 'AWS', 'Cucumber'],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'March 2022 – May 2022',
        imagePosition: { x: 50, y: 50, scale: 0.6 },
      },
      {
        title: 'Penta Consulting',
        jobTitle: 'Senior Software Engineer Contractor',
        description: 'Led the training and mentoring of the client\'s junior development team, transitioning them from theoretical knowledge to practical application. This transformation enabled the finance platform to progress from minimal feature output to consistently delivering 2–3 new features per sprint cycle, significantly improving productivity.',
        image: '/portfolio/penta.png',
        tags: [],
        skills: ['MongoDB', 'NodeJS', 'NestJS', 'TypeScript', 'React', 'Micro Services', 'Kafka Event Driven Architecture', 'Mentoring'],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'March 2022 – May 2022',
        imagePosition: { x: 50, y: 50, scale: 1.6 },
      },
      {
        title: 'Veterinary Medicines Directorate (GovUK – Defra)',
        jobTitle: 'Senior Software Engineer Contractor',
        description: 'Designed and implemented the UK government\'s medicine import programme from the ground up following Brexit, addressing compliance requirements for itemizing medicines. Delivered the fully functional system within 12 months, meeting complex regulatory demands, and provided extensive training to ensure the internal team could independently maintain and enhance the system post-delivery.',
        image: '/portfolio/vmd.png',
        tags: [],
        skills: ['Angular', 'MongoDB', 'NodeJS', 'HapiJS', 'Jenkins', 'AWS', 'Kubernetes', 'Cucumber'],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'March 2018 – January 2021',
        imagePosition: { x: 50, y: 50, scale: 1.3 },
      },
      {
        title: 'Esure Group PLC',
        jobTitle: 'Senior Software Engineer',
        description: 'Delivered a mid-term adjustment facility, empowering customers to update policies online without relying on call centers. This innovation streamlined customer support operations, allowing the same resources to focus on higher-priority claims calls and improving overall efficiency.',
        image: '/portfolio/esure.png',
        tags: [],
        skills: ['Angular', 'NodeJS', 'NestJS', 'Worldpay', 'Travis CI', 'Cucumber', 'Jest'],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'October 2018 – March 2019',
        imagePosition: { x: 50, y: 50, scale: 1.5 },
      }
    ],
    freeApps: []
  };

  const renderSection = (title: string, items: any[]) => (
    items.length > 0 ? (
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white mx-6">{title}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              jobTitle={item.jobTitle}
              description={item.description}
              image={item.image}
              tags={item.tags}
              link={item.link}
              date={item.date}
              imagePosition={item.imagePosition}
            />
          ))}
        </div>
      </div>
    ) : null
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {renderSection('Joint Startups', portfolioItems.jointStartups)}
      {renderSection('Solo Startups', portfolioItems.soloStartups)}
      {renderSection('Companies', portfolioItems.companies)}
      {renderSection('Client Work', portfolioItems.clientWork)}
      {renderSection('Free Apps', portfolioItems.freeApps)}
      {renderSection('Full Time Jobs', portfolioItems.jobs)}
    </div>
  );
};

export default Home;
