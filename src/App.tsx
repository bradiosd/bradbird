import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Portfolio from './pages/Portfolio';
import { ThemeProvider } from './providers/ThemeProvider';
import { SkillFilterProvider } from './providers/SkillFilterProvider';
import Home from './pages/Home';
import { initializeGoogleAnalytics, pageView } from './lib/analytics';
import { config } from './config';
import CV from './pages/CV';

// Analytics wrapper component to handle page views
const AnalyticsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    pageView(location.pathname);
  }, [location]);

  return <>{children}</>;
};

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    if (config.analytics.measurementId) {
      initializeGoogleAnalytics(config.analytics.measurementId);
    }
  }, []);

  return (
    <ThemeProvider>
      <SkillFilterProvider>
        <BrowserRouter>
          <AnalyticsWrapper>
            <MainLayout>
              <Routes>
                {/* <Route path="/home" element={<Home />} /> */}
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/" element={<Navigate to="/portfolio" replace />} />
              </Routes>
            </MainLayout>
          </AnalyticsWrapper>
        </BrowserRouter>
      </SkillFilterProvider>
    </ThemeProvider>
  );
}

export default App;
