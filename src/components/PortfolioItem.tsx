import React from 'react';
import { useTheme } from '../providers/ThemeProvider';
import { Div } from "./ui/moving-border";
import { ExternalLink } from 'lucide-react';

interface ImageConfig {
  path: string;
  position: {
    x: number;
    y: number;
    scale: number;
  };
}

interface PortfolioItemProps {
  title: string;
  description: string;
  images?: {
    light: ImageConfig;
    dark: ImageConfig;
  };
  tags: string[];
  link?: string;
  date: string;
  jobTitle?: string;
  highlightedSkills?: string[];
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  description,
  images,
  tags,
  link,
  jobTitle,
  date,
  highlightedSkills = [],
}) => {
  const { theme } = useTheme();
  const currentImage = images ? (theme === 'light' ? images.light : images.dark) : undefined;

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const content = (
    <>
      <div className="relative w-full h-48 overflow-hidden rounded-lg bg-white dark:bg-gray-800/50">
        {currentImage?.path ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={currentImage.path}
              alt={title}
              className="max-w-full max-h-full object-contain"
              style={{
                transform: `scale(${currentImage.position.scale})`,
                transformOrigin: 'center',
              }}
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400 dark:text-gray-500">No image</span>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        {link && (
          <button
            onClick={handleLinkClick}
            className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            aria-label="Visit link"
          >
            <ExternalLink size={18} />
          </button>
        )}
      </div>
      {jobTitle && (
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{jobTitle}</p>
      )}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{date}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    </>
  );

  return (
    <div className="rounded-xl">
      {content}
    </div>
  );
};

export default PortfolioItem;
