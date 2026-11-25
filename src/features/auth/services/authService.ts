import type { User } from '../types';

export const loginApi = async (email: string, password: string) => {
  return new Promise<User>((resolve, reject) => {
    setTimeout(() => {
      if (email && password.length >= 6) {
        resolve({
          id: '1',
          email,
          name: 'John Doe',
        });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 1000);
  });
};
