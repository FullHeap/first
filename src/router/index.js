import Vue from 'vue'
import VueRouter from 'vue-router'

import { constantRoutes1, constantRoutes2, filterAsyncRouter } from "@/router/constrouter";
import { asyncRoutes } from "@/mock/json/menu";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: []
})

/* 加载可以直接访问的路由 */
router.addRoutes(constantRoutes1);
/* 加载后端路由 */
router.addRoutes(filterAsyncRouter(asyncRoutes));
/* 加载 404 */
router.addRoutes(constantRoutes2);
console.log(router.matcher);


// 路由变化时
router.beforeEach((to, from, next) => {
  // debugger
  if (document.title !== to.meta.title) {
    document.title = to.meta.title;
  }
  // 判断用户登录状态 
  let userid = sessionStorage.getItem("userid");
  // 用户已登录 
  if (userid != null) {
    next();
  }
  else {
    if (to.path === "/login") {
      next();
    } else {
      next("/login");
    }
  }
})

export default router