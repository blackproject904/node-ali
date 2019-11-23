const UserModels = require('@user/models')

class UserServices{
  constructor(){
    this.userModels = new UserModels()
  }

  async createUser(data){
    const userData = {
      user: data.user,
      email: data.email
    }
    return await this.userModels.createUser(userData)
    
  }

  async getUser(data){
    let result =  await this.userModels.getUser(data)
    if(result.length>0){
      return result
    }else{
      return {message: 'data tidak ditemukan'}
    }
  }
}

module.exports = UserServices