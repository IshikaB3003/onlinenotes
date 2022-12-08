const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

//Craete a User using: POST "/api/auth/createUser". Doesn't require Auth
router.post('/createUser',[
    body('email','enter a valid email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('name').isLength({ min: 3 }),
],async(req,res)=>{
    console.log(req.body);
    // const user = User(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //check if email already exists
    
    try{
    let user = await User.findOne({email: req.body.email});
    if(user){
        return req.status(400).json({error: "Sorry a user with this email already exists"})
    }

    user = await Users.create({
        name: req.body.name,
        password: req.body.password,
        email:req.body.email,
      })
    //   .then(user => res.json(user))
    //   .catch(err=>console.log(err),
    //   res.json({error:'Please enter a unique value for email'}));
    res.json(user)
    } catch(error){
        console.error(error.message);
        // res.status(500).send("some error occured");
        res.status(500).json({error:"some error occurooed"})

    }
})

module.exports = router