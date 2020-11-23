import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
//使用vue-axios 插件
Vue.use(VueAxios, axios)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/* 国际化引入 */
import locale from 'element-ui/lib/locale/lang/en'
/* 引入自定义主题 */
import '@/assets/css/element-variables.scss'
import '@/assets/css/main.scss'

// import './promission'//这里进行路由后台获取的模拟

Vue.use(ElementUI, { locale })

//挂载element全局组件
Vue.prototype.$loading = ElementUI.Loading.service;
Vue.prototype.$msgbox = ElementUI.MessageBox;
Vue.prototype.$alert = ElementUI.MessageBox.alert;
Vue.prototype.$confirm = ElementUI.MessageBox.confirm;
Vue.prototype.$prompt = ElementUI.MessageBox.prompt;
Vue.prototype.$notify = ElementUI.Notification;
Vue.prototype.$message = ElementUI.Message;

Vue.config.productionTip = false

//mock测试引入
import './mock/mock.js'

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
    if (store.state.addRoutes.length > 0) {
      next();
    }
    //不含有则是用户F5刷新
    else {
      console.log("to:" + to);
      console.log("from:" + from);
      if (from.path != to.path) {
        store.dispatch("GenerateRoutes")
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
