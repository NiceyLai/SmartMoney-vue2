const path = require("path");

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: (config) => {
    const dir = path.resolve(__dirname, "src/assets/icons"); //确定icon所在的目录
    config.module //config是vue把webpack的API封装暴露给我们的一个对象，让我们使用
      .rule("svg-sprite") //添加一个规则
      .test(/\.svg$/) //文件匹配正则就用上面的规则
      .include.add(dir)
      .end() //规则只包含icons目录
      .use("svg-sprite-loader" /*使用svg-sprite-loader*/)
      .loader("svg-sprite-loader")
      .options({ extract: false } /*不要解析出文件*/)
      .end()
      .use("svgo-loader")
      .loader("svgo-loader")
      .tap((options) => ({
        ...options,
        plugins: [{ removeAttrs: { attrs: "fill" } }],
      }))
      .end();
    config.plugin("svg-sprite").use(require("svg-sprite-loader/plugin")),
      [{ pluginSprite: true }]; //配置插件
    config.module.rule("svg").exclude.add(dir); //其他svg loader排除 icons目录
  },
  // config.module
  //   .rule('svg-sprite')
  //   .test(/\.(svg)(\?.*)?$/)
  //   .include.add(dir).end()
  //   .use('svg-sprite-loader-mod').loader('svg-sprite-loader-mod').options({extract: false}).end()
  //   .use('svgo-loader').loader('svgo-loader')
  //   .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]}))
  //   .end()
  // config.plugin('svg-sprite').use(require('svg-sprite-loader-mod/plugin'), [{plainSprite: true}])
  // config.module.rule('svg').exclude.add(dir)
});
