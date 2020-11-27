import request from '@/utils/request'

// 测试api
export function testPost(string1, string2) {
  const data = {
    string1,
    string2
  }
  return request({
    url: '/testPost',
    method: 'post',
    data: data
  })
}