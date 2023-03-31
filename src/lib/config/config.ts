type ReactEnv = {
  BASE_URL: string;
  API_KEY: string;
};

export const APP_CONFIG: ReactEnv = {
  BASE_URL: process.env.BASE_URL || '',
  API_KEY: process.env.API_KEY || ''
};
