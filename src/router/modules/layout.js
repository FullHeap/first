/** 
 * 架子模块
 */
export default [
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