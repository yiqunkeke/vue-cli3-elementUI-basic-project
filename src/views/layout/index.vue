<template>
  <el-container class="container">
    <el-aside> <myAside /></el-aside>
    <el-container class="content">
      <el-header> <myHeader /> </el-header>
      <el-main> <myMain /> </el-main>
    </el-container>
  </el-container>
</template>

<script>
import myAside from "@/views/layout/aside";
import myHeader from "@/views/layout/header";
import myMain from "@/views/layout/main";
export default {
  name: "layout",
  components: {
    myAside,
    myHeader,
    myMain
  }
};
</script>

<style lang="stylus">
@import "~styles/layout/index.styl"
</style>
