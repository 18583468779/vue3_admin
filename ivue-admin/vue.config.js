module.exports = {
  // 其他配置...
  configureWebpack: {
    resolve: {
      fallback: {
        path: require.resolve('path-browserify')
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        // 匹配所有 '/api' 开头的请求路径
        target: 'http://localhost:8080/', // 后端服务的基础路径
        changeOrigin: true // 是否跨域
        // pathRewrite: {
        //   '^/api': '' // 重写路径：去掉路径中的 '/api'
        // }
      }
    }
  }
};
