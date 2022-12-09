/*
 * @Author: fdhou
 * @Date: 2022-12-06 14:50:19
 * @LastEditors: fdhou
 * @LastEditTime: 2022-12-09 14:16:02
 * @Description: 开发环境webpack配置
 */
const path = require('path')
const { DefinePlugin } = require('webpack')
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')

// 获取处理样式的Loaders
const getStyleLoaders = (preProcessor) => {
  return [
    "vue-style-loader",
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            "postcss-preset-env", // 能解决大多数样式兼容性问题
          ],
        },
      },
    },
    preProcessor,
  ].filter(Boolean);
};
module.exports = {
  entry: './src/main.js',
  output: {
    path: undefined, //开发环境不需要指定输出目录
    filename: 'static/js/[name].js', // 输出的文件名
    chunkFilename: 'static/js/[name].chunk.js', // 动态导入的文件打包输出的文件名
    assetModuleFilename: 'static/media/[name][hash:10][ext][query]', // 图片等公共资源打包后的名字
  },
  module: {
    rules: [
      /**
       * 样式资源处理
       */
      {
        test: /\.css$/,
        use: getStyleLoaders()
      },
      {
        test: /\.less$/,
        use: getStyleLoaders("less-loader"),
      },
      {
        test: /\.s[ac]ss$/,
        use: getStyleLoaders("sass-loader"),
      },
      {
        test: /\.styl$/,
        use: getStyleLoaders("stylus-loader"),
      },
      /**
       * 图片资源处理
       */
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
          },
        },
      },
      /**
       * 字体图标处理
       */
      {
        test: /\.(ttf|woff2?)$/,
        type: "asset/resource", // 原封不动输出
      },
      /**
       * js资源处理
       */
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "../src"),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true, // 开启babel编译缓存
          cacheCompression: false, // 缓存文件不要压缩
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new ESLintWebpackPlugin({
      context: path.resolve(__dirname, "../src"),// 要处理的文件范围
      exclude: "node_modules",
      cache: true,
      cacheLocation: path.resolve(__dirname, "../node_modules/.cache/.eslintcache"), // 缓存目录
    }),
    // 处理html资源
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new VueLoaderPlugin(),
    // cross-env定义的环境变量给打包工具webpack使用
    // DefinePlugin定义的环境变量给代码内部使用！
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all", // 代码分割
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`,
    },
  },
  mode: "development",
  devtool: "cheap-module-source-map",
  // webpack解析模块加载选项
  resolve: {
    // 自动补全扩展名
    extensions: [".vue", ".js", ".json"]
  },
  // 自动化配置
  devServer: {
    open: true, // 是否自动打开浏览器
    host: "localhost",
    port: 4000,
    hot: true, // 热模块替换
    historyApiFallback: true, // 解决react-router刷新404问题
  },
}
