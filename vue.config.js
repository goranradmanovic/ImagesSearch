const webpack = require("webpack");

module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Images Search';
      return args;
    });
  },
}
