import router from '@/router'
import { getRouters } from '@/api/login.js'
import { constantRoutes, errorRoutes, filterAsyncRouter } from "@/router/constrouter";

const asyncRoutes = {
    state: {
        routes: [],
        addRoutes: []
    },
    mutations: {
        SET_ROUTES: (state, routes) => {
            state.addRoutes = routes;//动态加载的路由
            state.routes = constantRoutes.concat(routes);//整个路由
        }
    },
    actions: {
        // 生成路由
        GenerateRoutes({ commit }) {
            return new Promise(resolve => {
                // 向后端请求路由数据
                getRouters().then(res => {
                    let accessedRoutes = filterAsyncRouter(res.data);
                    /* 加载后端路由 */
                    router.addRoutes(accessedRoutes);
                    /* 加载 404 */
                    router.addRoutes(errorRoutes);
                    commit('SET_ROUTES', accessedRoutes);
                    resolve(accessedRoutes);
                })
            })
        }
    },
}

export default asyncRoutes