import router from './router'
import system from '@/layout/main';


var getRouter //用来获取后台拿到的路由

// 假装fakeRouter是通过后台接口请求回来的数据
let fakeRouter = {
  "router": [

    {
      path: "/system",
      name: 'SystemIndex',
      component: "system",//children中的组件将会显示在main的router-view中
      meta: {
        title: '系统主页',
      },
      children: [
        // 欢迎页面    
        {
          "path": "/system/home",
          "title": "系统首页",
          "components": "system/home",
          "meta": {
            "icon": "el-icon-s-home",
            "role": [
              "admin"
            ]
          }
        }
      ]
    }
  ]
}


router.beforeEach((to, from, next) => {
  console.log("getRouter:" + getRouter)
  if (!getRouter) { //不加这个判断，路由会陷入死循环
    if (!getObjArr('router')) {
      // easy-mock官网经常挂掉，所以就不请求了,你们可以替换成自己公司的接口去请求,把下方的axios请求打开即可
      // axios.get('https://www.easy-mock.com/mock/5a5da330d9b48c260cb42ca8/example/antrouter').then(res => {
      console.log('beforeEach  getRouter')
      getRouter = fakeRouter.router //假装模拟后台请求得到的路由数据
      saveObjArr('router', getRouter) //存储路由到localStorage
      routerGo(to, next) //执行路由跳转方法
      // })
    } else { //从localStorage拿到了路由
      getRouter = getObjArr('router') //拿到路由
      console.log(getRouter)
      routerGo(to, next)
    }
  } else {
    next()
  }

})


function routerGo(to, next) {
  getRouter = filterAsyncRouter(getRouter) //过滤路由
  router.addRoutes(getRouter) //动态添加路由
  console.log("router:" + router.options.routes)
  // console.log();
  global.antRouter = getRouter //将路由数据传递给全局变量，做侧边栏菜单渲染工作
  console.log("global.antRouter:" + global.antRouter)
  next({ ...to, replace: true })
}

function saveObjArr(name, data) { //localStorage 存储数组对象的方法
  localStorage.setItem(name, JSON.stringify(data))
}

function getObjArr(name) { //localStorage 获取数组对象的方法
  return JSON.parse(window.localStorage.getItem(name));

}

const loadView = view => () => import('@/views/' + view)
// module.exports = view => () => import('@/views/'+view)
/* module.exports = file => () => import('@/views/' + file + '.vue')
const loadView = (view) => { // 路由懒加载
  // return (resolve) => require([`@/views/${view}`], resolve)
  return () => import('@/views/'+view)
} */

function filterAsyncRouter(asyncRouterMap) { //遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      if (route.component === 'system') { //Layout组件特殊处理
        route.component = system
      } else {
        route.component = loadView(route.component)
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })

  return accessedRouters
}
