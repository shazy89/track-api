require('dotenv').config()
const express = require('express');
const mongose = require('mongoose');
const jwt = require('jsonwebtoken');
//to get access to the user model require mongose then
const User = mongose.model('User');
  // now we 
const router = express.Router();

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
    const user = new User({ email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.MY_SECRET_KEY);
      res.send({ token: token })
   } catch (err) {
      return res.status(422).send(err.message)
   }


})

module.exports = router;