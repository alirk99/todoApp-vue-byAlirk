<template>
<!-- mdi-weather-night -->
   <v-main class="header">
      <v-row
        
      >
         <h1>To Do List</h1>
         <v-btn 
            icon
            @click="editDark"
            >
            <v-icon 
               color="white"
                  
               >mdi-white-balance-sunny</v-icon>
         </v-btn>
      </v-row>
   </v-main>
</template>

<script>
import { mapMutations } from "vuex";
export default {
   data() {
      return {

      };
   },
   methods: {
      ...mapMutations(["editDark"]),
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
</style>