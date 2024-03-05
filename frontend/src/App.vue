<script setup lang="ts">
import { onMounted } from 'vue';

import { useUsersStore } from '@/stores';
import { UserForm, UserTable } from '@/components';

const { users, getUsers, addUser } = useUsersStore();

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
