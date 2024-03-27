# module 简介

> 这些选项决定了如何处理项目中的不同类型的模块。

## module.rules(数组)

> 创建模块时，匹配请求的规则数组。这些规则能够修改模块的创建方式。 这些规则能够对模块(module)应用 loader，或者修改解析器(parser)。

  - Rule(对象)
   > 每个规则可以分为三部分 - 条件(condition)，结果(result)和嵌套规则(nested rule)。

   >>在规则中，属性 test, include, exclude 和 resource 对 resource 匹配,当使用多个条件时，所有条件都匹配。
   >>规则有两种输入值：1.应用的 loader：应用在 resource 上的 loader 数组。2.Parser 选项：用于为模块创建解析器的选项对象。

   - **Rule.exclude**: 排除所有符合条件的模块。

   - **Rule.include**: 引入符合以下任何条件的模块。

   - **Rule.loader**: Rule.use: [ { loader } ] 的简写。

   - **Rule.oneOf(Array)**: 当规则匹配时，只使用第一个匹配规则。

      #### oneOf示例:
      ```js
      module.exports = {   
        module: {
          rules: [
            {
              test: /\.css$/,
              oneOf: [
                {
                  resourceQuery: /inline/, // foo.css?inline
                  use: 'url-loader',
                },
                {
                  resourceQuery: /external/, // foo.css?external
                  use: 'file-loader',
                },
              ],
            },
          ],
        },
      };
      ```
   - **Rule.parser(Object)**: 解析选项对象。所有应用的解析选项都将合并。

      #### parser示例（默认的插件解析器选项）：
      ```js
      module.exports = {
        module: {
          rules: [
            {
              //...
              parser: {               
                dataUrlCondition: { //如果一个模块源码大小小于 maxSize，那么模块会被作为一个 Base64 编码的字符串注入到包中， 否则模块文件会被生成到输出的目标目录中。
                  maxSize: 4 * 1024,
                },
                amd: false, // 禁用 AMD
                commonjs: false, // 禁用 CommonJS
                system: false, // 禁用 SystemJS
                harmony: false, // 禁用 ES2015 Harmony import/export
                requireInclude: false, // 禁用 require.include
                requireEnsure: false, // 禁用 require.ensure
                requireContext: false, // 禁用 require.context
                browserify: false, // 禁用特殊处理的 browserify bundle
                requireJs: false, // 禁用 requirejs.*
                node: false, // 禁用 __dirname, __filename, module, require.extensions, require.main, 等。
                commonjsMagicComments: false, // 禁用对 CommonJS 的  magic comments 支持
                node: {}, // 在模块级别(module level)上重新配置 node 层(layer)
                worker: ['default from web-worker', '...'], // 自定义 WebWorker 对 JavaScript 的处理，其中 "..." 为默认值。
              },
            },
          ],
        },
      };
      ```
   - **Rule.generator(Object)**: 可对符合匹配规则的模块的输出文件进行处理。

      #### generator示例：
      ```js
      module.exports = {
        output: {
          assetModuleFilename: 'images/[hash][ext][query]',
        },
        module: {
          rules: [
            {
              test: /\.png/,
              type: 'asset/resource',
            },
            {
              test: /\.html/,
              type: 'asset/resource',
              generator: {
                //更改输出的文件名
                filename: 'static/[hash][ext]',
              },
            },
          ],
        },
      };
      ```
   - **Rule.type(String)**: 设置类型用于匹配模块。它防止了 defaultRules 和它们的默认导入行为发生。

      > 可设置值: 'javascript/auto' | 'javascript/dynamic' | 'javascript/esm' | 'json' | 'webassembly/sync' | 'webassembly/async' | 'asset' | 'asset/source' | 'asset/resource' | 'asset/inline' 
    
      #### type示例：
      ```js
      module.exports = {
        //...
        module: {
          rules: [
            //...
            {
              test: /\.json$/,
              type: 'javascript/auto',
              loader: 'custom-json-loader',
            },
          ],
        },
      };
      ```
   - **Rule.use(Array)** 可以是一个应用于模块的 UseEntries 数组。每个入口(entry)指定使用一个 loader。

      > Loaders 可以通过传入多个 loaders 以达到链式调用的效果，它们会从右到左被应用（从最后到最先配置）。
    
      #### use示例：
        ```js
        module.exports = {
          //...
          module: {
            rules: [
              {
                //...
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 1,
                    },
                  },
                  {
                    loader: 'less-loader',
                    options: {
                      noIeCompat: true,
                    },
                  },
                ],
              },
            ],
          },
        };
      
        ```
   - **Rule.resolve(Object)**: 模块解析可以在模块层被配置。resolve 配置页面可查看所有可用的配置。 所有被应用的 resolve 选项被更高层级的resolve配置合并。

      > 常用于给项目目录配置别名alias

      #### resolve示例：
      ```js
      module.exports = {
        resolve: {
          alias: {
            footer: './footer/default.js',
          },
        },
      };
      ```

