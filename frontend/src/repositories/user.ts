import type { User, UserData } from '@/entities';

export const useUserRepository = () => {
  const getUsers = async (): Promise<User[]> => {
    const response = await fetch('http://localhost:3000/users');
    const { users } = await response.json();

    return users;
  };

  const createUser = async (data: UserData): Promise<User> => {
    const response = await fetch('http://localhost:3000/users', {
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
