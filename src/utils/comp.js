


/* export function filterAsyncRouter(asyncRouterMap) {
    return asyncRouterMap.filter(route => {
        // console.log("resdata111:" + JSON.stringify(route));
        if (route.component) {
            // system组件特殊处理
            if (route.component === "system") {
                console.log("before"+route.component);
                route.component = system;
                console.log("after"+route.component);
            } else {
                console.log("before"+route.component);
                route.component = loadView(route.component);
                console.log("after"+route.component);
            }
        }
        if (route.children != null && route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children);
        }
        return true;
    });
} */


// module.exports = file => require('@/views/' + file + '.vue').default // vue-loader at least v13.0.0+

