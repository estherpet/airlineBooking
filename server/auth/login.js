const { Timestamp } = require("mongodb")
const{mongoose} = require(`mongoose`)
const Schema = mongoose.Schema




const logInScheme = new Schema(
    {
        id: {
            type: String
        },
        email:{
            type: String
        },
        password:{
            type:String
        }
    },Timestamp
)
logInScheme.pre('save',function(){
    if(this._id === null){
        this._id = mongoose.Schema.Types.ObjectId
    }
})
const LogIn = mongoose.model('LogIn', logInScheme)
module.exports = LogIn
