<template>
  <div>
    <el-header>
      <div class="head-left" @click="collapseChage">
        <!-- el-tooltip提示 -->
        <el-tooltip effect="dark" :content="`菜单`" placement="bottom">
          <i class="el-icon-menu" ></i>
        </el-tooltip>
      </div>
      <div class="head-left">
        后台管理系统
      </div>

      <div class="head-right">
        <el-dropdown>
          <!-- 块状调整上下位置transform -->
          <div style="transform: translateY(15%)">
            <el-avatar> {{ user }} </el-avatar>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>切换账号</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-divider></el-divider>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="head-right">
        <i class="el-icon-setting"></i>
      </div>
      <!-- 全屏显示 -->
      <div class="head-right">
        <el-tooltip
          effect="dark"
          :content="fullscreen ? `取消全屏` : `全屏`"
          placement="bottom"
        >
          <i class="el-icon-rank" @click="handleFullScreen"></i>
        </el-tooltip>
      </div>
    </el-header>
  </div>
</template>

<script>
import bus from '@/utils/bus';

export default {
  name: "MainHeader",
  data() {
    return {
      isCollapse:true,
      user: "尹祯",
      fullscreen:true,
    };
  },
  methods:{
    // 侧边栏折叠
    collapseChage() {
      this.isCollapse = !this.isCollapse;
      bus.$emit("Collapse", this.isCollapse);
    },
    handleFullScreen(){
      let a = "银针";
      this.user = a;
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
