<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" class="border rounded-lg pa-5 bg-white">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="onSubmit"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Task name"
            required
          ></v-text-field>
          <v-btn color="success" type="submit" class="mt-2"> Add task </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AddForm",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Task name is required"],
  }),
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    onSubmit() {
      if (this.name.trim()) {
        const newTask = {
          id: Date.now(),
          title: this.name,
          completed: false,
        };
        this.$emit("createTask", newTask);
        this.reset();
        this.resetValidation();
      }
    },
  },
};
</script>
