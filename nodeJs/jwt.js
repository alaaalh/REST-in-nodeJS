const jwt = require('jsonwebtoken');

const user = {
    name: 'alaa',
    email: 'alaa@gmail.com',
    type: 'admin',
    password: ''
}

const token = jwt.sign({name:user.name,email:user.email,type :user.type} , 'myPriviteKey')