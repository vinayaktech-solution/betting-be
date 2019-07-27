const express = require('express');
const router = express.Router();
const superUserModel = require('../super-user/super-user.model');
router.post('/', async function(req, res, next) {
    let user = await superUserModel.findOne({ username: req.body.username});
    if(user.password===req.body.password && user.usertype===req.body.usertype) {
        res.redirect('/users');
    } else {
        res.send('invalid credential');
    }
  });
  module.exports = router;