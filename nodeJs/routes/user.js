const express = require('express');
const User = require('../module/user');
const bcrypt = require('bcrypt')
const auth = require('../medelware/auth')


const router = express.Router();

router.get('/',auth ,async(req , res)=>{
    const users = await User.find()
    res.json(users)

})

router.get('/:id',async(req , res)=>{
    id= req.params.id
    const user = await User.findById(id);
    res.json(user)

})

router.post('/',async(req , res)=>{
    const {name , email ,password}= req.body;
    if(!name) return res.status(404).send('name is required')
    const bcryptHash = await bcrypt.hash(password , 10);
    const user = await new User({name , email ,password : bcryptHash}).save();
    res.json({ name: user.name , email: user.email})

})

router.put('/:id',async(req , res)=>{
    const id= req.params.id
    const {name , email ,password}= req.body
    const user = await User.findByIdAndUpdate(id,{name , email ,password},{new:true});
    res.json(user)

})

router.delete('/:id',async(req , res)=>{
    const id= req.params.id
    const user = await User.findByIdAndDelete(id)
    res.json(user)

})

module.exports = router

