<template>
  <v-main v-show="display">
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
   props: {
      task: Object,
   },
   computed: {
      ...mapGetters(["getTodosDisplay"]),
      display() {
         console.log("display function");
         switch (this.getTodosDisplay) {
            case 'completed':
               return this.task.status
            case 'active':
               return !this.task.status
            case 'all':
               return true
            default:
               return true
         }
      }
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