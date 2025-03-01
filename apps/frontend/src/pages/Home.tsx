import React from 'react';
import { Timeline } from "../components/ui/timeline";

const Home: React.FC = () => {
  const timelineData = [
    {
      title: "Early Years",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            My journey began with a simple Game Boy, sparking my interest in technology and gaming.
          </p>
          <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
            <video
              autoPlay
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              onEnded={(e) => {
                e.currentTarget.currentTime = 0;
                e.currentTarget.play();
              }}
            >
              <source src="/videos/boywithgameboy.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      ),
    },
    {
      title: "First Computer",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            My first experience with computers opened up a whole new world of possibilities.
          </p>
          <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
            <video
              autoPlay
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              onEnded={(e) => {
                e.currentTarget.currentTime = 0;
                e.currentTarget.play();
              }}
            >
              <source src="/videos/boyusingoldcomputer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="px-10">
      <nav className="flex items-center space-x-2 py-4">
        <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">Home</a>
      </nav>
      <header className="py-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">My Story</h1>
      </header>
      <div className="w-full max-w-4xl mx-auto">
        <Timeline data={timelineData} />
      </div>
    </div>
  );
};

export default Home;
