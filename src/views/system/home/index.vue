<template>
  <el-container>
    <el-main>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item v-for="(box, index) in imagesbox" :key="index">
          <el-image
          style="height:250px;width:400px"
            :src="box.idView"
            :fit="'contain'"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      imagesbox: [
        { id: 0, idView: require("@/assets/images/home/1.jpg") },
        { id: 1, idView: require("@/assets/images/home/2.jpg") },
        { id: 2, idView: require("@/assets/images/home/3.jpg") }
      ],
    };
  }
};
</script>