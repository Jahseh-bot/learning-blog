# asset 图片字体等静态资源处理

> 资源模块(asset module)是一种模块类型，它允许使用资源文件（字体，图标等）而无需配置额外 loader。

## 常用的loader

- row-loader

 > 将文件导入为字符串

- file-loader

 > 将文件发送到输出目录 

- url-loader

 > 将文件作为 data URI 内联到 bundle 中，内部引用了file-loader，在资源大小超过limit配置的大小（默认为8kb）时，将改资源交给file-loader处理，file-loader的options可以写在url-loader的options里。

## 资源模块类型(asset module type)

> 通过添加 4 种新的模块类型，来替换所有这些 loader
 
 1. asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
 
 2. asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。

 3. asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。

 4. asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。