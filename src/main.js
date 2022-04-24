import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { createClient } from '@supabase/supabase-js'

Vue.config.productionTip = false

export const supabase = createClient(
  'https://nsxuohxticgdddntubnp.supabase.co', 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zeHVvaHh0aWNnZGRkbnR1Ym5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA2MDQxNjAsImV4cCI6MTk2NjE4MDE2MH0.TAVX27PvVyL1ntUEdYPXuDX0VtiFFui1vwzpE4Pj0GU'
)

new Vue({
  router,
  store,
  vuetify,
  supabase,
  render: function (h) { return h(App) }
}).$mount('#app')
