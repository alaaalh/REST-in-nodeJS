const mongoose = require('mongoose');
const User = require('./module/user');
const express = require('express');
const userRouter = require('./routes/user')
const logger = require('./medelware/logger')
const router = require('./routes/login')

const NODE_ENV = process.env.NODE_ENV

const app = express();

//medalWares
app.use(express.json())
app.use('/auth',router)

if(NODE_ENV === 'development')
app.use(logger)

app.use((req,res,next)=>{
    if(req.url !== "/user") return res.status(400).send('send in /user only')
    console.log('medalware');
    next()
})

app.use('/user', userRouter)//Routes

app.get('/register',(req ,res)=>{
    res.render('register')
})


mongoose.connect('mongodb+srv://ITIMinia:oE0DHMzPBXz06Hj7@cluster0.mz6gk.mongodb.net/practice')
    .then(async ()=>{
        console.log('connection with mongoose');
        app.listen('3500',()=>{
            console.log('app listen on port 3000')
        })
    }).catch(console.error)