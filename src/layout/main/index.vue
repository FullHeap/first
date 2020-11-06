<template>
  <div class="content">
    <el-container direction="vertical" class="content">
      <!-- 工作区头部 -->
      <main-header></main-header>

      <!-- 主工作区 -->
      <el-container>
        <!-- 左侧导航栏 -->
        <main-aside></main-aside>
        <!-- 工作区 -->
        <el-main>
          <!-- 面包屑 -->
          <!-- <main-breadcrumb></main-breadcrumb> -->
          <transition name="move" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
      <!-- 工作区底部 -->
      <main-footer>Footer</main-footer>
    </el-container>
  </div>
</template>

<script>
/* 左侧菜单 */
import mainAside from "@/layout/components/MainAside.vue";
/* 头部 */
import mainHeader from "@/layout/components/MainHeader.vue";
/* 底部 */
import mainFooter from "@/layout/components/MainFooter.vue";
/* 面包屑 */
// import mainBreadcrumb from "@/layout/components/Breadcrumb.vue";

export default {
  name: "MainFrame",
  components: {
    mainAside,
    mainHeader,
    mainFooter
    //mainBreadcrumb
  },
  data() {},
  computed: {
    
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.content {
  height: 100%;
}
</style>
