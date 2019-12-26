const proxy = require('http-proxy-middleware');

const options = {
  target: 'http://api.xikeqiche.com/',
  changeOrigin: true,
  pathRewrite:{'/app': '/app'}
}

module.exports = function(app){
  app.use(proxy('/app',options))
}