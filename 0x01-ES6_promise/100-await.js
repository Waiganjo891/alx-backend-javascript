// File: 100-await.js

import { uploadPhoto, createUser } from './utils';

export async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return {
      photo: photo,
      user: user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
