import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      data:[]
  },
  getters: {
    getData: function () {
      return function () {
        return state.data
      }
    }
  },
  mutations: {
    updateData: function (state, payload) {
      state.data = payload
    }
  }
})

export default store
