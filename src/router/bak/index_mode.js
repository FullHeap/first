/* 模块化 router */
import Vue from 'vue'
import VueRouter from 'vue-router'
import LAYOUT from "@/router/modules/layout"
import SYSTEM from "@/router/modules/system"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    ...LAYOUT,
    ...SYSTEM
  ]
})

// 路由变化时
router.beforeEach((to, from, next) => {
  if (document.title !== to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

export default router