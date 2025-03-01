import React from 'react';
import { Div } from './ui/moving-border';

const SubscribeWidget: React.FC = () => {
  return (
    <div className='m-5'>
      <Div
        borderRadius="10px"
        className="dark:bg-slate-900 bg-white"
        duration={2000}
        hoverable={true}
      >
        <div className="w-full p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-8 text-center">
            <img src="/newsletter.png" alt="Brad's Weekly Newsletter" className="w-24 h-24 mx-auto" />
          </h3>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-600 rounded-md bg-transparent text-gray-900 dark:text-white text-center focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Div>
    </div>
  );
};

export default SubscribeWidget; 