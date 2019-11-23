require('module-alias/register')

const express = require('express')
const routes = require('./routes')
const server = require('@config/config.js')
const sequelize = require('sequelize')

const app = express()
routes(app)

const host = process.env.HOST || server.host
const port = process.env.PORT || server.port

module.exports = app.listen(port,host)

console.log(`Server started at ${host}:${port}`)