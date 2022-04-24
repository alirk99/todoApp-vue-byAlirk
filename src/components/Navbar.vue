<template>
  <v-card 
    app 
    flat 
    color="transparent" 
    class="overflow-hidden">
    <v-app-bar color="transparent white--text ">
      
      <v-row class="d-flex align-center justify-space-between">
        <v-card-title cols="auto" >To-Do App</v-card-title>
        
        <v-btn 
          icon
          @click="darkMode">
          <v-icon 
            color="white"
            >{{icon}}</v-icon>
        </v-btn>

        <v-col cols="auto" class="d-flex align-center justify-center">
          <router-link to="/"> 
          <v-btn plain small height="auto" color="white">Home</v-btn></router-link>

          <router-link to="/about"> 
          <v-btn plain small height="auto" color="white">About</v-btn></router-link>

          <router-link to="/mylist"> 
          <v-btn plain small height="auto" color="white">My List</v-btn></router-link>

          <router-link to="/signup"> 
          <v-btn plain small height="auto" color="white">Sign-Up</v-btn></router-link>

          <router-link to="/signin"> 
          <v-btn plain small height="auto" color="white">Sign-In</v-btn></router-link>

          <v-btn plain small height="auto" color="white" @click="logout" v-if="isVisible">Logout</v-btn>

          <!-- {{isVisible}}
          {{getCurrentUser.login}}
          {{showLogout}} -->
        </v-col>
      </v-row>

    </v-app-bar>
  </v-card>
</template>

<script>
import {supabase} from "../main.js"
import {mapGetters, mapMutations} from "vuex"

export default {
data() {
  return {
    icon: 'mdi-weather-night',
    isVisible: false,
  }
},
computed: {
  ...mapGetters(["getCurrentUser"]),
  showLogout() {
    this.isVisible = this.getCurrentUser.login
    console.log("showLogout", this.isVisible)
    return this.getCurrentUser.login
  },

},
methods: {
  ...mapMutations(["setCurrentUser"]),

  async logout() {
    const { error } = await supabase.auth.signOut()
    if(error) {
      alert(error.message);
      console.log("error", error);
      return
    }
    this.setCurrentUser({
      login: "false",
      email: "",
    }) 
    alert("Successfully Logged Out");
  },
  darkMode() {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    this.icon = (this.$vuetify.theme.dark) ? 'mdi-white-balance-sunny' : 'mdi-weather-night';
  },
},
}
</script>

<style scoped>
a { text-decoration: none; }
</style>