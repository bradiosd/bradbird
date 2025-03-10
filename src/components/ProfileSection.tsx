import React from 'react';
import { GB } from 'country-flag-icons/react/3x2';

interface ProfileSectionProps {
  name: string;
  location: string;
  description: string;
  imageUrl?: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  name,
  location,
  description,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-48 h-48 mb-4 overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-700">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {name}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-3 flex items-center gap-2">
        <GB className="w-4 h-4" /> {location}
      </p>
      <p className="text-gray-700 dark:text-gray-200 text-center">
        {description}
      </p>
    </div>
  );
};

export default ProfileSection;
