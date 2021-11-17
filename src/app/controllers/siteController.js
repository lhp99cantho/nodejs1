const User = require('../models/Users');
const Items = require('../models/Items')
const { coverstoObject } = require('../../util/mongoose');
const { covertoObject } = require('../../util/mongoose');
const { query } = require('express');

class SiteController {
    index(req, res, next){
        Items.find({})
            .then((item) =>{
                res.render('home',{item: coverstoObject(item)})
            })
    }    

    login(req, res, next){
        res.render('login')
    }


}

module.exports = new SiteController();
