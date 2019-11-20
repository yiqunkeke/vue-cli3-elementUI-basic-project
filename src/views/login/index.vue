<template>
  <el-form ref="form" :model="form" class="loginForm">
    <el-form-item class="loginTitle">
      睿昂网站管理后台
    </el-form-item>
    <el-form-item>
      <el-input v-model="form.username" placeholder="用户名" clearable>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-input
        v-model="form.password"
        placeholder="密码"
        type="password"
        clearable
      >
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        username: null,
        password: null
      }
    };
  }
};
</script>

<style lang="stylus">
@import "~styles/login/index.styl"
</style>
