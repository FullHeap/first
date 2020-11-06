<template>
  <div class="demo-image__placeholder">
    <el-alert
      title="500"
      type="error"
      description="啊哦~ 程序错误"
      show-icon
    >
    </el-alert>
    <div class="block">
      <el-image style="" :src="src" :fit="'fill'">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
      </el-image>
    </div>
    <div class="error-handle">
      <router-link to="/">
        <el-button type="primary" style="margin-right:10px">返回首页</el-button>
      </router-link>
      <el-button type="primary" @click="goBack">返回上一页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src:
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1684800941,3588449219&fm=26&gp=0.jpg"
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.el-image {
  width: 100%;
  height: 100%;
}
/* 底部按钮水平居中 */
.error-handle {
  margin: 0 auto;
  text-align: center;
}
</style>