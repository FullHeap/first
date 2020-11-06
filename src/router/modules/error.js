/** 
 * 错误模块
 */
export default [
    // 页面未找到   
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/error/404'),
        meta: {
            title: '404'
        }
    }, 
    // 权限错误   
    {
        path: '/403',
        name: '403',
        component: () => import('@/views/error/403'),
        meta: {
            title: '403'
        }
    },
    // 接口错误   
    {
        path: '/500',
        name: '500',
        component: () => import('@/views/error/500'),
        meta: {
            title: '500'
        }
    },

] 