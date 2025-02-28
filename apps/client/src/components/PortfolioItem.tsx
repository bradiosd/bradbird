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
            <div className="portfolio-image">
                {image ? (
                    <img src={image} alt={title} />
                ) : (
                    <div className="image-placeholder"></div>
                )}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="tags">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
        </>
    );

    return link ? (
        <a href={link} className="portfolio-item">
            {content}
        </a>
    ) : (
        <div className="portfolio-item">
            {content}
        </div>
    );
};

export default PortfolioItem; 