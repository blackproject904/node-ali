const UserController = require('@user/controllers')
const app = require('express')
const router = app.Router()
const UserMiddleware = require('@user/middlewares')

const rpc = new UserController()
const mdw = new UserMiddleware()
router.post('/login',rpc.login)
router.get('/me',mdw.auth,rpc.getUserById)
router.post('/register',rpc.createUser)
router.put('/change',rpc.updateUser)
router.delete('/delete',rpc.deleteUser)


module.exports = router