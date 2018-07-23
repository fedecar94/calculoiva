import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ingresos: [],
    egresos: []

  },
  mutations: {
    'SET_INGRESOS': function (state, newData) {
      state.ingresos = newData
    },
    'SET_EGRESOS': function (state, newData) {
      state.egresos = newData
    }
  },
  actions: {
    setingresos (store, newData) {
      store.commit('SET_INGRESOS', newData)
    },
    setegresos (store, newData) {
      store.commit('SET_EGRESOS', newData)
    }
  }
})
