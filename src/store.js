import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Ventas: [],
    Compras: []

  },
  mutations: {
    'SET_Ventas': function (state, newData) {
      state.Ventas = newData
    },
    'SET_Compras': function (state, newData) {
      state.Compras = newData
    }
  },
  actions: {
    setVentas (store, newData) {
      store.commit('SET_Ventas', newData)
    },
    setCompras (store, newData) {
      store.commit('SET_Compras', newData)
    }
  }
})
