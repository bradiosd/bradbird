import React from 'react';
import PortfolioItem from '../components/PortfolioItem';

const Home: React.FC = () => {
  const portfolioItems = {
    startups: [
      {
        title: '128 Bit Studios',
        description: 'Working as independent contractors building web based applications, software, games and mobile apps. We have a strong suite of skills being able to deliver end-to-end solutions that are scalable and reliable.',
        image: '/portfolio/otebs.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Aug 2017 - Present',
        imagePosition: { x: 50, y: 50, scale: 0.9 },
      },
      {
        title: 'Smart Bird Home Automations',
        description: 'Upgrading homes and businesses with affordable smart tech to make their lives easier and business operations run smoother. All hardware and software is retro fit with security in mind.',
        image: '/portfolio/sbha.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Jul 2024 - Present',
        imagePosition: { x: 50, y: 50, scale: 0.7 },
      },
      {
        title: 'Bradios Drones',
        description: 'We provide professional videography and photography for clients. We also provide drone operators to survey land and perform health and safety inspections where human intervention could be time consuming or dangerous.',
        image: '/portfolio/bradiosdrones.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: '2020 - 2021',
        imagePosition: { x: 50, y: 50, scale: 1.5 },
      },
      {
        title: 'MotoStats',
        description: 'A petrol-head community hub and vehicle specs database. We collate data from the most up to date sources and present it in a simple to use mobile app. We also provide community driven map data for the best driving and motorcycling routes in the country.',
        image: '/portfolio/motostats.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: '2014 - 2016',
        imagePosition: { x: 50, y: 50, scale: 0.6 },
      },
      {
        title: 'Zesty Designs',
        description: 'Spent my late teens and early twenties designing and building websites for clients on a freelance basis while during college and alongside my first couple of full-time jobs.',
        image: '/portfolio/zesty.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Aug 2006 - Aug 2017',
        imagePosition: { x: 50, y: 50, scale: 0.7 },
      }
    ],
    jointStartups: [
      {
        title: 'Quote Away AI',
        description: 'Leading the technology behind innovative AI solutions within the travel industry. Started in December and launching our MVP after 1 month of development, we now have over 350 users and those users have made over 8000 quotes.',
        image: '/portfolio/quoteawayai.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Jan 2025 - Present',
        imagePosition: { x: 50, y: 50, scale: 0.7 },
      },
      {
        title: 'YourCVVideo.com',
        description: 'YourCVVideo.Com was established to assist Recruitment Consultants and HR Professionals to cut down on the amount of time that they spend looking at CV\'s from Jobseekers. The platform enables Recruiters to find suitable Jobseekers in a fraction of the time through video CVs.',
        image: '/portfolio/yourcvvideo.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Apr 2019 - Present',
        imagePosition: { x: 50, y: 50, scale: 1.4 },
      }
    ],
    clientWork: [
      {
        title: 'Technical Lead at Untapped',
        description: 'Re-engineering a legacy monolithic system to work as a Rest API and frontend SPA application for a leading and global Diabetic healthcare company.',
        image: '/portfolio/untapped.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Jun 2021 - Present',
        imagePosition: { x: 50, y: 50, scale: 0.6 },
      },
      {
        title: 'Senior Developer at Hargreaves Lansdown',
        description: 'Contract position at Hargreaves Lansdown',
        image: '/portfolio/hargreaveslansdown.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Jul 2022 - Jun 2023',
        imagePosition: { x: 50, y: 50, scale: 1 },
      },
      {
        title: 'Technical Lead at Itriom',
        description: 'Leading and building the tech stack required to build a robust and effecient global web platform for UHNW (ultra high net worth) individuals.',
        image: '/portfolio/itriom.svg',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Mar 2022 - May 2022',
        imagePosition: { x: 50, y: 50, scale: 2.4 },
      },
      {
        title: 'Senior Developer at DEFRA',
        description: 'Worked on a greenfield project to digitise wildlife licensing applications for the DDTS (Digital, Data and Technology Services) team.',
        image: '/portfolio/defra.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Dec 2021 - Mar 2022',
        imagePosition: { x: 50, y: 50, scale: 0.6 },
      },
      {
        title: 'Team Lead at Penta Consulting',
        description: 'Mentoring and leading junior developers within the Fintech industry (primarily loans) through a consulting organisation.',
        image: '/portfolio/penta.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Mar 2021 - Jun 2021',
        imagePosition: { x: 50, y: 50, scale: 1.6 },
      },
      {
        title: 'Senior Developer at VMD',
        description: 'Working in the DDTS team to digitise animal pharmaceutical marketing authorisation requests in a post-brexit United Kingdom.',
        image: '/portfolio/vmd.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Feb 2019 - Mar 2021',
        imagePosition: { x: 50, y: 50, scale: 1.3 },
      },
      {
        title: 'Senior Developer at esure',
        description: 'Worked in the MTA (mid-term adjustment) team allowing customers to modify their insurance details inbetween renewals and providing mid-term quote adjustments.',
        image: '/portfolio/esure.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Nov 2018 - Feb 2019',
        imagePosition: { x: 50, y: 50, scale: 1.5 },
      },
      {
        title: 'Senior Developer at Shell',
        description: 'Greenfield project in the EV (electric vehicle) market working to provide energy to electric cars at specific times in the day taking advantage of low supplier rates.',
        image: '/portfolio/shell.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'May 2018 - Nov 2018',
        imagePosition: { x: 50, y: 50, scale: 1.3 },
      },
      {
        title: 'Senior Developer at LSHTM',
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
        title: 'Head of Platform at Paytently',
        description: 'Founding engineer for a payments company. Mostly driving the performance of the teams and leading the DevOps platform. Utlising Terraform on AWS cloud infrastructure and using DORA metrics to ensure team success.',
        image: '/portfolio/paytently.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Jun 2023 - Jul 2024',
        imagePosition: { x: 50, y: 50, scale: 0.8 },
      },
      {
        title: 'Developer at SO Technology',
        description: 'Full-time position as Developer at SO Technology',
        image: '/portfolio/so.svg',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Jan 2015 - Oct 2017',
        imagePosition: { x: 50, y: 50, scale: 2 },
      },
      {
        title: 'Developer at We Know Data',
        description: 'We Know Data are based in London specialising in website development, mobile applications and database development, providing faultless and reliable experience across all industries.',
        image: '/portfolio/weknowdata.png',
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Feb 2013 - Jan 2016',
        imagePosition: { x: 50, y: 50, scale: 0.8 },
      }
    ],
    freeApps: []
  };

  const renderSection = (title: string, items: any[]) => (
    items.length > 0 ? (
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
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
      {renderSection('Startups', portfolioItems.startups)}
      {renderSection('Client Work', portfolioItems.clientWork)}
      {renderSection('Free Apps', portfolioItems.freeApps)}
      {renderSection('Jobs', portfolioItems.jobs)}
    </div>
  );
};

export default Home;
