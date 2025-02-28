import React from 'react';

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
      <div className="w-32 h-32 mb-4 overflow-hidden rounded-full">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{name}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-3">{location}</p>
      <p className="text-gray-700 dark:text-gray-200 text-center">{description}</p>
    </div>
  );
};

export default ProfileSection; 