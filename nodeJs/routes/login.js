const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const User = require('../module/user');
const bcrypt = require('bcrypt');

const secret_key = process.env.password
router.post('/login',async (req,res)=>{
    const {email , password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).send('password or email is not valid');
    const validPass = bcrypt.compare(password ,user.password);
    console.log(validPass)
    if(!validPass) return res.status(400).send('password or email is not valid');
    const token = jwt.sign({email:user.email ,name:user.name}, secret_key);
    res.json({ token })
})

module.exports = router