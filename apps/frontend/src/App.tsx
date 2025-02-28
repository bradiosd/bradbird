import React from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import { ThemeProvider } from './providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Home />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
