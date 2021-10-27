const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{type:String , required:true},
    email:String,
    password:String,
})

const user = mongoose.model('users', schema)

module.exports = user