import React from 'react';
import PortfolioItem from '../components/PortfolioItem';
import { portfolioItems } from '../data/portfolioData';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const renderSection = (title: string, items: any[]) => (
    items.length > 0 ? (
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
    <div className="px-10">
      <div className="flex justify-between items-center py-4">
        <header>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">My Lifes Work</h1>
        </header>
        <Link
          to="/cv"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 flex items-center"
        >
          Toggle CV
        </Link>
      </div>
      <div className="mx-auto py-8">
        {renderSection('Joint Startups', portfolioItems.jointStartups)}
        {renderSection('Solo Startups', portfolioItems.soloStartups)}
        {renderSection('Companies', portfolioItems.companies)}
        {renderSection('Direct Client Work', portfolioItems.clientWork)}
        {renderSection('Free Apps', portfolioItems.freeApps)}
        {renderSection('Full Time Jobs', portfolioItems.jobs)}
      </div>
    </div>
  );
};

export default Portfolio;
