import React from 'react';
import PortfolioItem from '../components/PortfolioItem';
import { portfolioItems } from '../data/portfolioData';
import { useSkillFilter } from '../providers/SkillFilterProvider';

const Portfolio: React.FC = () => {
  const { selectedSkills } = useSkillFilter();

  // Filter items based on selected skills
  const filterItemsBySkills = (items: any[]) => {
    if (selectedSkills.length === 0) return items;
    return items.filter(item =>
      item.tags && selectedSkills.some(skill => item.tags.includes(skill))
    );
  };

  const renderSection = (title: string, items: any[]) => {
    const filteredItems = filterItemsBySkills(items);

    // Don't render section if no items match the filter
    if (filteredItems.length === 0) return null;

    return (
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          {title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              jobTitle={item.jobTitle}
              description={item.description}
              images={item.images}
              tags={item.tags}
              link={item.link}
              date={item.date}
              highlightedSkills={selectedSkills}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="px-10">
      <div className="py-4">
        <header>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">My Lifes Work</h1>
        </header>
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
