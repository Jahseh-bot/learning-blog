# plugins

> plugins 选项用于以各种方式自定义 webpack 构建过程。webpack 附带了各种内置插件，可以通过 webpack.\[plugin-name\] 访问这些插件。

## 常用插件

- HtmlWebpackPlugin

> HtmlWebpackPlugin 简化了 HTML 文件的创建，以便为你的 webpack 包提供服务。这对于那些文件名中包含哈希值，并且哈希值会随着每次编译而改变的 webpack 包特别有用。你可以让该插件为你生成一个 HTML 文件，使  用 lodash 模板提供模板，或者使用你自己的 loader。

- TerserWebpackPlugin

> This plugin uses terser to minify/minimize your JavaScript.

- SplitChunksPlugin

> 