import { ref } from 'vue';

import type { User, UserData } from '@/entities';
import { useUserRepository } from '@/repositories';

const users = ref<User[]>([]);

export const useUsersStore = () => {
  const userRepository = useUserRepository();

  const getUsers = async () => {
    try {
      users.value = await userRepository.getUsers();
    } catch (error) {
      users.value = [];
      console.error(error);
    }
  };

  const addUser = async (data: UserData) => {
    try {
      const user = await userRepository.createUser(data);
      users.value.push(user);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    users,
    getUsers,
    addUser,
  };
};
