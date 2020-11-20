<template>
  <!-- 左侧边导航栏 -->
  <div>
    <!-- aside 样式默认width为300px，只能在此覆盖 -->
    <el-aside style="width:auto;">
      <el-scrollbar style="height:100%;">
        <!-- 只能单开 unique-opened -->
        <el-menu
          class="sidebar-el-menu"
          default-active=""
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          router
        >
          <!-- 遍历菜单 -->
          <template v-for="item in items">
            <!-- 含有子菜单 -->
            <template v-if="item.children">
              <!-- 第一层 含有子菜单菜单 -->
              <el-submenu :index="item.path" :key="item.path">
                <template slot="title">
                  <i :class="item.meta.icon"></i>
                  <span slot="title">{{ item.meta.title }}</span>
                </template>

                <!-- 第二层 子菜单遍历 -->
                <template v-for="subItem in item.children">

                  <!-- 第三层 子菜单含有子菜单 -->
                  <el-submenu
                    v-if="subItem.children"
                    :index="subItem.path"
                    :key="subItem.path"
                  >
                    <template slot="title">
                      <i :class="subItem.meta.icon"></i>
                      <span slot="title">{{ subItem.meta.title }}</span>
                    </template>
                    <el-menu-item
                      v-for="(threeItem, i) in subItem.children"
                      :key="i"
                      :index="threeItem.path"
                    >
                      <i :class="threeItem.meta.icon"></i>
                      <span slot="title">{{ threeItem.meta.title }}</span>
                    </el-menu-item>
                  </el-submenu>

                  <!-- 子菜单不含子菜单 -->
                  <el-menu-item
                    v-else
                    :index="subItem.path"
                    :key="subItem.path"
                  >
                    <i :class="subItem.meta.icon"></i>
                    <span slot="title">{{ subItem.meta.title }}</span>
                  </el-menu-item>
                </template>
              </el-submenu>
            </template>

            <!-- 第一层 不含子菜单  -->
            <template v-else>
              <el-menu-item :index="item.path" :key="item.path">
                <i :class="item.meta.icon"></i>
                <span slot="title">{{ item.meta.title }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-scrollbar>
    </el-aside>
  </div>
</template>

<script>
/* 利用bus 实现header和aside之间的消息传递 */
import bus from "@/utils/bus";
import { asyncRoutes } from "@/mock/json/menu";
// import { filterAsyncRouter } from "@/utils/comp";

export default {
  /* 非递归菜单实现 */
  name: "MainAsideBak",
  data() {
    return {
      isCollapse: false,
      items: asyncRoutes,
      asrouter: []
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getMenu() {},
    routeradd() {
      
    }
  },

  /* 在钩子函数中接收改变的值 */
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("Collapse", msg => {
      // console.log("AsideCollapse:" + msg);
      this.isCollapse = msg;
    });
    this.routeradd();
  }
};
</script>

<style scoped lang="scss">
.el-aside {
  height: 100%;
}
/* 固定菜单宽度，显隐不挤着样式 */
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 220px;
  height: 100%;
}
/* 实现滚动不变 */
.sidebar::-webkit-scrollbar {
  width: 0px;
}
</style>
