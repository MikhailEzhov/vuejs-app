<template>
  <v-app>
    <v-main>
      <add-form @createTask="postTask" />

      <v-container>
        <v-row no-gutters>
          <v-col
            cols="12"
            class="border rounded-lg pa-5 bg-white d-flex align-center justify-center"
            ><div v-if="error">{{ error }}</div>
            <div v-else class="v-table">
              <my-loader v-if="loading" />
              <task-table v-else :tasks="tasks" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AddForm from "@/components/AddForm.vue";
import MyLoader from "@/components/MyLoader.vue";
import TaskTable from "@/components/TaskTable.vue";
import taskService from "@/services/taskService";

export default {
  name: "App",

  components: {
    AddForm,
    MyLoader,
    TaskTable,
  },

  data() {
    return {
      tasks: [],
      loading: true,
      error: null,
    };
  },

  mounted() {
    this.getAllTasks();
  },

  methods: {
    getAllTasks() {
      taskService
        .getAll()
        .then((res) => {
          this.tasks = res.data;
        })
        .catch((error) => {
          this.error = error.message;
        })
        .finally(() => (this.loading = false));
    },
    postTask(newTask) {
      this.loading = true;
      taskService
        .post(newTask)
        .then(() => {
          this.getAllTasks();
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
  },
};
</script>
