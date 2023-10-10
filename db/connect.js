const  mongoose = require('mongoose')
const url = require("url");
const ConnectDb = (url)=>{
    return new mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}
module.exports = ConnectDb