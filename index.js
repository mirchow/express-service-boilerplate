'use strict'
require('dotenv').config()
const http = require('http')
const app = require('./server/app')
const server = http.createServer(app)
const packageJson = require('./package.json')

const port = process.env.PORT ? process.env.PORT : 8020

server.listen(port, () => {
  console.log(`${packageJson.name} server listening on port ${port}`)
})
