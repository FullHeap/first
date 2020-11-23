<template>
  <!-- 左侧边导航栏 -->
  <div>
    <!-- aside 样式默认width为300px，只能在此覆盖 -->
    <el-aside style="width:auto;">
      <el-scrollbar style="height:100%;">
        <!-- 只能单开 unique-opened -->
        <menu-list :items="items" :isCollapse="isCollapse"></menu-list><!-- 更改菜单为组件递归模式 -->
      </el-scrollbar>
    </el-aside>
  </div>
</template>

<script>
/* 利用bus 实现header和aside之间的消息传递 */
import bus from "@/utils/bus";
// import { asyncRoutes } from "@/mock/json/menu";
import MenuList from "@/components/MenuList";

export default {
  name: "MainAside",
  components: { MenuList },
  data() {
    return {
      isCollapse: false,
      items: [],
    };
  },
  methods: {
    getMenu(){
      // console.log(this.$store.state.asyncRoutes.addRoutes)
      this.items = this.$store.state.asyncRoutes.addRoutes;
    }
  },

  /* 在钩子函数中接收改变的值 */
  created() {
    this.getMenu(),
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("Collapse", msg => {
      // console.log("AsideCollapse:" + msg);
      this.isCollapse = msg;
    });
  }
};
</script>

<style scoped lang="scss">
.el-aside {
  height: 100%;
}
</style>
