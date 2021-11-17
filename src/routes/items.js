const express = require('express');
const router = express.Router();

const itemsController = require('../app/controllers/itemsController');

router.get('/:slug', itemsController.showItems);

router.get('/', itemsController.index);

module.exports = router;
