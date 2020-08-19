const express = require('express');
const router = express.Router();

router.get('/user/signin',((req, res) => {
  res.render('users/signin.hbs');
}));

router.get('/user/signup',((req, res) => {
    res.render('users/signup.hbs');
}))
module.exports = router;
