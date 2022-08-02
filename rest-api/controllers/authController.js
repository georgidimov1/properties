const router = require('express').Router()
const User = require ('../models/user')

router.post('/register', (req, res, next) => {
   let user = new User(req.body)
   user.save((err) => {
    if (err) {
       return next(err);
    }
    else{
        console.log("saved!")
        } 
  }
 )
});
module.exports = router; 