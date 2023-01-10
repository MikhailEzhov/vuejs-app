<template>
  <v-table v-if="tasks.length > 0">
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
          <v-btn
            size="x-small"
            icon="mdi-pencil"
            color="info"
            @click="openTask(task)"
          ></v-btn>
        </td>
      </tr>
    </tbody>

    <v-dialog v-model="visibilityModal" persistent
      ><edit-modal
        :task="task"
        @close="closeModal"
        @changeTitle="changeTaskTitle"
        @changeCompleted="changeTaskCompleted"
        @saveTask="$emit('saveTask', task)"
        @removeTask="$emit('removeTask', task)"
    /></v-dialog>
  </v-table>

  <div v-else>No Tasks</div>
</template>

<script>
import EditModal from "@/components/EditModal.vue";
export default {
  name: "TaskTable",

  components: {
    EditModal,
  },

  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      visibilityModal: false,
      task: {},
    };
  },

  methods: {
    openTask: function (currentTask) {
      this.task = currentTask;
      this.visibilityModal = true;
    },
    closeModal: function () {
      this.visibilityModal = false;
    },
    changeTaskTitle: function (title) {
      this.task = { ...this.task, title };
    },
    changeTaskCompleted: function (completed) {
      this.task = { ...this.task, completed };
    },
  },
};
</script>
