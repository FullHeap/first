import Vue from 'vue'
import VueRouter from 'vue-router'
import { constantRoutes } from "@/router/constrouter";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: []
})

router.addRoutes(constantRoutes);

export default router