import React from 'react';
import ProfileSection from '../components/ProfileSection';
import ThemeToggle from '../components/ThemeToggle';
import SubscribeWidget from '../components/SubscribeWidget';
import SocialLinks from '../components/SocialLinks';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          {/* TODO: Add theme toggle back in once we have light images */}
          <div className="h-16 flex items-center justify-end">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className=" grid grid-cols-7">
          {/* Left Sidebar */}
          <aside className="space-y-8 col-span-7 md:col-span-3 lg:col-span-2 gap-8">
            <ProfileSection
              name="Brad Bird"
              location="London, UK"
              description="Software engineering multi-tool. SaaS startup guru. Keen interest in cybersecurity. Blockchain enthusiast. AI lover."
              imageUrl="./bradiosd.jpeg"
            />

            <SubscribeWidget />

            <SocialLinks />
          </aside>

          {/* Main Content */}
          <main className="col-span-7 md:col-span-4 lg:col-span-5">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
