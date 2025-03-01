declare global {
  interface Window {
    extended: {
      REACT_APP_API_URL: string;
      REACT_APP_DEFAULT_THEME: string;
      REACT_APP_STRIPE_PUBLIC_KEY: string;
      REACT_APP_STRIPE_PRODUCT_ID: string;
      REACT_APP_STRIPE_BASIC_PRICE_ID: string;
      REACT_APP_STRIPE_INTERMEDIATE_PRICE_ID: string;
      REACT_APP_STRIPE_COMPREHENSIVE_PRICE_ID: string;
      REACT_APP_STRIPE_ULTIMATE_PRICE_ID: string;
      REACT_APP_GA_MEASUREMENT_ID: string;
      [key: string]: string;
    };
    gtag: (...args: any[]) => void;
  }
}

// Helper function to get config value based on environment
const getConfigValue = (
  envVar: string,
  windowVar: string | undefined,
  defaultValue: string = ''
) => {
  return process.env.NODE_ENV === 'development'
    ? process.env[envVar] || defaultValue
    : windowVar || defaultValue;
};

export const config = {
  apiUrl: getConfigValue(
    'REACT_APP_API_URL',
    window.extended?.REACT_APP_API_URL,
    'http://localhost:4000/api'
  ),
  defaultTheme: getConfigValue(
    'REACT_APP_DEFAULT_THEME',
    window.extended?.REACT_APP_DEFAULT_THEME,
    'dark'
  ),
  stripe: {
    publicKey: getConfigValue(
      'REACT_APP_STRIPE_PUBLIC_KEY',
      window.extended?.REACT_APP_STRIPE_PUBLIC_KEY
    ),
    productId: getConfigValue(
      'REACT_APP_STRIPE_PRODUCT_ID',
      window.extended?.REACT_APP_STRIPE_PRODUCT_ID
    ),
    priceIds: {
      basic: getConfigValue(
        'REACT_APP_STRIPE_BASIC_PRICE_ID',
        window.extended?.REACT_APP_STRIPE_BASIC_PRICE_ID
      ),
      intermediate: getConfigValue(
        'REACT_APP_STRIPE_INTERMEDIATE_PRICE_ID',
        window.extended?.REACT_APP_STRIPE_INTERMEDIATE_PRICE_ID
      ),
      comprehensive: getConfigValue(
        'REACT_APP_STRIPE_COMPREHENSIVE_PRICE_ID',
        window.extended?.REACT_APP_STRIPE_COMPREHENSIVE_PRICE_ID
      ),
      ultimate: getConfigValue(
        'REACT_APP_STRIPE_ULTIMATE_PRICE_ID',
        window.extended?.REACT_APP_STRIPE_ULTIMATE_PRICE_ID
      ),
    },
  },
  analytics: {
    measurementId: getConfigValue(
      'REACT_APP_GA_MEASUREMENT_ID',
      window.extended?.REACT_APP_GA_MEASUREMENT_ID,
      'G-14NE7GRKGW'
    ),
  },
};

export default config;
