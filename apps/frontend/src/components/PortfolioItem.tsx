import React from 'react';

interface PortfolioItemProps {
    title: string;
    description: string;
    image?: string;
    tags: string[];
    link?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
    title,
    description,
    image,
    tags,
    link
}) => {
    const content = (
        <>
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg bg-gray-100/50 dark:bg-gray-800/50">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-400 dark:text-gray-500">No image</span>
                    </div>
                )}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
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
            className="block p-6 rounded-xl hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
        >
            {content}
        </a>
    ) : (
        <div className="p-6 rounded-xl">
            {content}
        </div>
    );
};

export default PortfolioItem; 