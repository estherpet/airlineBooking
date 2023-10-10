const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const { Roles } = require("../common/Role");



const user = {
    _id:{
        type:String
    },
    _email:{
        type:String
    },
    password:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    role:{
        type:String,
        default: Roles.Roles.Passengers
    }

}