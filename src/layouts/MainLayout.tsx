import React, { useState, createContext, useContext } from 'react';
import ProfileSection from '../components/ProfileSection';
import ThemeToggle from '../components/ThemeToggle';
import SubscribeWidget from '../components/SubscribeWidget';
import SocialLinks from '../components/SocialLinks';
import { Link } from 'react-router-dom';

// Create a context for sidebar visibility
export const SidebarContext = createContext({
  hideSidebar: false,
  setHideSidebar: (value: boolean) => { }
});

// Custom hook to use the sidebar context
export const useSidebar = () => useContext(SidebarContext);

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <SidebarContext.Provider value={{ hideSidebar, setHideSidebar }}>
      <div className="min-h-screen relative">
        {/* Video Background */}
        <div className="fixed inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isVideoPlaying ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <source src="/videos/backgroundvideo.mp4" type="video/mp4" />
            {/* <source src="/videos/boyusingoldcomputer.mp4" type="video/mp4" />
            <source src="/videos/boywithgameboy.mp4" type="video/mp4" /> */}
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gray-100/95 dark:bg-gray-900/95" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <nav className="border-b border-gray-200 dark:border-gray-700 bg-gray-50/90 dark:bg-gray-900/90">
            <div className="max-w-7xl mx-auto px-4">
              <div className="h-16 flex items-center justify-between">
                {/* Navigation Links */}
                <div className="flex items-center space-x-4">
                  <Link to="/" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium">
                    Home
                  </Link>
                  <Link to="/portfolio" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium">
                    Portfolio
                  </Link>
                  {/* <Link to="/cv" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium">
                    CV
                  </Link> */}
                </div>

                {/* Controls */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={toggleVideo}
                    className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    title={isVideoPlaying ? "Pause background video" : "Play background video"}
                  >
                    {isVideoPlaying ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
                      </svg>
                    )}
                  </button>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </nav>

          <div className="max-w-7xl mx-auto px-4 py-8">
            {hideSidebar ? (
              // Full-width layout without sidebar
              <main className="w-full">{children}</main>
            ) : (
              // Regular layout with sidebar
              <div className="grid grid-cols-7">
                {/* Left Sidebar */}
                <aside className="space-y-8 col-span-7 md:col-span-3 lg:col-span-2 gap-8">
                  <ProfileSection
                    name="Brad Bird"
                    location="London, UK"
                    description="Software engineering multi-tool. SaaS startup guru. Keen interest in cybersecurity. Blockchain enthusiast. AI lover."
                    imageUrl="/bradiosd.jpeg"
                  />

                  <SubscribeWidget />

                  <SocialLinks />
                </aside>

                {/* Main Content */}
                <main className="col-span-7 md:col-span-4 lg:col-span-5">{children}</main>
              </div>
            )}
          </div>

          <footer className="bg-gray-800/90 text-white py-4">
            <div className="max-w-7xl mx-auto text-center py-4">
              <p>&copy; 2024-{new Date().getFullYear()}. Developed by Brad Bird. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </SidebarContext.Provider>
  );
};

export default MainLayout;
