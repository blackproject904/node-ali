const UserServices = require('@user/services')
class UserController{
    constructor(){
        this.userServices = new UserServices()
        this.index = this.index.bind(this)
        this.create = this.create.bind(this)
        this.getUserById = this.getUserById.bind(this)
    }
    async create(req,res){
        if(req.body.data!=null){
            res.send({
                data: await this.userServices.createUser(req.body.data)
            })
        }
    }
}

module.exports = UserController