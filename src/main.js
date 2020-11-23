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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
