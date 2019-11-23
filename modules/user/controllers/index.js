const UserServices = require('@user/services')
class UserController{
    constructor(){
        this.userServices = new UserServices()
        // this.index = this.index.bind(this)
        this.create = this.create.bind(this)
        this.getUser = this.getUser.bind(this)
    }
    async create(req,res){
        const create = await this.userServices.createUser(req.body)
        res.status(create.status)
        if(create.status===200){
            res.send({
                message: create.message
            })
        }
        res.send({
            message: create.message
        })
    }

    async getUser(req,res){
        res.send({
            data: await this.userServices.getUser(req.params.id)
        })
    }
}

module.exports = UserController