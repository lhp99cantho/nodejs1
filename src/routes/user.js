const express = require('express');
const passport = require('passport');
const router = express.Router();

const siteController = require('../app/controllers/siteController');
const adminController = require('../app/controllers/adminController');


router.get('/', siteController.login);
router.post('/', passport.authenticate('local', {successRedirect: '/admin', failureRedirect: '/login'}))

module.exports = router;