const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name:String,
    email:String,
    gender:String
},

 
  

{collection : "users"})
const model = mongoose.model('userSchema', userSchema)
module.exports = model;

