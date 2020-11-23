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

// 路由变化时
router.beforeEach((to, from, next) => {
  // console.log("addRoutes:"+store.state.addRoutes.length);
  // console.log(router.matcher);
  if (document.title !== to.meta.title) {
    document.title = to.meta.title;
  }
  // 判断用户登录状态 
  let userid = sessionStorage.getItem("userid");
  if (userid != null) {
    //判断store中是否含有routers，含有则是正常跳转
    if (router.app.$options.store.state.asyncRoutes.addRoutes.length > 0) {
      next();
    }
    //不含有则是用户F5刷新
    else {
      console.log("to:" + to);
      console.log("from:" + from);
      //生成菜单，路由变化时生成菜单。
      /*
      * config中 publicPath设置为"/" ，每次刷新页面时，
      * 会先从publicPath跳转到 to.path，再从to.path 跳转到 to.path。
      * 执行两次beforeEach中的内容
      */
      if (from.path != to.path) {
        router.app.$options.store.dispatch("GenerateRoutes")
          .then(res => {
            console.log(res);
          })
      }
      next();
    }
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