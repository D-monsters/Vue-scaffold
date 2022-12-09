/*
 * @Author: fdhou
 * @Date: 2022-12-09 14:55:12
 * @LastEditors: fdhou
 * @LastEditTime: 2022-12-09 15:09:19
 * @Description: 
 */
import { createRouter, createWebHashHistory } from 'vue-router'
const Home = import('../views/Home')
const About = import('../views/About')
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/About',
      component: About
    },
    {
      path: '/Home',
      component: Home
    }
  ]
})