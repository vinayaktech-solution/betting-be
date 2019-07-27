const express = require('express');
const router = express.Router();
const userModel = require('../user/user.model');
router.post('/', async function(req, res, next) {
    let user = await userModel.findOne({ username: req.body.username});
    if(user.password===req.body.password && user.usertype===req.body.usertype) {
        res.send('login successfull');
    } else {
        res.send('invalid credential');
    }
  });
  module.exports = router;