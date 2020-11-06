<template>
<el-container>
    <el-aside class="app-default-layout app-left-nav" :style="{'max-width': drawer ? '70px' : '300px'}">
        <div id = "menu">
            <ul >
                <li class = "ulTitle">
                    管理系统链接
                </li>
                <li>
                    <router-link to="/cipmgt">渠道整合平台管理系统</router-link>
                </li>
                <li>
                    <router-link to="/cipmgt">渠道服务平台管理系统</router-link>
                </li>
                <li>
                    <router-link to="/cipmgt">渠道开发平台管理系统</router-link>
                </li>
            </ul>
            <ul >
                <li class = "ulTitle">
                    其他链接
                </li>
            </ul>
        </div>

    </el-aside>
    <el-main>
        <el-carousel :interval="4000" type="card" arrow="always" style="padding-top: 6vh;" :height="bannerH+'px'">
            <el-carousel-item v-for="(box,index) in imagesbox" :key="index">
                <div style="color: #000000;text-align: center;overflow: hidden;width: 100%;">
                    <img style="width: 100%; height: auto;" :src="box.idView" class="bannertt">
                </div>
            </el-carousel-item>
        </el-carousel>
    </el-main>
</el-container>

</template>