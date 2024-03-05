<script setup lang="ts">
import { ref } from 'vue';

import type { UserData } from '@/entities';

const name = ref<string>('');
const age = ref<string>('');

type Emits = {
  (event: 'submit', payload: UserData): void;
}

const emit = defineEmits<Emits>();

const resetForm = () => {
  name.value = '';
  age.value = '';
};

const handleSubmit = () => {
  emit('submit', {
    name: name.value,
    age: Number.parseInt(age.value, 10),
  });

  resetForm();
};
</script>

<template>
  <form
    class="user-form"
    @submit.prevent="handleSubmit"
  >
    <input
      type="text"
      placeholder="Enter your name"
      v-model.trim="name"
    />
    <input
      type="text"
      placeholder="Enter you age"
      v-model.trim="age"
    />
    <button type="submit">
      Submit
    </button>
  </form>
</template>

<style scoped>
.user-form {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.user-form input,
.user-form button {
  border: 1px solid #dddddd;
  padding: 8px;
}

.user-form input {
  outline: none;
}

.user-form button {
  cursor: pointer;
}
</style>
