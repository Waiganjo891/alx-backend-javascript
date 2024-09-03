// File: 3-all.js

import { uploadPhoto, createUser } from './utils.js';

export function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const { body } = results[0];
      const { firstName, lastName } = results[1];

      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
