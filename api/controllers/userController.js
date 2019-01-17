'use strict';
var md5 = require('md5');


var mongoose = require('mongoose'),
    User = mongoose.model('Users');

// Register User
exports.register = function (req, res) {
    req.body.password = md5(req.body.password)
    var user = new Users(req.body);
    user.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

// User login
exports.login = function (req, res) {
    User.findOne({ username: req.params.username }, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    })
};