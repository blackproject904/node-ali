const UserModels = require('@user/models')
const HttpStatus = require('http-status-codes')
const Validator = require('fastest-validator')
const crypt = require('bcryptjs')
class UserServices{
  constructor(){
    this.userModels = new UserModels()
    this.validator = new Validator()
    this.UserSchema = {
      user: {
        type: 'string',
        min: 5
      },
      password: {
        type: 'string',
        min: 8
      },
      email:{
        type: 'email'
      }
    }
  }

  async getAllUser(){
    return {
      status: HttpStatus.OK,
      data: await this.userModels.getAllUser()
    }
  }

  async createUser(data){
    const userData = {
      user: data.user,
      email: data.email,
      password: await crypt.hash(data.password,10)
    }

    const isValid = await this.validator.validate(userData,this.UserSchema)
    if(!isValid){
      return {
        status: HttpStatus.BAD_REQUEST,
        data: {
          error_code: 'FORM_VALIDATION',
          message: isValid
        }
      }
    }

    const isAvailable = await this.checkUserAvailablity(userData.user)
    if(!isAvailable){
      const result = await this.userModels.createUser(userData)
      if(result.affectedRows>0){
        return{ 
          status: HttpStatus.OK 
        }
      }
      return { 
        status: HttpStatus.INTERNAL_SERVER_ERROR, 
        data:{
          error_code: 'DUPLICATE_ENTRY',
          message: result
        }
      }
    }else{
      return {
        status: HttpStatus.BAD_REQUEST,
        data: {
          error_code: 'DATA_VALIDATION',
          message: isAvailable
        }
      }
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
      return [
        {
          message: 'Username already exist'
        }
      ]
    }
    return false
  }
}

module.exports = UserServices