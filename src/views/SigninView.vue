<template>
  <v-card 
    color="transparent"
    elevation="0" 
    width="550"
    class="mx-auto px-4"
    style="margin-top: 5vh;">

    <Title title="Sign In" />
    <v-card class="pa-5">
      <v-text-field
        label="Enter your Username"
        v-model="email"
        hide-details
        >Enter your Username</v-text-field>
      
      <v-text-field
        label="Enter your Password"
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
        class="pt-8"
        hide-details
        >Enter your Password</v-text-field>

      <v-row class="mt-3">
        <v-btn 
          large 
          rounded 
          color="purple lighten-2" 
          dark
          :loading="loader"
          class="mt-5 mx-auto "
          @click="login"
          >Sign-In</v-btn>

        <v-card-text class="text-center">
          Don't have an account? 
          <router-link to="/signup">Sign-up</router-link> 
           here.
        </v-card-text>

      </v-row>
    </v-card>
  </v-card>
</template>

<script>
import Title from "../components/Title.vue";
import {supabase} from "../main.js"
import {mapMutations} from "vuex"

export default {
data() {
  return {
    email: "",
    password: "",
    show1: false,
    loader: false,
  }
},
methods: {
  ...mapMutations(["setCurrentUser"]),

  async login() {
    this.loader = true;
    const { user, error } = await supabase.auth.signIn({
      email: this.email,
      password: this.password,
    });
    if(error) {
      alert(error.message);
      console.log("error", error);
      this.loader = false;
      return
    }
    this.setCurrentUser({
      login: "true",
      email: user.email,
    })
    this.loader = false;
    alert("Login Successful");
  }
},
components: {
  Title,
},
}
</script>

<style>

</style>