const UserModels = require('@user/models')

class UserServices{
  constructor(){
    this.userModels = new UserModels()
  }

  async createUser(data){
    return await this.userModels.createUser(data)
  }
}