const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')
let renderer

const indexHTML = (() => {
  // Resolve the path
  return fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
})()

// express.static Returns all static modules from the dist folder
app.use('/dist', express.static(path.resolve(__dirname, './dist')))

// Extend the server with webpack-dev-middleware and webpack-hot-middleware for hot reloading
require('./build/dev-server')(app, bundle => {
  renderer = createBundleRenderer(bundle)
})

app.get('*', (req, res) => {
  renderer.renderToString({ url: req.url }, (err, html) => {
    if (err) {
      return res.status(500).send('Server Error')
    }
    html = indexHTML.replace('{{ APP }}', html)
    res.write(html)
    res.end()
  })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
