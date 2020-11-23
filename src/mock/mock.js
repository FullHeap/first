import Mock from 'mockjs'

/* 可配置切换环境 */
let baseUrl = process.env.VUE_APP_BASE_API;
console.log(baseUrl)

Mock.mock(`${baseUrl}/testPost`, 'post', {
  "string|1-10": "★"
})

Mock.mock(`${baseUrl}/getRouters`, 'get', require('./json/menu.json'))

//有参数写法
/* Mock.mock(`${baseUrl}/getRouters`, 'get',
  (data) => {
    console.log(data)
    return require('./json/menu.json')
  }
) */


