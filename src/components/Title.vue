<template>
   <v-main >
      <v-card-text >
         <v-row class="header align-center">

            <v-card-title class="px-0 font" >To Do List</v-card-title>

            <v-btn 
               icon
               @click="darkMode"
               >
               <v-icon 
                  color="white"
                  >{{icon}}</v-icon>
            </v-btn>

         </v-row>
      </v-card-text>
   </v-main>
</template>

<script>
import { mapMutations } from "vuex";
export default {
   data() {
      return {
         icon: 'mdi-weather-night',
      };
   },
   methods: {
      ...mapMutations(["editDark"]),
      darkMode() {
         this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
         this.icon = (this.$vuetify.theme.dark) ? 'mdi-white-balance-sunny' : 'mdi-weather-night';
      },
   }
}
</script>

<style scoped>
.header{
   color: white;
   display: flex;
   justify-content: space-between;
   align-content: center;
}
.font{
   font-size: 2rem;
}
</style>