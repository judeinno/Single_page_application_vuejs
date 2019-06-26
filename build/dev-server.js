const webpack = require('webpack')
const clientConfig = require('./webpack.client.config')
const serverConfig = require('./webpack.server.config')
const MFS = require('memory-fs')

module.exports = function setupDevServer (app, onUpdate) {
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
  const clientCompiler = webpack(clientConfig)
  app.use(
    require('webpack-dev-middleware')(clientCompiler, {
      stats: {
        colors: true
      }
    })
  )
  app.use(require('webpack-hot-middleware')(clientCompiler))

  const serverCompiler = webpack(serverConfig)
  const mfs = new MFS()
  const outputPath = path.join(serverConfig.output.path, 'server/main.js')
  serverCompiler.outputFileSystem = mfs
  serverCompiler.watch({}, () => {
    onUpdate(mfs.readFileSync(outputPath, 'utf-8'))
  })
}
