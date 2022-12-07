const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

//Craete a User using: POST "/api/auth". Doesn't require Auth
router.post('/',[
    body('email','enter a valid email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('name').isLength({ min: 3 }),
],(req,res)=>{
    console.log(req.body);
    const user = User(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email:req.body.email,
      }).then(user => res.json(user))
      .catch(err=>console.log(err),
      res.json({error:'Please enter a unique value for email'}));
})

module.exports = router