import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSignedIn: false,
    user: undefined,
    books: [],
  },
  mutations,
  actions,
  getters,
})