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
          <el-form-item prop="systemid">
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
          </el-form-item>
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
import store from "@/store"

export default {
  name: "login",
  components: { loginHeader, mainFooter },
  created(){
    store.dispatch('GenerateRoutes');
  },
  data: function() {
    return {
      ruleForm: {
        username: "admin",
        password: "admin"
      },
      rules: {
        systemid: [{ required: true, message: "请选择系统", trigger: "blur" }],
        username: [{ required: true, message: "请输入用户", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      options: [
        {
          label: "渠道整合系统",
          value: "cip"
        },
        {
          value: "渠道活动平台",
          label: "atv"
        }
      ],
      loading: false
    };
  },
  methods: {
    submitForm(formName) {
      /* 表单校验 */
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          /* localStorage 作用范围比sessionStorage大，sessionStorage在会话关闭后销毁 */
          sessionStorage.setItem("username", this.ruleForm.username);
          sessionStorage.setItem("systemid", this.ruleForm.systemid);
          sessionStorage.setItem("password", this.ruleForm.systemid);

          /* 获取后台用户信息 */
          sessionStorage.setItem("userid", this.ruleForm.username);
          // debugger;

          /* 获取菜单 */
         /*  getRouters().then(res => {
            console.log(res.data);
          }); */

         /*  this.axios
            .get("https://mock.yonyoucloud.com/mock/16090/fxbank/test/menu")
            .then(response => {
               //response 第一层是promise ，数据中再是data 
              sessionStorage.setItem(
                "allrouter",
                filterAsyncRouter(response.data.data)
              );
              let res = response.data;
              
              this.$router.addRoutes(filterAsyncRouter(res.data));
              console.log(this.$router);
            }); */

          if ("admin" == this.ruleForm.username) {
            /* 管理员 */
            this.$router.push({ path: "/system/home" });
          }
          if ("cip" == this.ruleForm.username) {
            /* cip系统用户 */
            this.$router.replace("/cip/home");
          }
          if ("cap" == this.ruleForm.username) {
            /* cap系统用户 */
            this.$router.replace("/cap/home");
          }
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
  line-height: 80px;
  font-size: 20px;
  border-bottom: 1px solid #ddd;
  background-color: #409eff;
}
.ms-login {
  /* 登录框占一半 */
  width: 30%;
  height: 50%;
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
  height: 50%;
  /* 水平垂直居中 */
  left: 50%;
  top: 60%;
  position: absolute;
  transform: translate(-50%, -50%);
}
/* footer 置于底部 */
.footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
}
</style>
