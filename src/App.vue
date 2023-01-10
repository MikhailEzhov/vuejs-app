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
              <task-table
                v-else
                :tasks="tasks"
                @saveTask="putTask"
                @removeTask="deleteTask"
              />
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
      loading: false,
      error: null,
    };
  },

  mounted() {
    this.getAllTasks();
  },

  methods: {
    getAllTasks() {
      this.loading = true;
      taskService
        .getAll()
        .then((res) => {
          this.tasks = res.data;
          this.loading = false;
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
    postTask(newTask) {
      this.loading = true;
      taskService
        .post(newTask)
        .then(() => {
          this.getAllTasks();
          this.loading = false;
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
    putTask(task) {
      this.loading = true;
      const { id, ...data } = task;
      taskService
        .put(id, data)
        .then(() => {
          this.getAllTasks();
          this.loading = false;
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
    deleteTask(task) {
      this.loading = true;
      taskService
        .delete(task.id)
        .then(() => {
          this.getAllTasks();
          this.loading = false;
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
  },
};
</script>
