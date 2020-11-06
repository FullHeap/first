<template>
  <div>
    <el-footer style="height:40px">
       {{content}}
    </el-footer>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
  data(){
    return{
      content:"Copyright © 2020 lyz. All rights reserved.",
    }
  }
};
</script>




<style scoped lang="scss">
 .el-footer {
  background-color: #409EFF;
  line-height: 40px;
  text-align: center;
} 
</style>
