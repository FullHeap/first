import request from '@/utils/request'

// 获取验证码
export function getVerifyCode() {
  return request({
    url: '/getVerifyCode',
    method: 'get'
  })
}

// 登录
export function login(username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid
  }
  return request({
    url: '/systemLogin',
    method: 'POST',
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

// 退出
export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}



