const express = require('express');
const router = express.Router();
const adminModel = require('../admin/admin.model');
const superUserModel = require('../super-user/super-user.model');
router.post('/', async function(req, res, next) {
    let user = await adminModel.findOne({ username: req.body.username});
    console.log(user);
    if(user.password===req.body.password) {
        let superuserData = superUserModel.find((err, data)=> {
            if(!err)
            res.redirect('/users');
            
        }) ;
    } else {
        res.send('invalid credential');
    }
  });
  module.exports = router;