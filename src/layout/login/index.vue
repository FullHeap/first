<template>
  <!-- 画布 -->
  <div class="login-wrap">
    <!-- 登录框 -->
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <!-- 表单框 -->
      <div class="ms-form">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="login-ruleForm"
          size="medium"
        >
          <!-- <el-form-item prop="systemid">
            <el-select
              v-model="ruleForm.systemid"
              clearable
              placeholder="选择登录系统"
              style="width:100%;"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item> -->
          <el-form-item prop="username">
            <el-input
              v-model="ruleForm.username"
              placeholder="用户名"
              style="width:100%;"
            >
              <!-- 使用两种方式 添加前端占位图标 -->
              <el-button slot="prepend" icon="el-icon-user"></el-button>
              <!-- <i slot="prefix" class="el-icon-user"></i> -->
            </el-input>
          </el-form-item>
          <el-form-item prop="password" style="width:100%;">
            <el-input
              show-password
              placeholder="密码"
              v-model="ruleForm.password"
              @keyup.enter.native="submitForm('ruleForm')"
            >
              <el-button slot="prepend" icon="el-icon-goods"></el-button>
            </el-input>
            
          </el-form-item>
          <el-form-item prop="code">
              <el-input type="text" v-model="ruleForm.code" auto-complete="off"
                        placeholder="验证码" @keydown.enter.native="submitForm('ruleForm')" style="width:60%;"></el-input>
              <el-image class="login-code" :src="vcUrl" :fit="`fill`" @click="getImageCode"></el-image>
          </el-form-item>
          <!-- <el-form-item prop="rememberMe">
              
          </el-form-item> -->
          <el-checkbox v-model="ruleForm.rememberMe" style="margin:0px 0px 15px 0px; float:right">记住密码</el-checkbox>
          <el-form-item>
            <!-- loading 可显示加载中状态 :loading="true"-->
            <el-button
              style="width:100%;"
              type="primary"
              @click="submitForm('ruleForm')"
            >
              <span v-if="!loading">登 录</span>
              <span v-else>登 录 中...</span>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <login-header />
    <main-footer class="footer" />
  </div>
</template>

<script>
/* 头部 */
import loginHeader from "@/layout/components/LoginHeader.vue";
/* 底部 */
import mainFooter from "@/layout/components/MainFooter.vue";

import { getVerifyCode, /* login */ } from "@/api/login"
import Cookies from "js-cookie";
import { encrypt, decrypt } from '@/utils/crypt/jsrsacrypt'

export default {
  name: "login",
  components: { loginHeader, mainFooter },
  created() {
    this.getImageCode();
    this.getCookie();
    //在路由守卫，每次路由变化时直接加载菜单
  },
  data: function() {
    return {
      vcUrl:"",
      ruleForm: {
        username: "admin",
        password: "admin",
        rememberMe:true,
        code:"",
        uuid:""
      },
      rules: {
        // systemid: [{ required: true, message: "请选择系统", trigger: "blur" }],
        username: [{ required: true, message: "请输入用户", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },
      options: [
        {
          label: "渠道整合系统",
          value: "cip"
        },
        {
          label: "渠道活动平台",
          value: "atv"
        }
      ],
      loading: false
    };
  },
  methods: {
    getImageCode(){
      getVerifyCode().then((response)=>{
        // console.log(response);
        this.vcUrl = "data:image/gif;base64,"+ response.imgBase64;
        this.ruleForm.uuid = response.uuid;
      });
    },
    getCookie() {
      const username = Cookies.get("username");
      const password = Cookies.get("password");
      const rememberMe = Cookies.get('rememberMe')
      this.ruleForm = {
        username: username === undefined ? this.ruleForm.username : username,
        password: password === undefined ? this.ruleForm.password : decrypt(password),
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
      };
    },
    submitForm(formName) {
      /* 表单校验 */
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;

          //cookies处理，记录30天
          if (this.ruleForm.rememberMe) {
            Cookies.set("username", this.ruleForm.username, { expires: 30 });
            Cookies.set("password", encrypt(this.ruleForm.password), { expires: 30 });
            Cookies.set('rememberMe', this.ruleForm.rememberMe, { expires: 30 });
          } else {
            Cookies.remove("username");
            Cookies.remove("password");
            Cookies.remove('rememberMe');
          }

          /* localStorage 作用范围比sessionStorage大，sessionStorage在会话关闭后销毁 */
          // sessionStorage.setItem("username", this.ruleForm.username);
          // sessionStorage.setItem("password", encrypt(this.ruleForm.password));
          
          // login(this.ruleForm.username,this.ruleForm.password,this.ruleForm.code).then((response)=>{
          //   console.log(response);
          //   // this.vcUrl = "data:image/gif;base64,"+ response.imgBase64
          // });

          this.$store
            .dispatch("Login", this.ruleForm)
            .then(() => {
              this.$router.push({ path:"/system/home" });
            })
            .catch(() => {
              this.loading = false;
              this.getCode();
            });

          // if ("admin" == this.ruleForm.username) {
          //   /* 管理员 */
          //   this.$router.push({ path: "/system/home" });
          // }
          // if ("cip" == this.ruleForm.username) {
          //   /* cip系统用户 */
          //   this.$router.replace("/cip/home");
          // }
          // if ("cap" == this.ruleForm.username) {
          //   /* cap系统用户 */
          //   this.$router.replace("/cap/home");
          // }
          return true;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
/* 画布占满 */
.login-wrap {
  width: 100%;
  height: 100%;
}
.ms-title {
  /* 标题占满宽度，20%的高度 */
  width: 100%;
  // height: 20%;
  /* 文字居中显示 */
  text-align: center;
  line-height: 70px;
  font-size: 25px;
  border-bottom: 1px solid #ddd;
  background-color: #409eff;
}
.ms-login {
  /* 登录框占一半 */
  width: 30%;
  height: 55%;
  /* 水平垂直居中 */
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  /* 圆角 */
  border-radius: 5px;
  background: rgba(255, 255, 255, 1);
  /* 阴影 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.ms-form {
  /* 大小占一半 */
  width: 50%;
  height: 40%;
  /* 水平垂直居中 */
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}
/* footer 置于底部 */
.footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
}
.login-code{
  width: 40%;
  height: 35px;
  float: right;
  cursor: pointer;
  
}
</style>
