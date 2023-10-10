const user = require ('../server/auth/user')

const {NotFoundException} = require('../server/Exception/notFoundException')
const  UserService = require('./userService')
const jwt = require('jsonwebtoken')
const {request} = require("express");

async  function save (request){
    const user = await UserService.createUser(request)

    const {_id,userName} = user
    const token = jwt.sign({_id,userName},'PrivateKey')

    return{
        token:token,
        message:user.message
    }
}

async  function logIn(request){
    const {password} = request
    const user = await UserService.findUserByEmail(request)
    if (!user){
        throw  new NotFoundException('user not found')
    }
    const  passwordDecode = await comparePassword(password,user.data.password)
    const  foundUser = await User.findOne({passwordDecode})
    if (!foundUser){
        throw new NotFoundException ('invalid password')
    }
    const  {_id,userName} = foundUser
    const token = jwt.sign({_id,userName},'PrivateKey')
}
const createUser = async(request) => {
    const {firstName,lastName,password,email,userName} = request;
    const user = User.findOne({email})

    if(user){
        throw new NotFoundException ('User already exist')
    }
    const newUser = new User({
        firstName: firstName,
        lastName:lastName,
        email:email,
        password: password,
        userName:userName,
    })
    const savedUser = newUser.save()

    return{
        data: savedUser,
        message:'User created successfully'
    }
}
const findUserByEmail = async (request) =>{

}
async function logIn (request){
    const {email,password} = request
    const user = User.findOne({email })
    if(!user){
        throw new NotFoundException('User not found')
    }
    return{
        data:user,
        message:'user successfully retrived'
    }
}