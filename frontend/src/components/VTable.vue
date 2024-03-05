<script setup lang="ts">
type Column = {
  name: string;
  label: string;
}

type Row = Record<string, string | number>;

type Props = {
  columns: Column[];
  rows: Row[];
  rowKey: string;
};

defineProps<Props>();
</script>

<template>
  <table class="v-table">
    <thead>
      <tr>
        <th
          v-for="column of columns"
          :key="column.name"
        >
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row of rows"
        :key="row[rowKey]"
      >
        <td
          v-for="column of columns"
          :key="column.name"
        >
          {{ row[column.name] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.v-table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.v-table td,
.v-table th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.v-table tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
