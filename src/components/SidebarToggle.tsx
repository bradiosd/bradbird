import React from 'react';
import { useSidebar } from '../layouts/MainLayout';

interface SidebarToggleProps {
  className?: string;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ className = '' }) => {
  const { hideSidebar, setHideSidebar } = useSidebar();

  return (
    <button
      onClick={() => setHideSidebar(!hideSidebar)}
      className={`hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white ${className}`}
      title={hideSidebar ? "Show sidebar" : "Hide sidebar"}
    >
      {hideSidebar ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      )}
    </button>
  );
};

export default SidebarToggle; 