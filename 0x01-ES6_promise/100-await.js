// File: 100-await.js

import { uploadPhoto, createUser } from './utils';

export async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}
