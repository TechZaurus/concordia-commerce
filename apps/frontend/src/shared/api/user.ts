import { up } from 'up-fetch';

const api = up(fetch, () => ({
  baseUrl: '/api',
}));

export interface User {
  id: string;
  name: string;
  surname: string;
  profileImageUrl: string;
}

export const getCurrentUser = async (): Promise<User> => {
  return (await api('/user/current')) as User;
};
