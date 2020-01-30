const jwt = require('jsonwebtoken')
const UserModel = require('@user/models')

class UserMiddleware{
    constructor(){
        this.userModel = new UserModel()
    }

    async auth(req,res,next) {
        const token = req.header('Authorization').replace('Bearer ','')
        try{
            const data = jwt.verify(token,process.env.JWT_KEY)
            const user = await this.userModel.getToken(data._id,token)
            if(user.length==0){
                throw new Error()
            }
            req.user = user
            req.token = token
            next()
        }catch(error){
            res.status(401).send({
                error: 'Not authorized to access this resources'
            })
        }
    }
}

module.exports = UserMiddleware