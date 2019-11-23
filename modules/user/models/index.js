const DBO = require('@common/services/db.common.service.js')
class UserModels{
  constructor(){
    this.dbo = new DBO()
  }

  async createUser(oData){
    let query = `SELECT * FROM auth where user='${oData.user}'`
    let data = await this.dbo.query(query)
    if(data.length>0){
      return `${oData.user} is already used`
    }else{
      query = `INSERT INTO auth SET ?`
      return await this.dbo.query(query,oData)
    }
  }
  
  async getUser(user){
    const query = `SELECT * FROM auth where user ${user}`
    return await this.dbo.query(query)
  }
}
module.exports = UserModels