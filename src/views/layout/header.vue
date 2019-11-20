<template>
  <div class="wrapper">
    <i class="el-icon-s-fold" @click="ToggleSideBar"></i>
    <div class="settings">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="username">你好，张三</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "myHeader",
  methods: {
    ...mapActions(["ToggleSideBar"])
  }
};
</script>

<style scoped></style>
