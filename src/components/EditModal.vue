<template>
  <v-card>
    <v-card-title class="d-flex justify-space-between align-center">
      <span>Task Change</span>
      <v-btn color="error" variant="plain"> Delete </v-btn>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              required
              :value="task.title"
              @input="$emit('changeTitle', $event.target.value)"
            ></v-text-field>
          </v-col>
          <v-checkbox
            :model-value="task.completed"
            label="task completed"
            @change="$emit('changeCompleted', $event.target.checked)"
          ></v-checkbox>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue-darken-1" variant="text" @click="$emit('close')">
        Close
      </v-btn>
      <v-btn
        color="blue-darken-1"
        variant="text"
        @click="
          $emit('saveTask', task);
          $emit('close');
        "
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "EditModal",
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>
