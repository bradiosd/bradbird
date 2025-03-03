import React from 'react';
import { FaYoutube, FaInstagram, FaReddit, FaGithub, FaGlobe, FaFacebook, FaLinkedin, FaGooglePlay } from 'react-icons/fa';
import { FaOdysee, FaXTwitter } from "react-icons/fa6";

const socialLinks = {
  personal: [
    {
      title: 'YouTube',
      url: 'https://youtube.com/channel/UCXJJKlrwW3ICy7CptFFoV4g',
      icon: FaYoutube,
      color: 'text-red-600'
    },
    {
      title: 'Instagram',
      url: 'https://instagram.com/bradiosd',
      icon: FaInstagram,
      color: 'text-pink-600'
    },
    {
      title: 'Reddit',
      url: 'https://reddit.com/r/BradioSD',
      icon: FaReddit,
      color: 'text-orange-600'
    },
    {
      title: 'GitHub',
      url: 'https://github.com/bradiosd',
      icon: FaGithub,
      color: ''
    },
    {
      title: 'X',
      url: 'https://x.com/bradiosd',
      icon: FaXTwitter,
      color: 'text-gray-900 dark:text-white'
    },
    {
      title: 'Website',
      url: 'https://bradio.io',
      icon: FaGlobe,
      color: 'text-green-600'
    },
    {
      title: 'Odysee',
      url: 'https://odysee.com/@BradioSD:9',
      icon: FaOdysee,
      color: 'text-purple-600'
    }
  ],
  company: [
    {
      title: 'Website',
      url: 'https://128bitstudios.co.uk',
      icon: FaGlobe,
      color: 'text-green-600'
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/128bitstudios',
      icon: FaInstagram,
      color: 'text-pink-600'
    },
    {
      title: 'Facebook',
      url: 'https://www.facebook.com/128bitstudios',
      icon: FaFacebook,
      color: 'text-blue-600'
    },
    {
      title: 'X',
      url: 'https://x.com/128bitstudios',
      icon: FaXTwitter,
      color: 'text-gray-900 dark:text-white'
    },
    {
      title: 'GitHub',
      url: 'https://github.com/128BitStudios',
      icon: FaGithub,
      color: ''
    },
    {
      title: 'Google Play Store',
      url: 'https://play.google.com/store/apps/dev?id=7131769730608068753',
      icon: FaGooglePlay,
      color: 'text-green-500'
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/company/128bitstudios',
      icon: FaLinkedin,
      color: 'text-blue-700'
    }
  ]
};

const SocialLinks: React.FC = () => {
  const renderSection = (title: string, links: any[]) => (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-4 md:grid md:grid-cols-1 md:gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <link.icon className={`w-7 h-7 ${link.color}`} />
            <span className="hidden md:block">{link.title}</span>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-10 space-y-8">
      {renderSection('Brad Bird', socialLinks.personal)}
      {renderSection('128 Bit Studios', socialLinks.company)}
    </div>
  );
};

export default SocialLinks; 