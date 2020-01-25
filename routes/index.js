const UserController = require('@user/routers')

module.exports = app=>{
    app.use('/user',UserController)
}