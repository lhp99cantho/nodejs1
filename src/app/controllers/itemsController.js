const Users = require('../models/Users');
const Items = require('../models/Items');
const { coverstoObject } = require('../../util/mongoose');
const { covertoObject } = require('../../util/mongoose');
const { query } = require('express');

class ItemsController {
    showItems(req, res, next){
        Items.findOne({ slug: req.params.slug })
        .then(item =>
            res.render('admin/showItem', {item: covertoObject(item)})
        )
        .catch(next)
    }

    index(req, res, next){
        res.send('Items')
    }
}

module.exports = new ItemsController();