<template>
  <v-main>
      <v-hover v-slot="{ hover }">
      <v-list-item v-if="todoField" > 
         <v-list-item-action>
            <v-checkbox
               class="rounded-circle"
               v-model="task.status"
               color="indigo"
               @click="check"
               hide-details
            ></v-checkbox>
         </v-list-item-action>

         <v-list-item-content @click="open">
            <v-list-item-title
               :class="{'text-decoration-line-through': task.status,
                        'grey--text': task.status}"
            >{{ task.title }}</v-list-item-title>
         </v-list-item-content>

         <v-btn 
            icon 
            @click="del"
            >
            <v-icon 
               :class="hover ? 'gray--text': 'white--text'" 
               >mdi-close</v-icon>
         </v-btn>         

      </v-list-item>
      </v-hover>
      
      <v-list-item class="rounded" v-if="editField">
         <v-btn icon @click="back">
            <v-icon>mdi-arrow-left</v-icon>
         </v-btn>
         <v-list-item-content>
            <v-text-field
               class=""
               v-model="editedTodo.title"
               :elevation="5"
               :label="task.title"
               @keyup.enter="edit"
               solo
               hide-details
               ></v-text-field>
         </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
  </v-main>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
   data(){
      return{
         todoField: true,
         editField: false,
         editedTodo: {
            id: 0,
            title: "",
            status: false,
         }
      };
   },
   computed: {
      ...mapGetters(["getTodos"]),
   },
   props: {
      task: Object,
   },
   methods: {
      ...mapActions(["deleteTodo", "updateTodo"]),
      ...mapMutations(["findPending"]),

      del() {
         if(confirm("Do you want to delete this task?")){
            
            this.$parent.$parent.$parent.$emit("loading", true);
            console.log("removeTodo req from component");
            this.deleteTodo(this.task);
         }
      },
      open() {
         this.editField = true;
         this.todoField = false;
      },
      edit() {
         console.log("editTodo req from component");
         this.$parent.$parent.$parent.$emit("loading", true);
         console.log(this.task, this.editedTodo);

         let data = {
            old: this.task, 
            new: this.editedTodo,
         }
         this.updateTodo(data);
         this.back();
         this.editedTodo = {
            id: 0,
            title: "",
            status: false,
         };
         // this.editedTodo.title = "";
         console.log('this.editedTodo', this.editedTodo);
         console.log('this.getTodos[3]',this.getTodos[3]);
      },
      back() {
         this.editField = false;
         this.todoField = true;
      },
      check() {
         this.findPending();
  },
   },
}
</script>

<style scoped>

</style>