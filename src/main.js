/*
 * @Author: fdhou
 * @Date: 2022-12-09 10:50:52
 * @LastEditors: fdhou
 * @LastEditTime: 2022-12-09 14:59:14
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App'
import router from './router'
createApp(App).use(router).mount(document.getElementById('app'))