module.exports = {
  devServer: {
    clientLogLevel: 'info',
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/sass/main.sass"'
      }
    }
  },
  assetsDir: 'assets'
}
