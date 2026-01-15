import dotenv from 'dotenv';

dotenv.config();

// added defaults in case someone doesn't want to add .env, should not be done in real world projects
export const env = {
  validUser: {
    email: process.env.VALID_USER_EMAIL ?? 'test@awaish.com',
    password: process.env.VALID_USER_PASSWORD ?? 'xyzxyzxyz',
  },
  baseUrl: process.env.BASE_URL ?? 'https://demowebshop.tricentis.com',
  headless: !process.env.HEADLESS || process.env.HEADLESS !== 'false'
};
