import Vue from 'vue'
import Vuex from 'vuex'
import asyncRoutes from './modules/asyncRoutes'
import premission from './modules/premission'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    asyncRoutes,
    premission,
  }
})

export default store
