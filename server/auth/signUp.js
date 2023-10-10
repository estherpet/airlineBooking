const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const signUpScheme = new Schema({
    _id :{
        type: String
    },
    firstName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
signUpScheme.pre('save',function(){
    if(this._id === null){
        this._id = new mongoose.Types.ObjectId().toString()
    }
}
)
const SignUp = mongoose.Model('signUp',signUpScheme);
module. exports = SignUp