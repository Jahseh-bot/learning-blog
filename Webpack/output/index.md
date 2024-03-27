# output简介

  > 指示 webpack 如何去输出、以及在哪里输出你的「bundle、asset 和其他你所打包或使用 webpack 载入的任何内容」

## 一些常用的配置项

- path: bundle的输出目录, 应该为绝对路径。

- filename: 此选项决定了每个输出 bundle 的名称。这些 bundle 将写入到 output.path 选项指定的目录下。 

  - 可以使用以下替换模板字符串

    |模板|描述|
    | ----------- | ----------- |
    |\[fullhash\]|compilation 完整的 hash 值|
    |\[hash\]|同上，但已弃用|
    |\[id\]|此 chunk 的 ID|
    |\[name\]|如果设置，则为此 chunk 的名称，否则使用 chunk 的 ID|
    |\[file\]|filename 和路径，不含 query 或 fragment|
    |\[query\]|带前缀 ? 的 query|
    |\[fragment\]|带前缀 # 的 fragment|
    |\[base\]|只有 filename（包含扩展名），不含 path|
    |\[path\]|只有 filename，不含扩展名或 path|
    |\[ext\]|带前缀 . 的扩展名（对 output.filename 不可用）|

- publicPath: 

 > 默认为 'auto' 对于按需加载(on-demand-load)或加载外部资源(external resources)（如图片、文件等）来说，output.publicPath 是很重要的选项。如果指定了一个错误的值，则在加载这些资源时会收到 404 错误。

-  clean: true 在生成文件之前清空 output 目录

## 示例

```js
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundle'),
    assetModuleFilename: 'assets/[hash:10][ext][query]',
    clean: true
  },
};
```