const DBO = require('@common/services/db.common.services.js')
class UserModels{
  constructor(){
    this.dbo = new DBO()
  }

  // async createUser(oData){
  //   let query = `SELECT * FROM auth where user='${oData.user}'`
  //   let data = await this.dbo.query(query)
  //   if(data.length>0){
  //     return `${oData.user} is already used`
  //   }else{
  //     query = `INSERT INTO auth(user,email) VALUES ('${oData.user}','${oData.email}')`
  //     return await this.dbo.query(query)
      
  //   }

  // }
}