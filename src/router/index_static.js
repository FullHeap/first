import Vue from 'vue'
import VueRouter from 'vue-router'
// import LAYOUT from "@/router/modules/layout"
// import SYSTEM from "@/router/modules/system"
import ERROR from "@/router/modules/error"

Vue.use(VueRouter)

export const constantRoutes = [
  // 重定向    
  {
    path: '/',
    redirect: '/login'
  },
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
  {
    path: '/system',
    name: 'SystemIndex',
    redirect: '/system/home',
    component: () => import('@/layout/main'),//children中的组件将会显示在main的router-view中
    meta: {
      "title": "系统管理",
      "icon": "el-icon-setting",
      "role": [
        "admin"
      ]
    },
    children: [
      // 欢迎页面    
      {
        path: 'home',
        name: 'SystemHome',
        component: () => import('@/views/system/home'),
        meta: {
          "title": "欢迎登录",
          "icon": "el-icon-star-on",
          "role": [
            "admin"
          ]
        }
      },
      // 用户管理    
      {
        path: 'user',
        name: 'SystemUser',
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
          "title": "角色管理",
          "icon": "el-icon-star-on",
          "role": [
            "admin"
          ]
        }
      },
      // 菜单管理    
      {
        path: 'menu',
        name: 'SystemMenu',
        component: () => import('@/views/system/menu'),
        meta: {
          title: '菜单管理'
        }
      },
      // 多系统管理    
      {
        path: 'trans',
        name: 'SystemTrans',
        component: () => import('@/views/system/trans'),
        meta: {
          title: '交易管理'
        }
      },
      // 测试管理    
      {
        path: 'test',
        name: 'SystemTest',
        component: () => import('@/views/system/test'),
        meta: {
          title: '系统测试'
        }
      },
    ]
  },
  {
    path: '/cip/',
    name: 'CipIndex',
    component: () => import('@/layout/main'),//children中的组件将会显示在main的router-view中
    meta: {
      title: '系统主页',
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
      // 角色管理    
      {
        path: 'test',
        name: 'CipTest',
        component: () => import('@/views/cip/test'),
        meta: {
          title: '系统测试'
        }
      },
    ]
  },
  ...ERROR,
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

// 路由变化时
router.beforeEach((to, from, next) => {
  if (document.title !== to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

export default router