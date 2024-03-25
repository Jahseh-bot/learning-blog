# Webpack基础


### 什么是[Webpack](https://www.webpackjs.com/)？

  Webpack是一款js的打包工具，在配合一些loader和plugin的情况下可以将浏览器本来不能识别的资源打包成能识别的资源；

  Webpack是前端从农耕时代转化为科技时代的重要工具，是前端工程化里很重要的一环，基于模块化实现的模块打包工具。

 

### Webpack的基础使用

1. 安装Webpack 
  > npm install webpack webpack-cli --save-dev
2. 新建并配置webpack.config.js,下面是Webpack五大关键[配置项](https://www.webpackjs.com/configuration/)

  1. entry(打包入口)

  2. output(打包出口)

  3. module(loader)

  4. plugins(插件)

  5. mode(模式) 

3. 进行打包

  > npx webpack --mode development -w / node_modules/.bin/webpack --mode development -w



### webpack.config.js示例

```js 
const path = require('node:path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundle'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env"],
              cacheDirectory: true,
              cacheCompression: false
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4kb
          }
        },
        generator: {
          filename: "static/images/[hash:10][ext][query]"
        },
      },
    ],
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'app.html',
      template: path.resolve(__dirname,'index.html'),
      inject: 'body'
    }),
    new TerserWebpackPlugin()
  ],
  mode: 'development'
}
```




[webpack-cli指令](https://www.webpackjs.com/api/cli/#root)/[常用loader](https://www.webpackjs.com/loaders/)/[常用plugins](https://www.webpackjs.com/plugins/)

