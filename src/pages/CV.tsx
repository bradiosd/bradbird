import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  portfolioItems,
  educationData,
  skillsData,
  interestsData,
  personalData,
  certificationData
} from '../data/portfolioData';
import { useSidebar } from '../layouts/MainLayout';
import { useSkillFilter } from '../providers/SkillFilterProvider';

// Helper function to compare dates for sorting
const compareDates = (dateA: string, dateB: string) => {
  // Extract years from date strings
  const getYear = (dateStr: string) => {
    const match = dateStr.match(/(\d{4})/);
    return match ? parseInt(match[0], 10) : 0;
  };

  // For date ranges like "2020 - Present" or "2018 - 2019"
  const getLatestYear = (dateStr: string) => {
    if (dateStr.includes('Present')) return new Date().getFullYear() + 1; // Present is most recent
    const matches = dateStr.match(/\d{4}/g);
    if (!matches) return 0;
    return Math.max(...matches.map(year => parseInt(year, 10)));
  };

  return getLatestYear(dateB) - getLatestYear(dateA);
};

// Combine all work experience
const getAllWorkExperience = () => {
  const combined = [
    ...portfolioItems.jobs,
    ...portfolioItems.clientWork,
    ...portfolioItems.jointStartups,
    ...portfolioItems.soloStartups
  ];

  // Filter out duplicates by title
  const uniqueExperiences = combined.filter((item, index, self) =>
    index === self.findIndex(t => t.title === item.title)
  );

  return uniqueExperiences.sort((a, b) => compareDates(a.date, b.date));
};

const CV: React.FC = () => {
  const workExperience = getAllWorkExperience();
  const { setHideSidebar } = useSidebar();
  const { selectedSkills, toggleSkill, clearSkills, isSkillSelected } = useSkillFilter();

  // Flatten all skills into a single array for the filter
  const allSkills = [
    ...skillsData.languages,
    ...skillsData.frameworks,
    ...skillsData.tools,
    ...skillsData.databases,
    ...skillsData.cloud,
    ...skillsData.testing,
    ...skillsData.other
  ].sort();

  // Filter work experience based on selected skills
  const filteredWorkExperience = selectedSkills.length > 0
    ? workExperience.filter(job =>
      job.tags && selectedSkills.some(skill => job.tags.includes(skill))
    )
    : workExperience;

  // Set hideSidebar to true when component mounts
  useEffect(() => {
    setHideSidebar(true);

    // Reset when component unmounts
    return () => {
      setHideSidebar(false);
    };
  }, [setHideSidebar]);

  return (
    <div className="max-w-7xl mx-auto px-10 py-4">
      {/* Skills Filter */}
      <section className="mb-8">
        <div className="flex flex-wrap gap-2">
          {allSkills.map((skill, index) => (
            <button
              key={index}
              onClick={() => toggleSkill(skill)}
              className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${isSkillSelected(skill)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {skill}
            </button>
          ))}
          {selectedSkills.length > 0 && (
            <button
              onClick={clearSkills}
              className="px-3 py-1 rounded-full text-sm bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-800/30 transition-colors duration-200"
            >
              Clear All Filters
            </button>
          )}
        </div>
      </section>

      {/* Header */}
      <header className="mb-12 border-b border-gray-200 dark:border-gray-700 pb-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 md:w-48 md:h-48 flex-shrink-0 overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-700">
            <img
              src="/bradiosd.jpeg"
              alt={personalData.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center md:text-left flex-grow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  {personalData.name}
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4">
                  {personalData.title}
                </h2>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>{personalData.location}</span>
              </div>

              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href={`mailto:${personalData.email}`} className="hover:text-blue-500 dark:hover:text-blue-400">
                  {personalData.email}
                </a>
              </div>

              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                <span>{personalData.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Professional Summary</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {personalData.summary}
          </p>
        </div>
      </header >

      {/* Work Experience */}
      < section className="mb-12" >
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Work Experience
        </h2>

        {filteredWorkExperience.length === 0 && selectedSkills.length > 0 && (
          <div className="text-gray-600 dark:text-gray-400 py-4">
            No work experience found with the selected skills: {selectedSkills.join(', ')}
          </div>
        )}

        <div className="space-y-8">
          {filteredWorkExperience.map((job, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="md:col-span-1 text-gray-500 dark:text-gray-400">
                <div className="text-sm">{job.date}</div>
              </div>

              <div className="md:col-span-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {job.title}
                  {job.jobTitle && <span className="ml-2 font-normal text-gray-600 dark:text-gray-400">— {job.jobTitle}</span>}
                </h3>

                <p className="my-2 text-gray-600 dark:text-gray-400">
                  {job.description}
                </p>

                {job.tags && job.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {job.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-1 text-xs rounded-full ${selectedSkills.includes(tag)
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section >

      {/* Education */}
      < section className="mb-12" >
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Education
        </h2>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="md:col-span-1 text-gray-500 dark:text-gray-400">
                <div className="text-sm">{edu.graduationDate}</div>
              </div>

              <div className="md:col-span-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {edu.institution}
                </h3>
                <div className="text-md text-gray-600 dark:text-gray-400">
                  {edu.degree} in {edu.field}
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section >

      {/* Certifications */}
      < section className="mb-12" >
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Certifications
        </h2>

        <div className="space-y-6">
          {certificationData.map((cert, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="md:col-span-1 text-gray-500 dark:text-gray-400">
                <div className="text-sm">{cert.date}</div>
              </div>

              <div className="md:col-span-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {cert.name}
                </h3>
                <div className="text-md text-gray-600 dark:text-gray-400">
                  {cert.issuer}
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section >

      {/* Skills */}
      < section className="mb-12" >
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.languages.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${isSkillSelected(skill)
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold'
                    : 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.frameworks.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${isSkillSelected(skill)
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-semibold'
                    : 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                    }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Tools & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.tools.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${isSkillSelected(skill)
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-semibold'
                    : 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                    }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.databases.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${isSkillSelected(skill)
                    ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 font-semibold'
                    : 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                    }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Cloud Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.cloud.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${isSkillSelected(skill)
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-semibold'
                    : 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                    }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Testing</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.testing.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${isSkillSelected(skill)
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-semibold'
                    : 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                    }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Other Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.other.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${isSkillSelected(skill)
                    ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 font-semibold'
                    : 'bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400'
                    }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.soft.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* Interests */}
      < section className="mb-12" >
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Interests
        </h2>

        <div className="flex flex-wrap gap-2">
          {interestsData.map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </section >
    </div >
  );
};

export default CV; 