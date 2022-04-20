<template>
  <v-main class="mt-7 mb-4">
      <v-text-field
         class=""
         v-model="newTodo.title"
         :elevation="5"
         label="Create a New Task"
         @keyup.enter="addNewTodo"
         solo
         hide-details
      ></v-text-field>
  </v-main>
</template>

<script>
import { mapActions, mapMutations} from "vuex";
export default {
   data(){
      return{
         newTodo: {
            id: 0,
            title: "",
            status: false,
         },
      }
   },
   methods: {
      ...mapActions(["fetchTodos", "createTodo"]),
      ...mapMutations(['addTodo']),
      
      addNewTodo: function () {
         this.$emit("loading", true);
         console.log("addNewTodo req from component");
         console.log(this.newTodo);
         
         this.createTodo(this.newTodo);
         // question
         this.newTodo = {
            id: 0,
            title: "",
            status: false,
         };
      }
      // addNewTodo() {
      //    this.addTodo(this.newTodo);
      // },
   }, 
}
</script>

<style scoped>

</style>