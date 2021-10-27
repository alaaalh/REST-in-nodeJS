const mongoose = require('mongoose');
const express = require('express')
const User = require('./users');
const router = require('./route/route')

//meddle ware
const app = express();
app.use(express.json())

//routers
app.use('/users',router)
mongoose.connect(`mongodb+srv://ITIMinia:oE0DHMzPBXz06Hj7@cluster0.mz6gk.mongodb.net/ITP_Almahalla`)
.then(async ()=>{
    console.log('connect to mongodb');
    app.listen('4000' , ()=>{
        console.log('listen on port')
    })
  
}).catch(console.error)


module.exports = User
