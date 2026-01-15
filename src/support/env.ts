import dotenv from 'dotenv';

dotenv.config();

export const env = {
  validUser: {
    email: process.env.VALID_USER_EMAIL!,
    password: process.env.VALID_USER_PASSWORD!,
  },
  baseUrl: process.env.BASE_URL,
  headless: !process.env.HEADLESS || process.env.HEADLESS !== 'false'
};
