import Mock from 'mockjs'

/* 可配置切换环境 */
let baseUrl = process.env.VUE_APP_BASE_API;
console.log(baseUrl)

const Random = Mock.Random

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

// post请求,带参数,参数会在data中返回,会返回url,type,body三个参数,可以把data打印出来看看
Mock.mock(`${baseUrl}/getVerifyCode test`, 'get', () => {
  return {
    img: Random.image('200x100','#eeecec', Random.string(5)),
  }
})


