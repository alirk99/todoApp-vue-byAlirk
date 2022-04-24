<template>
   <v-main >
      <v-card-text >
         <v-row>

            <v-card-title  
               class="px-0 font" 
               >{{title}}</v-card-title>

         </v-row>
      </v-card-text>
   </v-main>
</template>

<script>

export default {
   data() {
      return {
         
      };
   },
   methods: {

   },
   props: {
      title: String
   }
}
</script>

<style scoped>
.font{
   font-size: 1.8rem;
   color: white;
}
</style>