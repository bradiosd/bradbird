import React, { useEffect, useRef, useState } from 'react';
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
  const cvRef = useRef<HTMLDivElement>(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [hiddenItems, setHiddenItems] = useState<string[]>([]);
  // Add state for editable fields
  const [editableFields, setEditableFields] = useState<{ [key: string]: { title?: string, jobTitle?: string } }>({});
  const [currentlyEditing, setCurrentlyEditing] = useState<{ id: string, field: 'title' | 'jobTitle' } | null>(null);
  // Add state for the floating widget
  const [isWidgetExpanded, setIsWidgetExpanded] = useState(true);

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

  // Function to toggle item visibility
  const toggleItemVisibility = (itemTitle: string) => {
    setHiddenItems(prev =>
      prev.includes(itemTitle)
        ? prev.filter(title => title !== itemTitle)
        : [...prev, itemTitle]
    );
  };

  // Filter work experience based on selected skills and hidden items
  const filteredWorkExperience = workExperience
    .filter(job => !hiddenItems.includes(job.title)) // Filter out hidden items
    .filter(job =>
      selectedSkills.length > 0
        ? job.tags && selectedSkills.some(skill => job.tags.includes(skill))
        : true
    );

  // Get hidden work experience items
  const hiddenWorkExperience = workExperience.filter(job =>
    hiddenItems.includes(job.title)
  );

  // Function to handle editing of job titles and job subtitles
  const handleEdit = (jobId: string, field: 'title' | 'jobTitle', value: string) => {
    setEditableFields(prev => ({
      ...prev,
      [jobId]: {
        ...prev[jobId],
        [field]: value
      }
    }));
  };

  // Function to start editing a field
  const startEditing = (jobId: string, field: 'title' | 'jobTitle') => {
    setCurrentlyEditing({ id: jobId, field });
  };

  // Function to stop editing a field
  const stopEditing = () => {
    setCurrentlyEditing(null);
  };

  // Function to get the display value for a field (edited or original)
  const getDisplayValue = (job: any, field: 'title' | 'jobTitle') => {
    const jobId = `${job.title}-${job.date}`;
    return editableFields[jobId]?.[field] !== undefined ? editableFields[jobId][field] : job[field];
  };

  // Function to handle PDF generation using browser's native print
  const generatePDF = () => {
    if (!cvRef.current) return;

    setIsGeneratingPDF(true);

    // Store the original dark mode state
    const htmlElement = document.documentElement;
    const wasDarkMode = htmlElement.classList.contains('dark');

    // Force light mode for PDF generation
    if (wasDarkMode) {
      htmlElement.classList.remove('dark');
    }

    // Hide all elements with the hide-in-pdf class
    const hideInPdfElements = document.querySelectorAll('.hide-in-pdf');
    const hideInPdfStyles: { [key: string]: string } = {};

    hideInPdfElements.forEach((element, i) => {
      hideInPdfStyles[`hide-${i}`] = element.getAttribute('style') || '';
      element.setAttribute('style', 'display: none !important;');
    });

    // Add print styles to body
    const printStyles = document.createElement('style');
    printStyles.innerHTML = `
      @media print {
        body * { visibility: hidden; }
        .cv-content, .cv-content * { visibility: visible; }
        .cv-content { position: absolute; left: 0; top: 0; width: 100%; }
        .hide-in-pdf { display: none !important; }
        
        /* Improve print layout */
        header { page-break-after: avoid; }
        .space-y-8 > div { page-break-inside: avoid; break-inside: avoid; }
        
        /* Allow work experience to flow naturally after summary */
        section:first-of-type { page-break-before: avoid; }
        
        /* Ensure proper margins */
        @page { margin: 0.5in; }
        
        /* Fix colors for print */
        .text-gray-900 { color: #111827 !important; }
        .text-gray-600 { color: #4b5563 !important; }
        .text-gray-500 { color: #6b7280 !important; }
        
        /* Skills badges styling for print */
        .skills-badge {
          border: 1px solid #d1d5db !important;
          background-color: #f9fafb !important;
          color: #374151 !important;
        }
      }
    `;
    document.head.appendChild(printStyles);

    // Add cv-content class to the main content
    cvRef.current.classList.add('cv-content');

    // Trigger browser's print dialog
    setTimeout(() => {
      window.print();

      // Cleanup after print dialog
      setTimeout(() => {
        // Remove print styles
        document.head.removeChild(printStyles);

        // Remove cv-content class
        cvRef.current?.classList.remove('cv-content');

        // Restore dark mode if it was active before
        if (wasDarkMode) {
          htmlElement.classList.add('dark');
        }

        // Restore hide-in-pdf elements
        hideInPdfElements.forEach((element, i) => {
          element.setAttribute('style', hideInPdfStyles[`hide-${i}`]);
        });

        setIsGeneratingPDF(false);
      }, 100);
    }, 100);
  };

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
      {/* Floating Widget for Tag Cloud and Hidden Items */}
      <div className="fixed right-4 top-20 z-50 hide-in-pdf">
        <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 overflow-hidden ${isWidgetExpanded ? 'max-w-xs w-64' : 'max-w-[40px] w-10'}`}>
          {/* Widget Header with Toggle Button */}
          <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-700 cursor-pointer" onClick={() => setIsWidgetExpanded(!isWidgetExpanded)}>
            {isWidgetExpanded && <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Filters & Hidden Items</h3>}
            <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex-shrink-0">
              {isWidgetExpanded ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Widget Content */}
          {isWidgetExpanded && (
            <div className="p-3 max-h-[70vh] overflow-y-auto">
              {/* Skills Filter */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Skills Filter</h4>
                <div className="flex flex-wrap gap-2">
                  {allSkills.map((skill, index) => (
                    <button
                      key={index}
                      onClick={() => toggleSkill(skill)}
                      className={`px-3 py-1 rounded-full text-xs transition-colors duration-200 ${isSkillSelected(skill)
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
                      className="px-3 py-1 rounded-full text-xs bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-800/30 transition-colors duration-200"
                    >
                      Clear All Filters
                    </button>
                  )}
                </div>
              </div>

              {/* Hidden Items Section */}
              {hiddenItems.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Hidden Items</h4>
                  <div className="flex flex-wrap gap-2">
                    {hiddenWorkExperience.map((job, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        <span>
                          {currentlyEditing?.id === `${job.title}-${job.date}` && currentlyEditing?.field === 'title' ? (
                            <input
                              type="text"
                              value={editableFields[`${job.title}-${job.date}`]?.title || job.title}
                              onChange={(e) => handleEdit(`${job.title}-${job.date}`, 'title', e.target.value)}
                              onBlur={stopEditing}
                              autoFocus
                              className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 w-full"
                            />
                          ) : (
                            <>
                              {getDisplayValue(job, 'title')}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  startEditing(`${job.title}-${job.date}`, 'title');
                                }}
                                className="ml-1 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 hide-in-pdf"
                                title="Edit title"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                              </button>
                            </>
                          )}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleItemVisibility(job.title);
                          }}
                          className="ml-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hide-in-pdf"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => setHiddenItems([])}
                      className="px-3 py-1.5 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full text-sm flex items-center gap-1 hide-in-pdf"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                      Clear All
                    </button>
                  </div>
                </div>
              )}

              {/* Download PDF Button */}
              <div className="mt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    generatePDF();
                  }}
                  disabled={isGeneratingPDF}
                  className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm transition-colors duration-200 ${isGeneratingPDF
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                >
                  {isGeneratingPDF ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating PDF...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                      Download PDF
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CV Content - Add ref to the main content div */}
      <div ref={cvRef}>
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 contact-info-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span>{personalData.location}</span>
                </div>

                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 contact-info-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <a href={`mailto:${personalData.email}`} className="hover:text-blue-500 dark:hover:text-blue-400">
                    {personalData.email}
                  </a>
                </div>

                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 contact-info-icon">
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
        <section className="mb-12">
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
              <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-4 relative">
                <div className="md:col-span-1 text-gray-500 dark:text-gray-400 mt-1">
                  <div className="text-sm">{job.date}</div>
                </div>

                <div className="md:col-span-5">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {currentlyEditing?.id === `${job.title}-${job.date}` && currentlyEditing?.field === 'title' ? (
                        <input
                          type="text"
                          value={editableFields[`${job.title}-${job.date}`]?.title || job.title}
                          onChange={(e) => handleEdit(`${job.title}-${job.date}`, 'title', e.target.value)}
                          onBlur={stopEditing}
                          autoFocus
                          className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 w-full"
                        />
                      ) : (
                        <>
                          {getDisplayValue(job, 'title')}
                          <button
                            onClick={() => startEditing(`${job.title}-${job.date}`, 'title')}
                            className="ml-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 hide-in-pdf"
                            title="Edit title"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                          </button>
                        </>
                      )}
                      {job.jobTitle && (
                        <span className="ml-2 font-normal text-gray-600 dark:text-gray-400">
                          — {currentlyEditing?.id === `${job.title}-${job.date}` && currentlyEditing?.field === 'jobTitle' ? (
                            <input
                              type="text"
                              value={editableFields[`${job.title}-${job.date}`]?.jobTitle || job.jobTitle}
                              onChange={(e) => handleEdit(`${job.title}-${job.date}`, 'jobTitle', e.target.value)}
                              onBlur={stopEditing}
                              autoFocus
                              className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500"
                            />
                          ) : (
                            <>
                              {getDisplayValue(job, 'jobTitle')}
                              {job.jobTitle && (
                                <button
                                  onClick={() => startEditing(`${job.title}-${job.date}`, 'jobTitle')}
                                  className="ml-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 hide-in-pdf"
                                  title="Edit job title"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                  </svg>
                                </button>
                              )}
                            </>
                          )}
                        </span>
                      )}
                    </h3>
                    <button
                      onClick={() => toggleItemVisibility(job.title)}
                      className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors hide-in-pdf"
                      title="Hide this item"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    </button>
                  </div>

                  <p className="my-2 text-gray-600 dark:text-gray-400">
                    {job.description}
                  </p>

                  {job.tags && job.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {job.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-2 py-1 text-xs rounded-full flex items-center justify-center skills-badge ${selectedSkills.includes(tag)
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
        </section>

        {/* Education */}
        <section className="mb-12">
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
        </section>

        {/* Certifications */}
        <section className="mb-12">
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
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Programming Languages</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {skillsData.languages.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 rounded-full text-sm flex items-center justify-center skills-badge ${isSkillSelected(skill)
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
              <div className="flex flex-wrap gap-2 mt-2">
                {skillsData.frameworks.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 rounded-full text-sm flex items-center justify-center skills-badge ${isSkillSelected(skill)
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
              <div className="flex flex-wrap gap-2 mt-2">
                {skillsData.tools.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 rounded-full text-sm flex items-center justify-center skills-badge ${isSkillSelected(skill)
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
              <div className="flex flex-wrap gap-2 mt-2">
                {skillsData.databases.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 rounded-full text-sm flex items-center justify-center skills-badge ${isSkillSelected(skill)
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
              <div className="flex flex-wrap gap-2 mt-2">
                {skillsData.cloud.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 rounded-full text-sm flex items-center justify-center skills-badge ${isSkillSelected(skill)
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
              <div className="flex flex-wrap gap-2 mt-2">
                {skillsData.testing.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 rounded-full text-sm flex items-center justify-center skills-badge ${isSkillSelected(skill)
                      ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-semibold'
                      : 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                      }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-3">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Other Technical Skills</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {skillsData.other.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 rounded-full text-sm flex items-center justify-center skills-badge ${isSkillSelected(skill)
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
              <div className="flex flex-wrap gap-2 mt-2">
                {skillsData.soft.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm flex items-center justify-center skills-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interests */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            Interests
          </h2>

          <div className="flex flex-wrap gap-2 mt-2">
            {interestsData.map((interest, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm flex items-center justify-center skills-badge"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CV; 