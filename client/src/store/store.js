import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      isSignedIn: false,
      user: undefined,
    },
    flash: {
      show: false,
      message: 'Loading...',
      type: 'success',
    },
    books: [],
  },
  mutations,
  actions,
  getters,
})
