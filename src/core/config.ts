import dotenv from 'dotenv';

// parse .env
dotenv.config();

const config = (name: string): string => {
  return process.env[name] || '';
};

export default config;
