const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack/dev.config');
const open = require('open');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  overlay: true,
  stats: { colors: true }
}).listen(3000, err => {
  if (err) {
    return console.log(err);
  }
});

open('http://localhost:3000');
