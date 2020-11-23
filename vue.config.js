const port = process.env.port || 80

//添加图标路径解析
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

//覆盖vue默认配置
module.exports = {
  runtimeCompiler: true,
  publicPath: '/',//???参数还需要了解，对页面刷新有影响

  // 是否开启eslint保存检测，有效值：ture | false | 'error'
  lintOnSave: process.env.NODE_ENV === 'dev',
  
  devServer: {
    host: '0.0.0.0',
    port: port,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  //设置 svg图标  需要添加dev依赖svg-sprite-loader
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}