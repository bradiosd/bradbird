import React from "react";
import PortfolioItem from "../components/PortfolioItem";

const Home: React.FC = () => {
  const portfolioItems = [
    {
      title: "Project 1",
      description: "A brief description of your first project",
      image: "placeholder1.jpg",
      tags: ["React", "TypeScript", "Node.js"],
      link: "https://github.com/yourusername/project1"
    },
    {
      title: "Project 2",
      description: "A brief description of your second project",
      image: "placeholder2.jpg",
      tags: ["Python", "Django", "PostgreSQL"],
      link: "https://github.com/yourusername/project2"
    },
    {
      title: "Project 3",
      description: "A brief description of your third project",
      image: "placeholder3.jpg",
      tags: ["JavaScript", "Vue.js", "Firebase"],
      link: "https://github.com/yourusername/project3"
    },
  ];

  return (
    <div className="home-page">
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            tags={item.tags}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
