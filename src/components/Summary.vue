<template>
  <v-main class="mt-4">
    <v-card 
         class="mx-auto rounded" 
         :elevation="5"
         tile>

      <v-card-text>
        <v-row>

          <v-card-text>
            {{getPending}} task left
          </v-card-text>
          
          <v-card-text right @click="removeCompleted">
            Clear Completed
          </v-card-text>

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
    ...mapMutations(["removeCompleted"]),
  
  },
}
</script>

<style>

</style>