import request from '@/utils/request'

// 获取验证码
export function getVerifyCode() {
  return request({
    url: '/getVerifyCode',
    method: 'get'
  })
}

// 登录方法
export function login(username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid
  }
  return request({
    url: '/login',
    method: 'post',
    data: data
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/getInfo',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}



/* // 获取路由
export const getRouters = () => {
  return request({
    url: '/getRouters',
    method: 'get'
  })
} */

// 获取路由
export function getRouters() {
  return request({
     url: '/getRouters',
     method: 'get'
 })
}

/* this.axios.get(
  '/json/cart.json',
  'params'
).then(
  response => {
    console.log(response);
    let res = response.data;
    debugger;
    this.cartList = res.data;
  }
); */