import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Portfolio from './pages/Portfolio';
import { ThemeProvider } from './providers/ThemeProvider';
import Home from './pages/Home';
import { initializeGoogleAnalytics, pageView } from './lib/analytics';
import { config } from './config';

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
      <BrowserRouter>
        <AnalyticsWrapper>
          <MainLayout>
            <Routes>
              {/* Root route redirects to portfolio */}
              <Route path="/" element={<Navigate to="/portfolio" replace />} />
              {/* <Route path="/home" element={<Home />} /> */}
              <Route path="/portfolio" element={<Portfolio />} />
              {/* Catch-all route redirects to root */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </MainLayout>
        </AnalyticsWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
