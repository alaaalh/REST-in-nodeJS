const jwt = require('jsonwebtoken')

const secret_key = process.env.password
const auth = async(req , res , next)=>{
    const token = req.headers.token
    try{
        jwt.verify(token , secret_key);
        next();
    }catch{
        res.status(404).send('invalid_email')
    }
}

module.exports = auth