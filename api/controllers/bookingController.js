'use strict';

const mongoose = require('mongoose');
const model = mongoose.model('Bookings');
var moment = require('moment');
moment().format();

exports.bookings = function (req, res) {
    const start = moment(req.params.week).toDate().toISOString();
    const end = moment(start).add(7, 'days').toDate().toISOString();
    model.find({
            appointment: {
                $gte: start,
                $lt: end
            }
        },
        function (err, bookings) {
            if (err) res.send(err);
            res.json(bookings);
        }
    );
};

exports.create = function (req, res) {
    var new_booking = new model(req.body);
    new_booking.save(function (err, booking) {
        if (err) res.send(err);
        res.json(booking);
    });
};

exports.update = function (req, res) {
    model.findOneAndUpdate({ _id: req.params.id }, req.body, {new:true}, function (err, booking) {
        if (err) res.send(err);
        res.json(booking);
    });
};

exports.delete = function (req, res) {
    model.remove({ _id: req.params.id }, function (err) {
        if (err) res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};