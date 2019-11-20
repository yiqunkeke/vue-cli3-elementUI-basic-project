<template>
  <div>
    <el-menu
      background-color="#2d3a4b"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="collapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          新闻管理
        </template>
        <el-menu-item-group>
          <router-link to="/news">
            <el-menu-item index="1-1">
              新闻
            </el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "myAside",
  computed: {
    ...mapState({
      collapse: state => state.collapse
    })
  }
};
</script>

<style scoped></style>
