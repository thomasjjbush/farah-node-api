'use strict';

const mongoose = require('mongoose');
const model = mongoose.model('Services');

exports.category = function (req, res) {
    model.find({category: req.params.category}, function (err, service) {
        if (err) res.send(err);
        res.json(service);
    });
};

exports.create = function (req, res) {
    var new_service = new model(req.body);
    new_service.save(function (err, service) {
        if (err) res.send(err);
        res.json(service);
    });
};

exports.update = function (req, res) {
    model.findOneAndUpdate({ _id: req.params.id }, req.body, {new:true}, function (err, service) {
        if (err) res.send(err);
        res.json(service);
    });
};

exports.delete = function (req, res) {
    model.remove({ _id: req.params.id }, function (err) {
        if (err) res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};