import type { User, UserData } from '@/entities';

const API_URL = import.meta.env.VITE_API_URL;

export const useUserRepository = () => {
  const getUsers = async (): Promise<User[]> => {
    const response = await fetch(API_URL);
    const { users } = await response.json();

    return users;
  };

  const createUser = async (data: UserData): Promise<User> => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const { user } = await response.json();

    return user;
  };

  return {
    getUsers,
    createUser,
  };
};
