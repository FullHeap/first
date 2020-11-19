import Mock from 'mockjs'

/* 可配置切换环境 */
let baseUrl = process.env.VUE_APP_BASE_API;
console.log(baseUrl)

Mock.mock(`${baseUrl}/testPost`,'post',{
  "string|1-10": "★"
})



