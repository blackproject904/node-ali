const DBO = require('@common/services/db.common.service.js')
class UserModels{
  constructor(){
    this.dbo = new DBO()
  }

  async createUser(oData){
    const query = `INSERT INTO auth SET ?`
    return await this.dbo.query(query,oData)
  }
  
  async getAllUser(){
    const query =  `SELECT * FROM auth`
    return await this.dbo.query(query)
  }

  async getUser(user){
    const query = `SELECT * FROM auth WHERE user=${user}`
    return await this.dbo.query(query)
  }

  async getUserById(id){
    const query = `SELECT * FROM auth WHERE id=${id}`
    return await this.dbo.query(query)
  }
}
module.exports = UserModels