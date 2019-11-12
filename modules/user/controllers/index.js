class UserController{
    constructor(){
        this.index = this.index.bind(this)
        this.getUserById = this.getUserById.bind(this)
    }

    async index(req,res){
        res.send({
            message: "testing"
        })
    }

    async getUserById(req,res){
        if(req.params.id!==null){
            res.send({
                message: "returned id: "+req.params.id
            })
        }
    }
    async create(req,res){
        if(req.params.id!==null){
            res.send({
                message: "create new user"
            })
        }
    }

}

module.exports = UserController