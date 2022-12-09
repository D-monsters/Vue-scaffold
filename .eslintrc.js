/*
 * @Author: fdhou
 * @Date: 2022-12-06 15:30:02
 * @LastEditors: fdhou
 * @LastEditTime: 2022-12-09 10:47:57
 * @Description: 
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
};