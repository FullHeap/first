<template>
    <div>
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
                <menu-list :items="item.children"></menu-list><!--递归调用-->
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
    </div>
</template>

<script>
export default {
    name:'MenuList',
    props: {
        items: Array,
        isCollapse:Boolean
    },
    methods:{
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    }
}
</script>
<style>
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