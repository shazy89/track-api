const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Track = mongoose.model('Track');

const router = express.Router();

//everything inside will make use of user auth
router.use(requireAuth); //every use of routhes will require user to be signed in

router.get('/tracks', async (req, res) => {
    const tracks = await Track.find({ userId: req.user._id });
  
    res.send(tracks);
  });

module.exports = router;