/*jshint esversion: 6 */

'use strict';
let db = require("./config/db.js");
let user = require('./models/user')(db.sequelize, db.Sequelize);

module.exports.create = (event, context, callback) => {

    user.create({userid: event.userid, name: event.name, email : event.email})
    .then(() =>{
        callback(null, "success");
    });

    // return user.create({ userid: event.userid, name: event.name , email : event.email })
        //     .then(() => user.findOrCreate({where: {userid: event.userid}, defaults: {name: event.name , email : event.email }}))
        //     .spread((user, created) => {
        //         console.log(user.get({
        //             plain: true
        //         }))
        //         console.log(created)
        //     });

};

module.exports.list = (event, context, callback) => {

    user.findAll({ raw: true }).then((user) =>{
        console.log(user);
    });
    callback(null, "success");

};

module.exports.get = (event, context, callback) => {

        user.findOne({ where: {userid : event.userid},  raw: true }).then((user) =>{
            console.log("Number of Record updated: ",user);
        });
        callback(null, "success");

};

module.exports.update = (event, context, callback) => {

                user.update({name: event.name, email : event.email}, {where: { userid : event.userid}})  .then((user) =>{
                    console.log(user);
                });
                callback(null, "success");

};

module.exports.delete = (event, context, callback) => {

                user.destroy({ where: {userid : event.userid}}).then((user) =>{
                    console.log("Number of Record Deleted: ",user);
                });
                callback(null, "success");

};