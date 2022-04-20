<template>
  <v-main class="home px-4">
    <Title />
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

<style scoped>
.home {
  width: 550px;
  margin: 0 auto;
  margin-top: 11vh;
}
</style>

