const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const airlineBookingSchema = Schema(
    {
        _id:{
            type:toString
        },
        date:{
            type:String
        },
        PassengerId:{
            type:String
        },
        time:{
            type:String
        },
        description:{
            type:String
        }
    }
)
airlineBookingSchema.pre('save',function(next){
    
    if(this._id === null){
        this._id = mongoose.Schema.Types.ObjectId
    }
})
const Booking = mongoose.Model('Booking',airlineBookingSchema)
module.exports = Booking
