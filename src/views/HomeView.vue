<template>
  <v-card 
    color="transparent white--text" 
    class="mx-auto mt-16"
    elevation="0">
    <v-card-title class="">Welcome to To-Do List App</v-card-title>

    <v-card-subtitle class="text-center white--text pt-3">The Best To Do App Ever</v-card-subtitle>

    <v-card-text class="d-flex justify-space-around pt-6">
      <router-link to="/signup">
        <v-btn large rounded color="indigo darken-1" dark>
          Sign-Up
        </v-btn>
      </router-link>

      <router-link to="/signin">
        <v-btn large rounded color="purple lighten-2" dark>
        Sign-In
        </v-btn>
      </router-link>
    </v-card-text>
  </v-card>
</template>

<script>
export default {

}
</script>

<style scoped>
.v-card__title { font-size: 2rem; }
</style>

<style>
a { text-decoration: none; }
</style>
