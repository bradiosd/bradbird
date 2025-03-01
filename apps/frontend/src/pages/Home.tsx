import React from 'react';
import PortfolioItem from '../components/PortfolioItem';

const Home: React.FC = () => {
  const portfolioItems = {
    companies: [
      {
        title: '128 Bit Studios',
        jobTitle: '',
        description: 'Working as independent contractors building web based applications, software, games and mobile apps. We have a strong suite of skills being able to deliver end-to-end solutions that are scalable and reliable.',
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
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Aug 2017 - Present',
      },
      {
        title: 'Smart Bird Home Automations',
        jobTitle: '',
        description: 'Upgrading homes and businesses with affordable smart tech to make their lives easier and business operations run smoother. All hardware and software is retro fit with security in mind.',
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
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Jul 2024 - Present',
      },
      {
        title: 'Bradios Drones',
        jobTitle: '',
        description: 'We provide professional videography and photography for clients. We also provide drone operators to survey land and perform health and safety inspections where human intervention could be time consuming or dangerous.',
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
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: '2020 - 2021',
      },
      {
        title: 'Zesty Designs',
        jobTitle: '',
        description: 'Spent my late teens and early twenties designing and building websites for clients on a freelance basis while during college and alongside my first couple of full-time jobs.',
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
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Aug 2006 - Aug 2017',
      }
    ],
    jointStartups: [
      {
        title: 'Quote Away AI',
        jobTitle: 'Chief Technology Officer',
        description: 'Leading the technology behind innovative AI solutions within the travel industry. Started in December and launching our MVP after 1 month of development, we now have over 350 users and those users have made over 8000 quotes.',
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
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Jan 2025 - Present',
      },
      {
        title: 'Your CV Video',
        jobTitle: 'Head of Platform',
        description: 'YourCVVideo.Com was established to assist Recruitment Consultants and HR Professionals to cut down on the amount of time that they spend looking at CV\'s from Jobseekers. The platform enables Recruiters to find suitable Jobseekers in a fraction of the time through video CVs.',
        images: {
          light: {
            path: '/portfolio/yourcvvideo-light.png',
            position: { x: 50, y: 50, scale: 1.4 }
          },
          dark: {
            path: '/portfolio/yourcvvideo-dark.png',
            position: { x: 50, y: 50, scale: 1.4 }
          }
        },
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Apr 2019 - Present',
      }
    ],
    soloStartups: [
      {
        title: 'WordPress Scanner',
        jobTitle: '',
        description: 'A comprehensive WordPress security assessment tool that helps identify vulnerabilities and security issues in WordPress sites. The scanner detects popular plugins and themes, providing detailed analysis of potential security risks. Each scan generates a comprehensive PDF report of findings along with a step-by-step guide for remediation, making security accessible for WordPress site owners.',
        images: {
          light: {
            path: '/portfolio/wpscanner-dark.png',
            position: { x: 50, y: 50, scale: 0.6 }
          },
          dark: {
            path: '/portfolio/wpscanner-dark.png',
            position: { x: 50, y: 50, scale: 0.6 }
          }
        },
        tags: [],
        link: 'https://wpscanner.128bitstudios.co.uk',
        date: '2025 - Present',
      },
      {
        title: 'MotoStats',
        jobTitle: '',
        description: 'A petrol-head community hub and vehicle specs database. We collate data from the most up to date sources and present it in a simple to use mobile app. We also provide community driven map data for the best driving and motorcycling routes in the country.',
        images: {
          light: {
            path: '/portfolio/motostats-dark.png',
            position: { x: 50, y: 50, scale: 0.6 }
          },
          dark: {
            path: '/portfolio/motostats-dark.png',
            position: { x: 50, y: 50, scale: 0.6 }
          }
        },
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: '2014 - 2016',
      }
    ],
    clientWork: [
      {
        title: 'Untapped',
        jobTitle: 'Technical Lead',
        description: 'Transformed a legacy monolithic MVC C# system into a modern, decoupled architecture, resulting in a 40% performance improvement and significantly reduced system complexity. By implementing a backend API and frontend application, the new system facilitated seamless third-party integrations and enhanced maintainability for future growth.',
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
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Jun 2021 - Present',
      },
      {
        title: 'Hargreaves Lansdown',
        jobTitle: 'Senior Developer',
        description: 'Pioneered the adoption of a microservices architecture in Node.js, a first for the organization\'s in-house projects. Delivered a robust abstraction layer to shield databases from direct exposure, significantly enhancing security and reducing the risk of data breaches. This initiative set a new standard for scalable and secure application design within the company.',
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
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Jul 2022 - Jun 2023',
      },
      {
        title: 'Itriom',
        jobTitle: 'Technical Lead',
        description: 'Successfully delivered a minimum viable product within three months, enabling the client to present a fully functional solution to shareholders. This milestone demonstrated a rapid yet reliable development process, aligning technical capabilities with critical business objectives.',
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
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Mar 2022 - May 2022',
      },
      {
        title: 'DEFRA',
        jobTitle: 'Senior Developer',
        description: 'Worked on a greenfield project to digitise wildlife licensing applications for the DDTS (Digital, Data and Technology Services) team.',
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
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Dec 2021 - Mar 2022',
      },
      {
        title: 'Penta Consulting',
        jobTitle: 'Team Lead',
        description: 'Mentoring and leading junior developers within the Fintech industry (primarily loans) through a consulting organisation.',
        images: {
          light: {
            path: '/portfolio/penta-light.png',
            position: { x: 50, y: 50, scale: 0.6 }
          },
          dark: {
            path: '/portfolio/penta-dark.png',
            position: { x: 50, y: 50, scale: 1.7 }
          }
        },
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Mar 2021 - Jun 2021',
      },
      {
        title: 'VMD',
        jobTitle: 'Senior Developer',
        description: 'Working in the DDTS team to digitise animal pharmaceutical marketing authorisation requests in a post-brexit United Kingdom.',
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
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Feb 2019 - Mar 2021',
      },
      {
        title: 'esure',
        jobTitle: 'Senior Developer',
        description: 'Worked in the MTA (mid-term adjustment) team allowing customers to modify their insurance details inbetween renewals and providing mid-term quote adjustments.',
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
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Nov 2018 - Feb 2019',
      },
      {
        title: 'Shell',
        jobTitle: 'Senior Developer',
        description: 'Greenfield project in the EV (electric vehicle) market working to provide energy to electric cars at specific times in the day taking advantage of low supplier rates.',
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
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'May 2018 - Nov 2018',
      },
      {
        title: 'LSHTM',
        jobTitle: 'Senior Developer',
        description: 'Greenfield biobank project to analyse blood samples and anonymise the data to reduce bias on statistics analysis reports.',
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
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Oct 2017 - May 2018',
      }
    ],
    jobs: [
      {
        title: 'Paytently',
        jobTitle: 'Head of Platform',
        description: 'Founding engineer for a payments company. Mostly driving the performance of the teams and leading the DevOps platform. Utlising Terraform on AWS cloud infrastructure and using DORA metrics to ensure team success.',
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
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Jun 2023 - Jul 2024',
      },
      {
        title: 'SO Technology',
        jobTitle: 'Developer',
        description: 'Full-time position as Developer at SO Technology. Developing multiple projects for questionnaires and survey systems, property management systems and more.',
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
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Jan 2015 - Oct 2017',
      },
      {
        title: 'We Know Data',
        jobTitle: 'Developer',
        description: 'We Know Data are based in London specialising in website development, mobile applications and database development, providing faultless and reliable experience across all industries.',
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
        tags: [],
        link: 'https://www.linkedin.com/in/bradbird1990/details/experience/',
        date: 'Feb 2013 - Jan 2016',
      }
    ],
    freeApps: []
  };

  const renderSection = (title: string, items: any[]) => (
    items.length > 0 ? (
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white mx-4">{title}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              jobTitle={item.jobTitle}
              description={item.description}
              images={item.images}
              tags={item.tags}
              link={item.link}
              date={item.date}
            />
          ))}
        </div>
      </div>
    ) : null
  );

  return (
    <div className="px-6 mx-auto py-8">
      {renderSection('Joint Startups', portfolioItems.jointStartups)}
      {renderSection('Solo Startups', portfolioItems.soloStartups)}
      {renderSection('Companies', portfolioItems.companies)}
      {renderSection('Direct Client Work', portfolioItems.clientWork)}
      {renderSection('Free Apps', portfolioItems.freeApps)}
      {renderSection('Full Time Jobs', portfolioItems.jobs)}
    </div>
  );
};

export default Home;
