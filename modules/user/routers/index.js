const UserController = require('@user/controllers')
const app = require('express')
const router = app.Router()
const UserMiddleware = require('@user/middlewares')

router.route('/me')
    .get(UserMiddleware.auth,UserController.getUserById)

router.route('/create')
    .post(UserController.createUser)

router.route('/change')
    .put(UserController.updateUser)

router.route('/delete')
    .delete(UserController.deleteUser)


module.exports = router