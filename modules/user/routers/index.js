const UserController = require('@user/controllers')
const app = require('express')
const router = app.Router()

router.route('/me')
    .get(UserController.getUserById)

router.route('/create')
    .post(UserController.createUser)

router.route('/change')
    .put(UserController.updateUser)

router.route('/delete')
    .delete(UserController.deleteUser)


module.exports = router