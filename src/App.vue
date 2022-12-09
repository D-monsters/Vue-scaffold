<!--
 * @Author: fdhou
 * @Date: 2022-12-09 10:52:12
 * @LastEditors: fdhou
 * @LastEditTime: 2022-12-09 15:07:25
 * @Description: 
-->
<template>
  <h1 class="app-title">hello App````</h1>
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
export default {
  name: "App",
};
</script>
<style>
.app-title {
  color: red;
  font-size: 12px;
}
</style>