// const http = require('http');

// const app = http.createServer((req,res)=>{
//     console.log('port 4000 is running')
//     res.write('hello in port 4000');
//     console.log(req.url => / or client or ....)
//     req.method => get or post or ....
//     res.end()
// })
// app.listen('4000')



const express = require('express');
const todoRoute = require('./route/route')
const app = express()

app.use(express.json());
app.use('/todos' ,todoRoute)




app.listen(4000)