<template>
  <div>
    <el-header>
      <div class="head-left" @click="gotoIndex">
        <!-- el-tooltip提示 -->
        <el-tooltip effect="dark" :content="`首页`" placement="bottom">
          <i class="el-icon-menu"></i>
        </el-tooltip>
      </div>
      <div class="head-left" @click="gotoIndex">
        首页
      </div>

      <div class="head-right" @click="gotoRegedit">
        <i class="el-icon-setting"> 注册 </i>
      </div>
    </el-header>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      isCollapse: true,
      user: "尹祯",
      fullscreen: true
    };
  },
  methods: {
    // 侧边栏折叠
    gotoIndex() {
      this.$router.push("/index");
    },
    gotoRegedit() {
      this.$router.push("/regedit");
    }
  }
};
</script>

<style>
.el-header {
  background-color: #409eff;
  line-height: 60px;
}
</style>
