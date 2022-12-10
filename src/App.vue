<!--
 * @Author: fdhou
 * @Date: 2022-12-09 10:52:12
 * @LastEditors: fdhou
 * @LastEditTime: 2022-12-10 11:16:31
 * @Description: 
-->
<template>
  <h1 class="app-title">hello App````</h1>
  <el-button type="primary">按 钮</el-button>
  <ul>
    <li>
      <router-link to="/Home">Home</router-link>
    </li>
    <li>
      <router-link to="/About">About</router-link>
    </li>
  </ul>
  <Home />
  <router-view />
</template>
<script>
import { ElButton } from "element-plus";
export default {
  name: "App",
  components: {
    ElButton,
  },
};
</script>
<style>
.app-title {
  color: red;
  font-size: 12px;
}
</style>