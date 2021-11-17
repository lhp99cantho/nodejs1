const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/siteController');

router.get('/timkiem', siteController.index);
router.get('/', siteController.index);

module.exports = router;
