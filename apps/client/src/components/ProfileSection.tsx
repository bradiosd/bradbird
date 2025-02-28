import React from 'react';
import profileImage from '../assets/bradiosd.jpeg';

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
  imageUrl = profileImage
}) => {
  return (
    <div className="profile-section">
      <div className="profile-image">
        <img src={imageUrl} alt={name} />
      </div>
      <h2>{name}</h2>
      <p className="location">{location}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default ProfileSection; 