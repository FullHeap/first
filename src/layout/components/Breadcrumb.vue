<template>
  <!-- 左侧边导航栏 -->
  <div>
    <el-breadcrumb class="app-breadcrumb" separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
          <span
            v-if="
              index == levelList.length - 1
            "
            class="no-redirect"
            >{{ item.meta.title }}
          </span>
          <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  data(){
    return {
      levelList: null
    }
  },
  created(){
    this.getBreadcrumb();
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(
        item => item.meta && item.meta.title
      );
      this.levelList = matched.filter(
        item => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    }
  }
};
</script>

<style>
/* 面包屑底部与页面隔开 */
.el-breadcrumb {
  margin-bottom: 20px;
}
</style>
