const Users = require('../models/Users');
const Items = require('../models/Items');
const { coverstoObject } = require('../../util/mongoose');
const { covertoObject } = require('../../util/mongoose');
const { query } = require('express');

class AdminController {
    manager(req, res, next){
        if(req.isAuthenticated()){
            // let itemsQuery = Items.find({})
            // itemsQuery
            //     .then(item =>{
            //         res.render('admin/manager',{item: coverstoObject(item)})
            //     })
            res.send('Admin')
        }
        else{
            res.send('Ban chua dang nhap')
        }
    }
}

module.exports = new AdminController();
