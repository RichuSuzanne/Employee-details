var mongoose = require('mongoose')

var schema = mongoose.Schema({
    Name: String ,
    Age: Number,
    Dept: String,
    Sal: Number
})
var empModel = mongoose.model("employ",schema)
module.exports=empModel