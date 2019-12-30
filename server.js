require('module-alias/register')

const express = require('express')
const routes = require('./routes')
const server = require('@config/server.js')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DB_DB,process.env.DB_USER,process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been estabilished sucessfully.')
  })
  .catch(err => {
    console.log('Unable to connect to the database:', err)
  })

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
routes(app)

const host = process.env.HOST || server.host
const port = process.env.PORT || server.port

module.exports = app.listen(port,host)

console.log(`Server started at ${host}:${port}`)