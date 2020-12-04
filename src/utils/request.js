/* axios封裝 每次都将创建一个axios实例 */
import axios from 'axios'
/* 使用main中的全局挂载对象 */
import { Notification, MessageBox, Message } from 'element-ui'
import store from '@/store'
import errorCode from '@/utils/errorCode'
import { generatekey, encryptDes, decryptDes } from '@/utils/crypt/des'
import { signature,/* verify, */encrypt, decrypt } from '@/utils/crypt/jsrsacrypt'

/* 设置请求全局属性 */
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.timeout = 10000; //设置超时时间，单位毫秒
axios.defaults.retry = 3;       //设置全局请求次数
axios.defaults.retryDelay = 10000;//设置全局请求间隙


// 创建axios实例
const service = axios.create({
  // let host = 'localhost';
  // let port = '8080';
  // axios中请求配置有baseURL选项，表示请求URL公共部分，每个请求将会带该部分
  // baseURL: "http://"+host+":"+port+process.env.VUE_APP_BASE_API,
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  // timeout: 10000
})


// request拦截器
service.interceptors.request.use(
  req => {

    console.log(req)
    if (req.url == '/systemLogin') {
      var key = generatekey(8);
      // DES敏感字段加密
      req.data.password = encryptDes(req.data.password, key);
      // console.log("sign:"+req.headers.sign);
      // console.log("signdata:"+JSON.stringify(req.data));

      //秘钥封数字信封
      req.headers.envlop = encrypt(key);
      // console.log("key:"+key);
      // console.log("envlop:"+req.headers.envlop);
      console.log("envlopdec:" + decrypt(req.headers.envlop));
      

      // console.log(key)
      // console.log(req.data.password)
      console.log(decryptDes(req.data.password, key))
    }

    //加签数字签名
    req.headers.sign = signature(JSON.stringify(req.data));
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

    // console.log(verify(res.data,res.headers.sign));
    console.log(res);

    //业务返回码处理
    return errorDeal(res);
  },
  error => {
    console.log('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })


    //超时处理
    var config = error.config;
    if (!config || !config.retry) return Promise.reject(error);
    // 设置用于跟踪重试次数的变量
    config.__retryCount = config.__retryCount || 0;

    // 检查我们是否已将重试总数最大化
    if (config.__retryCount >= config.retry) {
      // 错误拒绝
      return Promise.reject(error);
    }

    // 增加重试次数
    config.__retryCount += 1;

    // 创造新的承诺来处理指数退避
    var backoff = new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, config.retryDelay || 1);
    });

    // 返回承诺，其中将撤回axios以重试请求
    return backoff.then(function () {
      return axios(config);
    });






    // return Promise.reject(error)
  }
)

function errorDeal(res) {
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
}


export default service
