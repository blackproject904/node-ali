const DBO = require('@common/services/db.common.services.js')
class UserModels{
  constructor(){
    this.dbo = new DBO()
  }

  async createUser(oData){
    const query = `INSERT INTO `
    const data = oData.toArray()
  }
}