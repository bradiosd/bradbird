import React from 'react';
import { FaYoutube, FaInstagram, FaReddit, FaGithub, FaTwitter, FaGlobe, FaFacebook, FaLinkedin, FaGooglePlay } from 'react-icons/fa';
import { FaOdysee } from "react-icons/fa6";

const SocialLinks: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Personal Links */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          BradioSD Links
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <a
            href="https://youtube.com/channel/UCXJJKlrwW3ICy7CptFFoV4g"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="w-7 h-7 text-red-600" />
            <span>YouTube</span>
          </a>
          <a
            href="https://instagram.com/bradiosd"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-7 h-7 text-pink-600" />
            <span>Instagram</span>
          </a>
          <a
            href="https://reddit.com/r/BradioSD"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaReddit className="w-7 h-7 text-orange-600" />
            <span>Reddit</span>
          </a>
          <a
            href="https://github.com/bradiosd"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-7 h-7" />
            <span>GitHub</span>
          </a>
          <a
            href="https://twitter.com/bradiosd"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="w-7 h-7 text-blue-400" />
            <span>Twitter</span>
          </a>
          <a
            href="https://bradio.io"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe className="w-7 h-7 text-green-600" />
            <span>Website</span>
          </a>
          <a
            href="https://odysee.com/@BradioSD:9"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaOdysee className="w-7 h-7 text-purple-600" />
            <span>Odysee</span>
          </a>
        </div>
      </div>

      {/* Company Links */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          128 Bit Studios Links
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <a
            href="https://128bitstudios.co.uk"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe className="w-7 h-7 text-green-600" />
            <span>Website</span>
          </a>
          <a
            href="https://www.instagram.com/128bitstudios"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-7 h-7 text-pink-600" />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/128bitstudios"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-7 h-7 text-blue-600" />
            <span>Facebook</span>
          </a>
          <a
            href="https://twitter.com/128bitstudios"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="w-7 h-7 text-blue-400" />
            <span>Twitter</span>
          </a>
          <a
            href="https://github.com/128BitStudios"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-7 h-7" />
            <span>GitHub</span>
          </a>
          <a
            href="https://play.google.com/store/apps/dev?id=7131769730608068753"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGooglePlay className="w-7 h-7 text-green-500" />
            <span>Google Play Store</span>
          </a>
          <a
            href="https://www.linkedin.com/company/128bitstudios"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-7 h-7 text-blue-700" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks; 