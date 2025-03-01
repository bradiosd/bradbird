import React from 'react';
import { useTheme } from '../providers/ThemeProvider';
import { Div } from "./ui/moving-border";

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
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  description,
  images,
  tags,
  link,
  jobTitle,
  date,
}) => {
  const { theme } = useTheme();
  const currentImage = images ? (theme === 'light' ? images.light : images.dark) : undefined;

  const content = (
    <>
      <div className="relative w-full h-48 overflow-hidden rounded-lg bg-gray-800/50 dark:bg-gray-800/50">
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
      <h3 className="mt-4 text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      {jobTitle && (
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{jobTitle}</p>
      )}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{date}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-full text-gray-600 dark:text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  return link ? (
    <a
      href={link}
      className="block p-4 rounded-xl hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  ) : (
    <div className="p-6 rounded-xl">{content}</div>
  );
};

export default PortfolioItem;
