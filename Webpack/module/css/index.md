# css模块处理
> 要想在 JavaScript 模块中导入 CSS 文件，需要安装 style-loader 和 css-loader，并在 module 配置 中添加这些 loader。
  >> css-loader 会对 @import 和 url() 进行处理，就像 js 解析 import/require() 一样，将css解析成js代码块。
  >> style-loader 负责把 CSS 插入到 DOM 中。

## 安装
> `npm install --save-dev style-loader css-loader`

## less
> 安装 less 和 less-loader，并将该 loader 添加到 webpack 的配置中去
 >> `npm install less less-loader --save-dev`

## sass
> 安装 sass-loader和sass，sass-loader 需要预先安装 Dart Sass 或 Node Sass。这可以控制所有依赖的版本， 并自由的选择使用的 Sass 实现。
 >> `npm install sass-loader sass webpack --save-dev`

## stylus
> 安装 stylus 和 stylus-loader，并将该 loader 添加到 webpack 配置中
 >> `npm install stylus stylus-loader --save-dev`

## 示例
```js
 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
  module: {
    rules: [  
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Less 编译成 CSS
          'less-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
       {
        test: /\.styl$/,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Stylus 编译成 CSS
          'stylus-loader',
        ],
      },
    ],
  },
 };
```

