import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import {getRouters} from '@/api/login.js'
import { constantRoutes2, filterAsyncRouter } from "@/router/constrouter";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    // 生成路由
    GenerateRoutes() {
      return new Promise(resolve => {
        // 向后端请求路由数据
        getRouters().then(res => {
          /* 加载后端路由 */
          router.addRoutes(filterAsyncRouter(res.data));
          /* 加载 404 */
          router.addRoutes(constantRoutes2);
          resolve();
        })
      })
    }

  },
  modules: {
  }
})
