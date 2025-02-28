import React from "react";
import "../styles/MainLayout.css";
import ProfileSection from "../components/ProfileSection";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <nav className="top-nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="content-wrapper">
        <aside className="left-column">
          <ProfileSection
            name="Brad Bird"
            location="San Diego, CA"
            description="Software engineer and blockchain enthusiast passionate about building the future of technology."
          />

          <div className="newsletter-section">
            <h3>Subscribe to Newsletter</h3>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          <div className="social-links">
            <h3>Connect With Me</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">
                GitHub
              </a>
              <a href="#" className="social-icon">
                LinkedIn
              </a>
              <a href="#" className="social-icon">
                Twitter
              </a>
            </div>
          </div>
        </aside>

        <main className="right-column">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
