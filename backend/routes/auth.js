const express = require('express');
const router = express.Router();

//@route GET api/auth
//@description GET logged in user
//@access Private

router.get('/', (req, res) => {
  res.send('Get logged in user');
});

//@route POST api/auth
//@description Authenticate user and retrieve JWT
//@access Public
router.post('/', (req, res) => {
  res.send('Log in user');
});

module.exports = router;