const UserServices = require('@user/services')
class UserController{
    constructor(){
        this.userServices = new UserServices()
    }

    async getUserById(req,res){
        const result = await this.userServices.getUserById(req.query)
        res
            .status(result.status)
            .send(result.data)
    }
    
}

module.exports = UserController