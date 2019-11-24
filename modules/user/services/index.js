const UserModels = require('@user/models')

class UserServices{
  constructor(){
    this.userModels = new UserModels()
  }

  async getAllUser(){
    return {
      status: 200,
      data: await this.userModels.getAllUser()
    }
  }

  async createUser(data){
    const userData = {
      user: data.user,
      email: data.email
    }

    if(!await this.checkUserAvailablity(userData.user)){
      const result = await this.userModels.createUser(userData)
      if(result.affectedRows>0){
        return{ status: 200 }
      }
      return { status: 500, message: 'Internal Server Error'}
    }
    return {
      status: 400,
      message: 'user is already exists'
    }
  }

  async getUser(data){
    let result =  await this.userModels.getUserById(data)
    if(result.length>0){
      return {
        status: 200,
        data: result
      }
    }else{
      return {
        status: 500,
        message: 'Internal Server Error'
      }
    }
  }

  async checkUserAvailablity(username){
    const result = await this.userModels.getUser(username)
    console.log(result)
    if(result.length>0){
      return true
    }
    return false
  }
}

module.exports = UserServices