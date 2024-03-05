<script setup lang="ts">
import type { User } from '@/entities';
import VTable from '@/components/VTable.vue';

type Props = {
  users: User[];
};

defineProps<Props>();

const columns = [
  {
    name: 'id',
    label: 'Id',
  },
  {
    name: 'name',
    label: 'Name',
  },
  {
    name: 'age',
    label: 'Age',
  },
];
</script>

<template>
  <v-table
    :columns="columns"
    :rows="users as any[]"
    row-key="id"
  />
</template>
