import { env } from '../support/env';

export const users = {
  nonExistent: {
    email: 'doesnotexist_12345@example.com',
    password: 'SomePassword@123',
  },

  incorrectPassword: {
    email: env.validUser.email,
    password: 'WrongPassword@123',
  },

  validUser: {
    email: env.validUser.email,
    password: env.validUser.password
  }
};
