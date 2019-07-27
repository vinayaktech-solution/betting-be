const express = require('express');
const router = express.Router();
const superUserModel = require('../super-user/super-user.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
    superUserModel.find((err,data)=> {
        if(!err)
        res.send(data);
      })
});
router.post("/", async (req, res) => {
  //find an existing user
  let user = await superUserModel.findOne({ username: req.body.username });
  if (user) return res.status(400).send("User already registered.");

  superUser = new superUserModel({
    username: req.body.username,
    password: req.body.password,
    usertype: req.body.usertype
  });
  await superUser.save().then((result) => {
    res.status(200).json({ 'Super-User': 'Added successfully' });
  })
  .catch((err) => {
    res.status(400).send("unable to save the  into database");
  });
});

module.exports = router;
