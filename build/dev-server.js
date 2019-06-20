const webpack = require('webpack');
const clientConfig = require('./webpack.client.config');

module.exports = function setupDevServer(app) {
  // Extend config file and add a new entry point
  clientConfig.entry.app = [
    'webpack-hot-middleware/client',
    clientConfig.entry.app
  ]
  // Requred plugins for hot reloading middleware to work
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
  const clientCompiler = webpack(clientConfig);
  app.use(
    require('webpack-dev-middleware')(clientCompiler, {
      stats: {
        colors: true
      }
    })
  );
  app.use(require('webpack-hot-middleware')(clientCompiler));
}
