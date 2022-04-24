<template>
  <v-main     
    width="600"
    class="mx-auto px-4 position">

    <Title title="My List" />
    <v-progress-linear
      background-color="indigo darken-4"
      color="purple lighten-1"
      indeterminate
      rounded
      height="8"
      v-if="showLoading"></v-progress-linear>
    <CreateTask @loading="toggleLoading" />
    <AllTasks @loading="toggleLoading" />
    <Summary/>
  </v-main>
</template>

<script>
import Title from "../components/Title.vue";
import CreateTask from "../components/CreateTask.vue";
import AllTasks from "../components/AllTasks.vue";
import Summary from "../components/Summary.vue";
import store from "../store/index";

export default {
  data() {
    return {
      showLoading: false,
    };
  },

  methods: {
    toggleLoading(status) {
      this.showLoading = status;
    },
  },
  components: {
    Title,
    CreateTask,
    AllTasks,
    Summary,
  },
};
</script>

<style>
.position {
  margin-top: 5vh;
}
</style>

