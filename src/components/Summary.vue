<template>
  <v-main class="mt-4">
    <v-card 
         class="mx-auto rounded" 
         :elevation="5"
         tile>

      <v-card-text class="mb-2">
        <v-row class="justify-space-between" >

          <v-col cols="auto">
            <v-card-subtitle class="pa-0 pr-7">
              {{getPending}} task left
            </v-card-subtitle>
          </v-col>

          <v-col 
            class="justify-center"
            cols="auto">
            <v-btn plain small height="auto" class="pa-0 text-capitalize" @click="setTodosDisplay('all')">
              All
            </v-btn>
            <v-btn plain small height="auto" class="pa-0 text-capitalize" @click="setTodosDisplay('active')">
              Active
            </v-btn>
            <v-btn plain small height="auto" class="pa-0 text-capitalize" @click="setTodosDisplay('completed')">
              Completed
            </v-btn>
          </v-col>
          
          <v-col cols="auto">
            <v-btn 
              class="pa-0 text-right text-capitalize justify-end"
              height="auto" 
              @click="removeCompleted"
              plain
              small>Clear Completed
            </v-btn>
          </v-col>

        </v-row>
      </v-card-text>

    </v-card>
  </v-main>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      
    }
  },
  props: {

  },
  computed: {
    ...mapGetters(["getPending"]),
    
    },
  methods: {
    ...mapMutations(["removeCompleted", "setTodosDisplay"]),
  
  },
}
</script>

<style scoped>
.summary{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}
.v-btn.v-size {
  font-size: 0.8rem;
}
.v-btn__content{
  justify-content: center;
}
</style>>