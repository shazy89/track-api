const express = require('express');
const mongose = require('mongoose');
//to get access to the user model require mongose then
const User = mongose.model('User');
  // now we 
const router = express.Router();

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
    const user = new User({ email, password });
    await user.save();
   } catch (err) {
      return res.status(422).send(err.message)
   }

    res.send('You made a post request')
})

module.exports = router;