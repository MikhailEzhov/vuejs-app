<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Title</th>
        <th class="text-left">Completed</th>
        <th class="text-left">change</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="task in tasks" :key="task.id">
        <td>{{ task.title }}</td>
        <td v-if="task.completed" class="text-center">
          <v-icon icon="mdi-check" color="green" />
        </td>
        <td v-else class="text-center">
          <v-icon icon="mdi-minus" color="red" />
        </td>
        <td class="text-center">
          <v-btn size="x-small" icon="mdi-pencil" color="info"></v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  name: "TaskTable",

  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>
