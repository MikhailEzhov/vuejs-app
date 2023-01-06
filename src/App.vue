<template>
  <v-app>
    <v-main>
      <add-form />
    </v-main>
  </v-app>
</template>

<script>
import AddForm from "./components/AddForm.vue";

export default {
  name: "App",

  components: {
    AddForm,
  },

  data: () => ({
    //
  }),
};
</script>
