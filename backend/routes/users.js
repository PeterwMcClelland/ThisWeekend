const express = require('express');
const router = express.Router();

//add User Schema
const User = require('../models/User');

//@route POST api/users
//@description Register a new user
//@access Public

router.post('/', (req, res) => {
  res.send('Registers a user');
});

module.exports = router;