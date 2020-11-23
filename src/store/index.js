import Vue from 'vue'
import Vuex from 'vuex'
import asyncRoutes from './modules/asyncRoutes'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    asyncRoutes
  }
})

export default store
