import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: 'Initial Value in State'
  },
  mutations: {
    UPDATE_TEST_STATE (state, value) {
      state.test = value
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    testFromState: (state) => {return state.test}
  }
})
