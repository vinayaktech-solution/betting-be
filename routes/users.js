const express = require('express');
const router = express.Router();
const userModel = require('../user/user.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  userModel.find((err,data)=> {
    if(!err)
    res.send(data);
  })
});
router.post("/", async (req, res) => {
  //find an existing user
  let user = await userModel.findOne({ username: req.body.username });
  if (user) return res.status(400).send("User already registered.");

  user = new userModel({
    username: req.body.username,
    password: req.body.password,
    usertype: req.body.usertype
  });
  await user.save().then((result) => {
    res.status(200).json({ 'User': 'Added successfully' });
  })
  .catch((err) => {
    res.status(400).send("unable to save the  into database");
  });
});

module.exports = router;
