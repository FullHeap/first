// import user from '@/views/system/user';
// import role from '@/views/system/role';
// import main from '@/layout/main';
// import login from '@/views/system/login';
/** 
 * 系统模块
 */
export default [
    {
        path: "/system",
        name: 'SystemIndex',
        /* redirect: 'home', */
        component: () => import('@/layout/main'),//children中的组件将会显示在main的router-view中
        meta: {
            title: '系统主页',
        },
        children: [
            // 欢迎页面    
            {
                path: 'home',
                name: 'Home',
                component: () => import('@/views/system/home'),
                meta: {
                    title: '系统首页'
                }
            },
            // 用户管理    
            {
                path: 'user',
                name: 'SystemUser',
                /* 常见写法 */
                // component: user,
                /* 懒加载过时写法 */
                // component: resolve => require(['@/view/system/user'], resolve),
                /* 推荐写法 */
                component: () => import('@/views/system/user'),
                meta: {
                    title: '用户管理'
                }
            },
            // 角色管理    
            {
                path: 'role',
                name: 'SystemRole',
                component: () => import('@/views/system/role'),
                meta: {
                    title: '角色管理'
                }
            },
        ]
    }
] 