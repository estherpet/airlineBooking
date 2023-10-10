const mongoose = require ('mongoose')
const { BookingType } = require('../common/BookingTypes')
const Schema = mongoose.Schema


const airlineEnquiryScheme = new Schema(
    {
        id:{
            type:String
        },
        title:{
            type:String
        },
        description:{
            type : String
        },
        date:{
            type:String
        },
        bookingType:{
            type:String,
            default:BookingType.FirstClass
        },
    }
)
airlineEnquiryScheme.pre(`save`,function(){
    try{
        if(!this._id)
    
    this._id = mongoose.Schema.Types.ObjectId().toString()
    }
})
const AirlineEnquiry = mongoose.model('AirlineEnquiry',airlineEnquiryScheme)
module.exports = AirlineEnquiry