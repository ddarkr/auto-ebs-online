import dotenv from 'dotenv';

// parse .env
dotenv.config();

const config = (name: string): string | undefined => {
  return process.env[name] || undefined;
};

export default config;
