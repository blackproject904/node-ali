const UserController = require('@user/controllers')

module.exports = (app)=>{
    const userController = new UserController()

    app.route('/')
        .get(userController.index)

    app.route('/user')
        .get(userController.index)
        .post(userController.create)

    app.route('/user/:id')
        .get(userController.getUserById)
}