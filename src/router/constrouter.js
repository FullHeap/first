import ERROR from './modules/error'
import system from '@/layout/main';
// import { getmenu } from '../api/layout/layout';
// import __import from '@/router/_import'
// import LAYOUT from './modules/layout'
// import SYSTEM from './modules/system'
// import CIP from './modules/cip'


/* constantRoutes静态路由，所有用户均可访问 */
export const constantRoutes1 = [
    /* {
        path: '/',
        redirect: '/login'
    }, */
    // 系统登录    
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/layout/login'),
        meta: {
            title: '用户登录'
        }
    },
    // 系统首页    
    {
        path: '/index',
        name: 'Index',
        component: () => import('@/layout/home'),
        meta: {
            title: '系统首页'
        }
    },
    // 注册页面    
    {
        path: '/regedit',
        name: 'Regedit',
        component: () => import('@/components/HelloWorld'),
        meta: {
            title: '用户注册'
        }
    },
]

/* constantRoutes静态路由，所有用户均可访问 */
export const constantRoutes2 = [
    /* {
        path: "/system",
        redirect: '/system',
    }, */
    ...ERROR,
    {
        path: '/*',
        redirect: '/404',
    },
]


//遍历后台传来的路由字符串，转换为组件对象
export function filterAsyncRouter(asyncRouterMap) { 
    console.log("asyncRouterMap"+asyncRouterMap);
    const accessedRouters = asyncRouterMap.filter(route => {
        if (route.component) {
            if (route.component === 'system') {
                route.component = system
            } else {
                // console.log("load:" + loadView(route.component));
                route.component = loadView(route.component)
                // console.log("import:" + __import(route.component));
                // route.component = __import(route.component)
            }
        }
        if (route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children)
        }
        return true
    })
    return accessedRouters
}

/* 加载路由组件，两种方式均可 */
const loadView = (view) => { // 路由懒加载
    // return (resolve) => require([`@/views/${view}`], resolve)
    return () => import('@/views/' + view)
}