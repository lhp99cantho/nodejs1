const express = require('express');
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Users = require('../app/models/Users')
const { covertoObject } = require('../util/mongoose')

function localPassport() {
    passport.serializeUser((user, done) =>{
        done(null, user.id)
    })

    passport.deserializeUser((id, done) =>{
        Users.findById(id)
            .then((user) =>{
                done(null, user)
            })
            .catch((err) => console.log(err))
    })

    passport.use(new LocalStrategy(
        (username, password, done) =>{
            Users.findOne({username: username, password: password})
                .then((user) => done(null, user))
                // .then((user) => done(null, user))
                .catch((err) => {
                    console.log('Khong co users' + err)
                    return done(null,false)
                })
        }
    ))
    }
module.exports = {localPassport}