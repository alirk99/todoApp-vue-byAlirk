<template>
  <v-app 
    height=100vh 
    :class="getDark ? 'dark-theme' : 'light-theme'"
    >
    <Banner />
    <router-view></router-view>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Banner from "./components/Banner.vue";
import { mapGetters  } from "vuex";

export default {
  name: "App",

  data: () => ({
    //
  }),
  computed: {
    ...mapGetters(["getDark"]),
  },
  components: {
    Navbar,
    Banner,
  },
};
</script>

<style scoped>

</style>
