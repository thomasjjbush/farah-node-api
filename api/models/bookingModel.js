'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookingSchema = new Schema({
    label: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    appointment: {
        type: String, 
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Bookings', bookingSchema);