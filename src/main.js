/*
 * @Author: fdhou
 * @Date: 2022-12-09 10:50:52
 * @LastEditors: fdhou
 * @LastEditTime: 2022-12-10 11:15:59
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App'
import router from './router'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
createApp(App).use(router)
  // .use(ElementPlus)
  .mount(document.getElementById('app'))