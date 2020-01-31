const UserServices = require('@user/services')
class UserController{
    constructor(){
        this.userServices = new UserServices()
        this.login = this.login.bind(this)
        this.getUserById = this.getUserById.bind(this)
        this.createUser = this.createUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.updateUser = this.updateUser.bind(this)
    }

    async login(req,res){
        const result = await this.userServices.login(req.body)
        res
            .status(result.status)
            .send(result.data)
    }
    async getUserById(req,res){
        const result = await this.userServices.getUserById(req.query)
        res
            .status(result.status)
            .send(result.data)
    }
    
    async createUser(req,res){
        const result = await this.userServices.createUser(req.body)
        res
            .status(result.status)
            .send(result.data)
    }

    async updateUser(req,res){
        const result = await this.userServices.updateUser(req.body)
        res
            .status(result.status)
            .send(result.data)
    }

    async deleteUser(req,res){
        const result = await this.userServices.deleteUser(req.query)
        res
            .status(result.status)
            .send(result.data)
    }
}

module.exports = UserController