/** 
 * cip系统模块
 */
export default [
    {
        path: "/cip",
        name: 'CipIndex',
        component: () => import('@/layout/main'),//children中的组件将会显示在main的router-view中
        meta: {
            title: '系统主页'
        },
        children: [
            // 欢迎页面    
            {
                path: 'home',
                name: 'CipHome',
                component: () => import('@/views/cip/home'),
                meta: {
                    title: '系统首页'
                }
            },
            // 用户管理    
            {
                path: 'user',
                name: 'CipUser',
                component: () => import('@/views/cip/user'),
                meta: {
                    title: '用户管理'
                }
            },
            // 角色管理    
            {
                path: 'role',
                name: 'CipRole',
                component: () => import('@/views/cip/role'),
                meta: {
                    title: '角色管理'
                }
            },
            
        ]
    },
] 