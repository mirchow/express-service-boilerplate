const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const packageJson = require('../package.json')
const swaggerJSDoc = require('swagger-jsdoc')

const swaggerOptions = require('./swaggerOptions')
const swaggerSpec = swaggerJSDoc(swaggerOptions)

// Setup logging
const loggerConfig = {
  name: packageJson.name,
  level: process.env.LOGGER_LEVEL ? process.env.LOGGER_LEVEL : 'warn'
}
require('express-pino-logger')(loggerConfig)

// Turn off useless response header.
app.disable('x-powered-by')

// Setup health check monitoring route.
const basePath = process.env.BASE_PATH ? process.env.BASE_PATH : ''
app.get(`${basePath}/health`, (req, res) => res.send('OK'))

// Enable Openapi documentation endpoint
app.get(`${basePath}/openapi.json`, (req, res) => res.json(swaggerSpec))

// For POST and PUT calls use body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

module.exports = app
