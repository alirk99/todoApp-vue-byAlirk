import Vue from 'vue'
import Vuex from 'vuex'
import User from '@/store/modules/user'
import List from '@/store/modules/list'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    List,
    User,
  }
})
