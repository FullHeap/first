/* axios封裝 每次都将创建一个axios实例 */
import axios from 'axios'
/* 使用main中的全局挂载对象 */
import { Notification, MessageBox, Message } from 'element-ui'
import store from '@/store'
import errorCode from '@/utils/errorCode'
// import {generatekey,encryptDes,decryptDes} from '@/utils/crypt/des'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// let host = 'localhost';
// let port = '8080';
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分，每个请求将会带该部分
  // baseURL: "http://"+host+":"+port+process.env.VUE_APP_BASE_API,
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 10000
})
// request拦截器
service.interceptors.request.use(
  req => {
    return req
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  res => {
    console.log("res.data:" + JSON.stringify(res.data))
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const message = errorCode[code] || res.data.msg || errorCode['default']
    if (code === 401) {
      MessageBox.confirm(
        '登录状态已过期，您可以继续留在该页面，或者重新登录',
        '系统提示',
        {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('LogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        })
    } else if (code === 500) {
      Message({
        message: message,
        type: 'error'
      })
      return Promise.reject(new Error(message))
    } else if (code !== 200) {
      Notification.error({
        title: message
      })
      return Promise.reject('error')
    } else {
      // console.log(JSON.stringify(res.data))
      return res.data
    }
  },
  error => {
    console.log('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
