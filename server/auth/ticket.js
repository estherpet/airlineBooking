const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ticketScheme = new Schema(
    {
        id:{
            type: String
        },
        ticketDescription:{
            type: String
        },
        ticketDate:{
            type: String
        },
        destination:{
            type: String
        }
    }
) 
ticketScheme.pre('save', function(){
    if(this._id === null ){
        this._id = mongoose.Schema.Types.ObjectId
    }
})
const Ticket = mongoose.model('Ticket',ticketScheme)
module.exports = Ticket