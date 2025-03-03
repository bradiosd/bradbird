declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize dataLayer
window.dataLayer = window.dataLayer || [];

// Define gtag function
function gtag(...args: any[]) {
  window.dataLayer.push(arguments);
}

export const initializeGoogleAnalytics = (measurementId: string) => {
  // Create script elements
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

  // Initialize gtag
  gtag('js', new Date());
  gtag('config', measurementId);

  // Add script to document
  document.head.appendChild(gtagScript);
};

// Utility function for page views
export const pageView = (path: string) => {
  window.gtag?.('event', 'page_view', {
    page_path: path,
  });
};

// Add gtag to window
window.gtag = gtag;