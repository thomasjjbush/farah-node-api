'use strict';

const mongoose = require('mongoose');
const model = mongoose.model('Config');

exports.all = function (req, res) {
    console.log(req)
    model.find({}, function (err, config) {
        if (err) res.send(err);
        res.json(config);
    });
};

exports.category = function (req, res) {
    model.findOne({category: req.params.category}, function (err, config) {
        if (err) res.send(err);
        res.json(config);
    });
};

exports.update = function (req, res) {
    model.findOneAndUpdate({ category: req.params.category }, req.body, {new:true}, function (err, category) {
        if (err) res.send(err);
        res.json(category);
    });
};