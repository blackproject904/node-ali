const UserController = require('@user/routers')

module.exports = app=>{
    app.use('/user',UserController)
    app.route('/').get((req,res)=>{
        res.send('Testing Router')
    })
}