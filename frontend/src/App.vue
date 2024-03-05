<script setup lang="ts">
import { ref, onMounted } from 'vue';

import type { User, UserData } from '@/entities';
import { useUserRepository } from '@/repositories';

import UserForm from '@/components/UserForm.vue';
import UserTable from '@/components/UserTable.vue';

const userRepository = useUserRepository();

const users = ref<User[]>([]);

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

onMounted(getUsers);
</script>

<template>
  <div class="app">
    <div class="container">
      <user-form @submit="addUser" />
      <user-table :users="users" />
    </div>
  </div>
</template>

<style scoped>
.app {
  padding: 10vh 1rem 1rem 1rem;
}

.container {
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}
</style>
