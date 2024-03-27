# entry 为chunk配置对应的入口文件

- 开始应用程序打包过程的一个或多个起点。如果传入数组，则会处理所有条目。

- 如果传入一个字符串或字符串数组，chunk 会被命名为 main。如果传入一个对象，则每个属性的键(key)会是 chunk 的名称，该属性的值描述了 chunk 的入口点。

## 示例
```js
//单入口
module.exports = {
  entry: './main.js'
};
//多入口
module.exports = {
  entry: {
    mian: './mian.js',
    about: './about.js',
    contact: './contact.js',
  }
};
```